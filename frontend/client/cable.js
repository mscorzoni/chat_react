import cable from "actioncable";

let consumer;

function createChannel(...args) {
  if (!consumer) {
    consumer = cable.createConsumer();
  }
  return consumer.subscription.create(...args);
}

export default createChannel;
