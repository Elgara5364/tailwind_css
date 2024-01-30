module.exports = {
  apps: [
    {
      name: "fd25-tailwind",
      instances: "max", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start -s build -p 80",
      env_local: {
        APP_ENV: "local", // APP_ENV=local
      },
      env_dev: {
        APP_ENV: "dev", // APP_ENV=dev
      },
      env_prod: {
        APP_ENV: "prod", // APP_ENV=prod
      },
    },
  ],
};
