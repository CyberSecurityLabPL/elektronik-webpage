export default ({ env }) => ({
  "file-system": {
    enabled: true,
  },
  email: {
    config: {
      provider: 'sendmail',
      providerOptions: {
        smtpHost: env('SMTPHOST', '172.18.0.1'),
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM', ''),
        defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', ''),
      },
    },
  },
});
