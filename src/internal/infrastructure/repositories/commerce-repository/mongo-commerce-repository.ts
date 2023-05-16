/* eslint-disable */
import { Commerce } from "../../../domain/commerces/commerce";
import { CommerceRepository } from "../../../domain/commerces/commerce-repository";
// import { CommerceError } from "../../../domain/commerces/commerce-error";
let Commerces = require('../../database/models/commerces');

export class MongoCommerceRepository implements CommerceRepository {

  async getById(id: string): Promise<Commerce|null> {
    console.log("Using Mongo for commerces!");
      const rawCommerce = await Commerces.findById(id).orFail();
      // console.log(rawCommerce)
      return rawCommerce ? new Commerce(
        rawCommerce.id, 
        rawCommerce.name, 
        rawCommerce.conversion_rate_points,
        rawCommerce.conversion_rate_coins,
        rawCommerce.created_at,
        rawCommerce.updated_at,
      ) : null;
  } 
}
