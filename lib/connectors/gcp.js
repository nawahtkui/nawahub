import { BaseConnector } from "./base";

export class GCPConnector extends BaseConnector {
  constructor() {
    super({ name: "Google Cloud Platform", provider: "gcp" });
  }
}
