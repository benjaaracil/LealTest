export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly full_name: string,
    public readonly points: number,
    public readonly coins: number
  ) {}
}
