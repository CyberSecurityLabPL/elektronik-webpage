import SERVICE_ACCOUNT_KEY from "../serviceAccountKey.json";

const NUMBER_OF_STUDENTS = 30;

const TOPICS = {
  COUNCIL_ARTICLES: "council-articles",
};

export { SERVICE_ACCOUNT_KEY, NUMBER_OF_STUDENTS, TOPICS };

export default ({ env }) =>
  ({
    DISCORD_WEBHOOK_URL: env("DISCORD_WEBHOOK_URL"),
    HOST_NAME: env("HOST_NAME"),
    HOST_URL: env("HOST_URL"),
  }) satisfies CustomConfig;

export type CustomConfig = {
  DISCORD_WEBHOOK_URL: string;
  HOST_NAME: string;
  HOST_URL: string;
};
