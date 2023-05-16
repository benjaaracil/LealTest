export class Transaction {
  constructor(
    public readonly id: string,
    public readonly user_id: string,
    public readonly commerce_id: string,
    public readonly branch_id: string,
    public readonly transaction_date: string,
    public readonly amount: number,
    public readonly points: number,
    public readonly coins: number,
    public readonly created_at: string,
    public readonly updated_at: string
  ) {}
}
