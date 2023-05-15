export class CampaignNotFound extends Error {
  constructor(id: string) {
    super(`Campaign not found "${id}"`);
  }
}
export class CampaignNotFoundAll extends Error {
  constructor() {
    super(`Not campaigns found`);
  }
}
export class CampaignNotCreated extends Error {
  constructor() {
    super(`Campaign not created`);
  }
}
export class CampaignDatabaseError extends Error {
  constructor(message: string) {
    super(message);
  }
}
