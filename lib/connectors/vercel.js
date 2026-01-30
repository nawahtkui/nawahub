import { BaseConnector } from "./base";

export class VercelConnector extends BaseConnector {
  constructor() {
    super({ name: "Vercel", provider: "vercel" });
  }
}
