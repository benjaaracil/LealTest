import { TransactionCreate } from "../src/internal/application/transactions/transaction-create";
import { Campaign } from "../src/internal/domain/campaigns/campaign";
import { CampaignPostBody } from "../src/internal/domain/campaigns/campaing-interfaces";
import { Commerce } from "../src/internal/domain/commerces/commerce";
import { TransactionPostBody } from "../src/internal/domain/transactions/transaction-interfaces";

class MockTransactionRepository {
  async create(_body: TransactionPostBody): Promise<Error | null> {
    // Add your mock implementation here
    return null;
  }
}

class MockCampaignRepository {
  async getAll(_commerceId: string, _branchId: string): Promise<Campaign[]> {
    const campaignInfo: Campaign[] = [
      // Proporciona una lista de objetos Campaign para simular el resultado del método campaignRepository.getAll()
      // Asegúrate de proporcionar los valores adecuados para cumplir las condiciones en el bucle for
      {
        id: "6460f1d171235830d1c50652",
        commerce_id: "6460e9d071235830d1c5064d",
        name: "Campaña test 1",
        min_transaction_amount: 10000,
        reward_type: "coins",
        reward_percentage: 100,
        transactions_before: "2023-08-23T00:00:00.000Z",
        transactions_after: "2023-05-23T00:00:00.000Z",
        branches: ["6460ea6871235830d1c5064f"],
        start_date: "2023-05-14T00:00:00.000Z",
        end_date: "2023-08-23T00:00:00.000Z",
        campaign_active: true,
        created_at: "2023-05-14T00:00:00.000Z",
        updated_at: "2023-05-14T00:00:00.000Z",
      },
      {
        id: "64620af00fa71e590b012de9",
        commerce_id: "6460e9d071235830d1c5064d",
        name: "Campaña test 2",
        min_transaction_amount: 10000,
        reward_type: "both",
        reward_percentage: 100,
        transactions_before: "2023-08-23T00:00:00.000Z",
        transactions_after: "2023-05-23T00:00:00.000Z",
        branches: ["6460ea6871235830d1c5064f"],
        start_date: "2023-05-14T00:00:00.000Z",
        end_date: "2023-08-23T00:00:00.000Z",
        campaign_active: true,
        created_at: "2023-05-14T00:00:00.000Z",
        updated_at: "2023-05-14T00:00:00.000Z",
      },
    ];
    return campaignInfo;
  }
  async getById(id: string): Promise<Campaign | Error> {
    const campaign: Campaign = {
      id: "6460f1d171235830d1c50652",
      commerce_id: "6460e9d071235830d1c5064d",
      name: "Campaña test 1",
      min_transaction_amount: 10000,
      reward_type: "coins",
      reward_percentage: 100,
      transactions_before: "2023-08-23T00:00:00.000Z",
      transactions_after: "2023-05-23T00:00:00.000Z",
      branches: ["6460ea6871235830d1c5064f"],
      start_date: "2023-05-14T00:00:00.000Z",
      end_date: "2023-08-23T00:00:00.000Z",
      campaign_active: true,
      created_at: "2023-05-14T00:00:00.000Z",
      updated_at: "2023-05-14T00:00:00.000Z",
    };
    return campaign;
  }
  async create(_body: CampaignPostBody): Promise<Error | null> {
    // You can provide a default implementation that returns null or a mock Error object
    return null;
  }
}

class MockCommerceRepository {
  async getById(_id: string): Promise<Commerce | null> {
    const commerce: Commerce = {
      // Proporciona los valores necesarios para el cuerpo de la transacción
      id: "6460e9d071235830d1c5064d",
      name: "Texaco",
      conversion_rate_points: 1000,
      conversion_rate_coins: 1200,
      created_at: "2023-05-14T00:00:00.000+00:00",
      updated_at: "2023-05-14T00:00:00.000+00:00",
    };
    return commerce;
  }
}

test("run() should calculate rewards and create transaction", async () => {
  // Arrange
  const transactionRepository = new MockTransactionRepository();
  const campaignRepository = new MockCampaignRepository();
  const commerceRepository = new MockCommerceRepository();
  const transactionCreate = new TransactionCreate(
    transactionRepository,
    campaignRepository,
    commerceRepository
  );
  const body: TransactionPostBody = {
    // Proporciona los valores necesarios para el cuerpo de la transacción
    branch_id: "1234",
    user_id: "42882096",
    transaction_date: "2023-05-24",
    amount: 5000,
    commerce_id: "6460e9d071235830d1c5064d",
    points: 0,
    coins: 0,
  };
  const campaignInfo: Campaign[] = [
    // Proporciona una lista de objetos Campaign para simular el resultado del método campaignRepository.getAll()
    // Asegúrate de proporcionar los valores adecuados para cumplir las condiciones en el bucle for
    {
      id: "6460f1d171235830d1c50652",
      commerce_id: "6460e9d071235830d1c5064d",
      name: "Campaña test 1",
      min_transaction_amount: 10000,
      reward_type: "coins",
      reward_percentage: 100,
      transactions_before: "2023-08-23T00:00:00.000Z",
      transactions_after: "2023-05-23T00:00:00.000Z",
      branches: ["6460ea6871235830d1c5064f"],
      start_date: "2023-05-14T00:00:00.000Z",
      end_date: "2023-08-23T00:00:00.000Z",
      campaign_active: true,
      created_at: "2023-05-14T00:00:00.000Z",
      updated_at: "2023-05-14T00:00:00.000Z",
    },
    {
      id: "64620af00fa71e590b012de9",
      commerce_id: "6460e9d071235830d1c5064d",
      name: "Campaña test 2",
      min_transaction_amount: 10000,
      reward_type: "both",
      reward_percentage: 100,
      transactions_before: "2023-08-23T00:00:00.000Z",
      transactions_after: "2023-05-23T00:00:00.000Z",
      branches: ["6460ea6871235830d1c5064f"],
      start_date: "2023-05-14T00:00:00.000Z",
      end_date: "2023-08-23T00:00:00.000Z",
      campaign_active: true,
      created_at: "2023-05-14T00:00:00.000Z",
      updated_at: "2023-05-14T00:00:00.000Z",
    },
  ];
  const commerce: Commerce = {
    // Proporciona los valores necesarios para el cuerpo de la transacción
    id: "6460e9d071235830d1c5064d",
    name: "Texaco",
    conversion_rate_points: 1000,
    conversion_rate_coins: 1200,
    created_at: "2023-05-14T00:00:00.000+00:00",
    updated_at: "2023-05-14T00:00:00.000+00:00",
  };

  // Mock the campaignRepository.getAll() method to return campaignInfo
  campaignRepository.getAll = jest.fn().mockResolvedValue(campaignInfo);

  // Mock the commerceRepository.getById() method to return a commerce object
  commerceRepository.getById = jest.fn().mockResolvedValue(commerce);

  // Act
  await transactionCreate.run(body);

  // Assert
  // Add your assertions here to check if the rewards are calculated correctly and the transaction is created
  expect(body.points).toEqual(5);
});
