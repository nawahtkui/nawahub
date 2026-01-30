export class BaseConnector {
  constructor({ name, provider }) {
    this.name = name;
    this.provider = provider;
  }

  async connect(config) {
    throw new Error("connect() not implemented");
  }

  async test() {
    return {
      provider: this.provider,
      status: "ready",
    };
  }
}

