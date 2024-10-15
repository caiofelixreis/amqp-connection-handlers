import 'dotenv/config';
import { AmqpConnectionManager } from "./amqp-connection-manager";

function main() {
  const amqpConnectionManager = new AmqpConnectionManager();

  setInterval(async () => {
    await amqpConnectionManager.publish("test-queue", {
      message: "Hello World",
    });
  }, 1000);
}

main();
