
export default {
    luckyNumber: {
        task: async ({ strapi }) => {
            try {
                const randomNumber = Math.floor(Math.random() * 30) + 1
                
                await strapi.entityService.update('api::lucky-number.lucky-number', 1, {
                data: {
                    value: randomNumber,
                },
                });
        
                strapi.log.info(`Updated lucky number to: ${randomNumber}`)
            } catch (error) {
                strapi.log.error("Error updating lucky number:", error)
            }
        },
        options: {
            rule: '* * * * *'
        }
    }
}
