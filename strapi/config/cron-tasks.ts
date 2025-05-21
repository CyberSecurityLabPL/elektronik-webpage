import { NUMBER_OF_STUDENTS } from "./custom";

export default {
  luckyNumber: {
    task: async ({ strapi }) => {
      try {
        const randomNumber = Math.floor(Math.random() * NUMBER_OF_STUDENTS) + 1;

        await strapi.documents("api::lucky-number.lucky-number").update({
          documentId: "__TODO__",

          data: {
            value: randomNumber,
          },
        });

        strapi.log.info(`Updated lucky number to: ${randomNumber}`);
      } catch (error) {
        strapi.log.error("Error updating lucky number:", error);
      }
    },
    options: {
      rule: "0 0 * * *",
    },
  },
  dailySubstitution: {
    task: async ({ strapi }) => {
      try {
        if (new Date().getDay() === 0 || new Date().getDay() === 6) {
          strapi.log.info("Skipping daily substitution task on weekends");
          return;
        }
        const existingSubstitution = await strapi
          .documents("api::substitution.substitution")
          .findOne({
            where: {
              date: new Date().toISOString().slice(0, 10), // current date in YYYY-MM-DD format
            },
          });

        if (existingSubstitution) {
          strapi.log.info("Daily substitution entry already exists");
          return;
        }

        await strapi.documents("api::substitution.substitution").create({
          data: {
            date: new Date().toISOString().slice(0, 10), // current date in YYYY-MM-DD format
            substitutions: "", // empty markdown content
          },
        });

        strapi.log.info("Created a new daily substitution entry");
      } catch (error) {
        strapi.log.error("Error creating daily substitution entry:", error);
      }
    },
    options: {
      rule: "0 0 * * *",
    },
  },
};
