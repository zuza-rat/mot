Latest live version: https://mot-client-dot-groovy-age-350720.nw.r.appspot.com/

## Run the app

### Client

- Open a new terminal
- From project root, execute:
```
cd client
npm start
```
Runs the React front end in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### API
- Open a new terminal
- From project root, execute:
```
cd api
node server.js
```
Runs the Express backend on [http://localhost:8080](http://localhost:8080)

## Deploy the app

### Client

- From project root, execute:
```
cd client
npm run build
gcloud app deploy client.yaml
```

### API

- From project root, execute:
```
cd api
npm run build
gcloud app deploy api.yaml
```
