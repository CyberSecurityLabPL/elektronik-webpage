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
      rule: "* * * * *",
    },
  },
};
