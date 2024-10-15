import amqp from "amqp-connection-manager";
import { IAmqpConnectionManager } from "amqp-connection-manager/dist/types/AmqpConnectionManager";

export class AmqpConnectionManager {
  connection: IAmqpConnectionManager;

  constructor() {
    this.connection = this.connect();
  }

  private connect(): IAmqpConnectionManager {
    const conn = amqp.connect([process.env.AMQP_URL], {
      heartbeatIntervalInSeconds: 5,
      reconnectTimeInSeconds: 1,
    });

    conn.addListener("connect", (data: any) => {
      // Emitted whenever we successfully connect to a broker.
      console.log("✅ - Connected");
    });
    conn.addListener("connectFailed", (data: any) => {
      // Emitted whenever we attempt to connect to a broker, but fail.
      console.log("🌀 - Connection failed");
    });
    conn.addListener("disconnect", (data: any) => {
      // Emitted whenever we disconnect from a broker.
      console.log("🚩 - Disconnected");
    });

    return conn;
  }

  async publish(queue: string, message: Record<string, any>) {
    const channelWrapper = this.connection.createChannel({
      json: true,
      setup: (channel: any) => {
        return channel.assertQueue(queue, { durable: true });
      },
    });

    await channelWrapper.sendToQueue(queue, message);

    console.log("published message", new Date().toTimeString());
  }
}
