// import { Transaction } from "../domain/transactions/transaction";
import { Campaign } from "../../domain/campaigns/campaign";
import { CampaignDatabaseError } from "../../domain/campaigns/campaign-errors";
import { CampaignRepository } from "../../domain/campaigns/campaign-repository";
import { CommerceRepository } from "../../domain/commerces/commerce-repository";
import {
  TransactionDatabaseError,
  TransactionNotCreated,
} from "../../domain/transactions/transaction-errors";
import { TransactionPostBody } from "../../domain/transactions/transaction-interfaces";
import { TransactionRepository } from "../../domain/transactions/transaction-repository";

interface Carga {
  puntos: number;
  coins: number;
}

export class TransactionCreate {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly campaignRepository: CampaignRepository,
    private readonly commerceRepository: CommerceRepository
  ) {}

  async run(body: TransactionPostBody): Promise<Error | null> {
    const campaignInfo = await this.campaignRepository.getAll(
      body.commerce_id,
      body.branch_id
    );
    if (campaignInfo instanceof Error) {
      if (campaignInfo.name == "DocumentNotFoundError") {
        // Si campaña no existe
        const carga = await this.calculateRewards(body, null, false);
        carga ? (body.points = carga?.puntos) : null;
        carga ? (body.coins = carga?.coins) : null;
      } else {
        new CampaignDatabaseError(campaignInfo.message);
      }
    } else {
      //Calculo por defecto lo que le correspondería al usuario sin ninguna recompensa
      const carga = await this.calculateRewards(body, null, false);
      carga ? (body.points = carga?.puntos) : null;
      carga ? (body.coins = carga?.coins) : null;

      for (let i = 0; i < campaignInfo.length; i++) {
        //Chequeo campañas y calculo extras
        const fechaBody = new Date(body.transaction_date);
        const after = new Date(campaignInfo[i].transactions_after);
        const before = new Date(campaignInfo[i].transactions_before);
        // Cumple condiciones?
        if (
          campaignInfo[i].campaign_active &&
          body.amount >= campaignInfo[i].min_transaction_amount &&
          fechaBody.getTime() > after.getTime() &&
          fechaBody.getTime() < before.getTime()
        ) {
          console.log("cumple condiciones");
          const carga = await this.calculateRewards(
            body,
            campaignInfo[i],
            true
          );
          carga ? (body.points += carga?.puntos) : null;
          carga ? (body.coins += carga?.coins) : null;
        }
      }
      console.log("Soy el body final", body);
    }
    const error = await this.transactionRepository.create(body);
    if (error instanceof Error) {
      throw error.name == "ValidationError"
        ? new TransactionNotCreated(error.message)
        : new TransactionDatabaseError(error.message);
    }
    return null;
  }
  async calculateRewards(
    body: TransactionPostBody,
    campaignInfo: Campaign | null,
    conditions: boolean
  ): Promise<Carga | null> {
    const commerce = await this.commerceRepository.getById(body.commerce_id);
    if (commerce != null) {
      if (!conditions) {
        console.log(
          "sin condic1",
          body.amount,
          commerce.conversion_rate_points
        );
        const puntos = Math.round(
          body.amount / commerce.conversion_rate_points
        );
        console.log("sin condic", puntos);
        const coins = Math.round(body.amount / commerce.conversion_rate_coins);
        console.log(coins);
        return {
          puntos,
          coins,
        };
      } else {
        if (campaignInfo) {
          const puntos = Math.round(
            body.amount / commerce.conversion_rate_points
          );
          const coins = Math.round(
            body.amount / commerce.conversion_rate_coins
          );
          const puntosExtra = Math.round(
            (puntos * campaignInfo.reward_percentage) / 100
          );
          const coinsExtra = Math.round(
            (coins * campaignInfo.reward_percentage) / 100
          );

          if (campaignInfo.reward_type == "both") {
            return {
              puntos: puntosExtra,
              coins: coinsExtra,
            };
          } else if (campaignInfo.reward_type == "points") {
            return {
              puntos: puntosExtra,
              coins: 0,
            };
          } else {
            return {
              puntos: 0,
              coins: coinsExtra,
            };
          }
        }
      }
    }
    return null;
  }
}
