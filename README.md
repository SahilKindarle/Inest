# Inest (inest)

Portal for INest (Innovation Nest) Career Assessment.

## Install the dependencies

Install the `wkhtmltopdf` package for the PDF generation to work. You can download it from [here](https://wkhtmltopdf.org/downloads.html).

After installation, ensure that the wkhtmltopdf executable is in your PATH by running the following command in your terminal:

```bash
wkhtmltopdf -H
```

If you see the help message, then you have successfully installed the package.

Next, install the dependencies for the project:

```bash
npm install
```

### Set up the environment variables

Set up the environment variables by creating a `.env` file in the root of the project. You can copy the `.env.example` file and rename it to `.env`.

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

### Start the server in development mode

```bash
npm run dev:server
```

### Lint the files

```bash
npm run lint
```

### Format the files

```bash
npm run format
```

### Build the app for production

```bash
npm run build
```

## Start the app in production mode

Ensure the app is built before starting the app in production mode.

Ensure the environment variables are set up correctly in the `.env` file. Especially the `VITE_API_URL` variable should be set to `/` before building for production.

```bash
npm start
```

### References

- [Nginx Configuration on AWS EC2](https://blog.logrocket.com/how-to-run-node-js-server-nginx/)
- [PM2 Process Manager](https://pm2.keymetrics.io/docs/usage/quick-start/)
