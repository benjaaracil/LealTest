export class Campaign {
  constructor(
    public readonly id: string,
    public readonly commerce_id: string,
    public readonly name: string,
    public readonly min_transaction_amount: number,
    public readonly reward_type: string,
    public readonly reward_percentage: number,
    public readonly transactions_before: string,
    public readonly transactions_after: string,
    public readonly branches: Array<string>,
    public readonly start_date: string,
    public readonly end_date: string,
    public readonly campaign_active: boolean,
    public readonly created_at: string,
    public readonly updated_at: string
  ) {}
}
