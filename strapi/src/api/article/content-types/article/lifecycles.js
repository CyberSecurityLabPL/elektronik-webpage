'use strict';
const { initializeApp } = require('firebase-admin/app')
const admin = require("firebase-admin")
const { getMessaging } = require('firebase-admin/messaging')
// @ts-ignore
const serviceAccount = require("../../../../../serviceAccountKey.json")

initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


const webhookURL = 'https://discordapp.com/api/webhooks/1354774068242546719/CCLbmTeAergjuVGiMhxupHK-XtSY2uYUk_kIQqU0--YQWttVVFEedkRhyoWrsRVLNuPX'

module.exports = {
    async afterUpdate(event) {
	console.log('triggered')
        const { result } = event
	console.log(result)
        // Jeśli nie jest opublikowany to nic nie rób
        // na v4 afterUpdate nie jest wykonany dopóki nie ma publisha
        if (!result.publishedAt) return

        const now = new Date()
        const publishedAt = new Date(result.publishedAt)
        // .getTime() returns EPOCH/UNIX timestamp (so we can count it)
        const diffInSeconds = (now.getTime() - publishedAt.getTime()) / 1000

        // If it's not a fresh publish, then don't do anything
        if (!(diffInSeconds < 2)) return

        const topic = 'council-articles'

        const message = {
            notification: {
                title: result.title,
                body: result.description
            },
            topic: topic,
            android: {
                notification: {
                    color: '#032666',
                    default_sound: true,
                    visibility: 'public'
                }
            }
        }

        if (result.redirect && result.redirect.URL && result.redirect.URL.length > 0) {
            message.data = {
                URL: result.redirect.URL
            }
        }

        if (result.image && result.image.url) {
            console.log(result.image && result.image.url)
            if (result.image.size < 1000) {
                message.notification.image = 'https://api.elektronik.zgora.pl'+result.image.url
            } else {
                message.notification.image = 'https://api.elektronik.zgora.pl'+result.image.formats.thumbnail.url
            }
        }

        try {
            const response = await getMessaging().send(message)
            console.log('🎉', response)
            console.log('😤', message)

            let body = {
                content: "Opublikowano nowy Artykuł SU",
                embeds: [
                    {
                        title: result.title,
                        description: result.description,
                        color: 16777215,
                        footer: {
                            text: "Wysłano powiadomienie do aplikacji Elektronik"
                        },
                        timestamp: result.publishedAt,
                        thumbnail: {
                            url: null
                        },
                        author: {
                            name: null
                        },
                        fields: []
                    }
                ],
                username: "Artykuły SU - Aplikacja",
                attachments: []
            }

            if (result.image && result.image.url) body.embeds[0].thumbnail.url = 'https://api.elektronik.zgora.pl'+result.image.url

            let author = result.updatedBy.firstname
            if (result.updatedBy.lastname) author += ` ${result.updatedBy.lastname}`
            if (result.updatedBy.username) author += ` (${result.updatedBy.username})`

            console.log(author)

            body.embeds[0].author.name = author

            if (result.redirect && result.redirect.URL && result.redirect.URL.length > 0) {
                body.embeds[0].fields.push({
                    name: 'Powiadomienie',
                    value: `[Przekierowanie](${result.redirect.URL})`,
                    inline: true
                })
            }

            if (result.redirectButton && result.redirectButton.Nazwa && result.redirectButton.URL && result.redirectButton.URL.length > 0) {
                body.embeds[0].fields.push({
                    name: 'Przycisk',
                    value: `[${result.redirectButton.Nazwa}](${result.redirectButton.URL})`,
                    inline: true
                });
            }

            console.log(body)

            try {
                await fetch(webhookURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
            } catch (err) {
                console.error('Error sending WEBHOOK:', err)
                strapi.log.error('Error sending WEBHOOK:', err)
                return
            }

        } catch (err) {
            try {
                await fetch(webhookURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        content: 'Błąd wysyłania powiadomienia do aplikacji Elektronik',
                        embeds: [
                            {
                                title: 'Error Message',
                                description: '```'+err+'```',
                                color: 16711680,
                            },
                            {
                                title: `Result - \`${typeof result}\``,
                                description: '```'+JSON.stringify(result)+'```',
                                color: 16711680,
                            }
                        ]
                    })
                }),
                console.error('Error sending NOTIFICATION:', err)
                strapi.log.error('Error sending NOTIFICATION:', err)
            } catch (newError) {
                console.error('Error sending WEBHOOK error message:', newError)
                strapi.log.error('Error sending WEBHOOK error message:', newError)
                return
            }
        }

        console.log('Opublikowano artykuł:', result)
        console.log((new Date))
    }
};
