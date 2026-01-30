import { BaseConnector } from "./base";

export class AWSConnector extends BaseConnector {
  constructor() {
    super({ name: "Amazon Web Services", provider: "aws" });
  }
}
