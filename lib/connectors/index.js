import { AWSConnector } from "./aws";
import { GCPConnector } from "./gcp";
import { VercelConnector } from "./vercel";
import { GitHubConnector } from "./github";

export const connectors = {
  aws: new AWSConnector(),
  gcp: new GCPConnector(),
  vercel: new VercelConnector(),
  github: new GitHubConnector(),
};
