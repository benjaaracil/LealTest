export class CampaignNotFound extends Error {
  constructor(id: string) {
    super(`Campaign not found "${id}"`);
  }
}
export class CampaignNotFoundAll extends Error {
  constructor() {
    super(`Not campaigns at all"`);
  }
}
