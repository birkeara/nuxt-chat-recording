export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { message } = body;

  const id = message.length.toString();
  const lastMessage = message[message.length - 1];

  return {
    id,
    role: "assistant",
    reply: `(server) You said: "${lastMessage.content}"`,
  };
});
