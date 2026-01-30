import { BaseConnector } from "./base";

export class GitHubConnector extends BaseConnector {
  constructor() {
    super({ name: "GitHub", provider: "github" });
  }
}
