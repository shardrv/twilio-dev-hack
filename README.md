![Alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--VZFUPPJe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--55ibXz6X--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/nifvpea2hzb5y7kethzt.png)

## CovidComm

A project for communication aid during the COVID-19 outbreak. Note that this project is made for the Twilio DEV community Hackathon. The following is the track being followed in this project:

> COVID-19 Communications

[![Alt text](https://img.shields.io/badge/docs-view%20documentation-yellowgreen)](https://documenter.getpostman.com/view/3896915/Szf3aW6y)

#### Getting started

* Create a file called `config.ts` with the following content. You can configure it according to your own desired settings.

```ts
export default {
  JWT_SECRET : "sajndaskdnsakdnaksndjs",
  PORT: 3000,
  LOGGING_FMT: "combined",
  INFO_API_URL: "https://google.com",
  CRON_DEFAULT_TIME: "* * * 1 * *",
  CRON_TESTING_TIME: "10 * * * * *",
  HASH_SALT: "kwenf;wnqkcwqegkvnqwkfkwekfnwkefwbefjbwejfbwejff",
  DB_URI: "mongodb://<dbuser>:<dbpassword>@<hostname>:<port>/<database_name>",
  API_VERSION: "/api/v1"
};
```

* Run the following commands to get started:

```sh
# Install dependancies
npm i

# Compile typescript and run server in filewatch mode
npm run dev
```
