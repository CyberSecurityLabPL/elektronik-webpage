"use strict";
import * as admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";

import {
  CustomConfig,
  SERVICE_ACCOUNT_KEY,
  TOPICS,
} from "../../../../../config/custom";

const { DISCORD_WEBHOOK_URL, HOST_URL } = strapi.config.get(
  "custom",
) as CustomConfig;

initializeApp({
  credential: admin.credential.cert(
    SERVICE_ACCOUNT_KEY as admin.ServiceAccount,
  ),
});

// For event object see: https://docs.strapi.io/cms/backend-customization/models#hook-event-object

export default {
  async beforeCreate(event) {
    const { data } = event.params;

    if (!data.customDate) {
      data.customDate = data.createdAt;
    }
  },
  async beforeUpdate(event) {
    const { data } = event.params;

    if (!data.customDate) {
      data.customDate = data.publishedAt ? data.publishedAt : data.createdAt;
    }
  },
  async afterUpdate(event) {
    console.log("triggered");
    const { result } = event;
    console.log(result);
    // Jeśli nie jest opublikowany to nic nie rób
    // na v4 afterUpdate nie jest wykonany dopóki nie ma publisha
    if (!result.publishedAt) return;

    const now = new Date();
    const publishedAt = new Date(result.publishedAt);
    // .getTime() returns EPOCH/UNIX timestamp (so we can count it)
    const diffInSeconds = (now.getTime() - publishedAt.getTime()) / 1000;

    // If it's not a fresh publish, then don't do anything
    if (!(diffInSeconds < 2)) return;

    const topic = TOPICS.COUNCIL_ARTICLES;

    const message = {
      notification: {
        title: result.title,
        body: result.description,
      },
      topic: topic,
      android: {
        notification: {
          color: "#032666",
          default_sound: true,
          visibility: "public",
        },
      },
    } as admin.messaging.Message;

    if (
      result.redirect &&
      result.redirect.URL &&
      result.redirect.URL.length > 0
    ) {
      // @ts-ignore
      message.data = {
        URL: result.redirect.URL,
      };
    }

    if (result.image && result.image.url) {
      console.log(result.image && result.image.url);
      if (result.image.size < 1000) {
        // @ts-ignore
        message.notification.image = HOST_URL + result.image.url;
      } else {
        // @ts-ignore
        message.notification.image =
          HOST_URL + result.image.formats.thumbnail.url;
      }
    }

    try {
      const response = await getMessaging().send(message);
      console.log("🎉", response);
      console.log("😤", message);

      let body = {
        content: "Opublikowano nowy Artykuł SU",
        embeds: [
          {
            title: result.title,
            description: result.description,
            color: 16777215,
            footer: {
              text: "Wysłano powiadomienie do aplikacji Elektronik",
            },
            timestamp: result.publishedAt,
            thumbnail: {
              url: null,
            },
            author: {
              name: null,
            },
            fields: [],
          },
        ],
        username: "Artykuły SU - Aplikacja",
        attachments: [],
      };

      if (result.image && result.image.url)
        body.embeds[0].thumbnail.url = HOST_URL + result.image.url;

      let author = result.updatedBy.firstname;
      if (result.updatedBy.lastname) author += ` ${result.updatedBy.lastname}`;
      if (result.updatedBy.username)
        author += ` (${result.updatedBy.username})`;

      console.log(author);

      body.embeds[0].author.name = author;

      if (
        result.redirect &&
        result.redirect.URL &&
        result.redirect.URL.length > 0
      ) {
        body.embeds[0].fields.push({
          name: "Powiadomienie",
          value: `[Przekierowanie](${result.redirect.URL})`,
          inline: true,
        });
      }

      if (
        result.redirectButton &&
        result.redirectButton.Nazwa &&
        result.redirectButton.URL &&
        result.redirectButton.URL.length > 0
      ) {
        body.embeds[0].fields.push({
          name: "Przycisk",
          value: `[${result.redirectButton.Nazwa}](${result.redirectButton.URL})`,
          inline: true,
        });
      }

      console.log(body);

      try {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      } catch (err) {
        console.error("Error sending WEBHOOK:", err);
        strapi.log.error("Error sending WEBHOOK:", err);
        return;
      }
    } catch (err) {
      try {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: "Błąd wysyłania powiadomienia do aplikacji Elektronik",
            embeds: [
              {
                title: "Error Message",
                description: "```" + err + "```",
                color: 16711680,
              },
              {
                title: `Result - \`${typeof result}\``,
                description: "```" + JSON.stringify(result) + "```",
                color: 16711680,
              },
            ],
          }),
        }),
          console.error("Error sending NOTIFICATION:", err);
        strapi.log.error("Error sending NOTIFICATION:", err);
      } catch (newError) {
        console.error("Error sending WEBHOOK error message:", newError);
        strapi.log.error("Error sending WEBHOOK error message:", newError);
        return;
      }
    }

    console.log("Opublikowano artykuł:", result);
    console.log(new Date());
  },
};
