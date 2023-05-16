export interface TransactionPostBody {
  branch_id: string;
  user_id: string;
  transaction_date: string;
  amount: number;
  commerce_id: string;
  points: number;
  coins: number;
}
