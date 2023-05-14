export class CampaignNotFound extends Error {
  constructor(id: string) {
    super(`Campaign not found "${id}"`);
  }
}
