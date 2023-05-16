export class Commerce {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly conversion_rate_points: number,
    public readonly conversion_rate_coins: number,
    public readonly created_at: string,
    public readonly updated_at: string
  ) {}
}
