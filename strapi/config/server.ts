import cronTasks from "./cron-tasks";

export default ({ env }) => {
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://api.elektronik.zgora.pl",
    proxy: true,
    app: {
      keys: env.array("APP_KEYS"),
    },
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
    cron: {
      enabled: true,
      tasks: cronTasks,
    },
    middleware: {
      settings: {
        public: {
          index: false,
          defaultIndex: false,
        },
      },
    },
  };
};
