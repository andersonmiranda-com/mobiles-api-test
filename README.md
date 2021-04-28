## Phones API Test

This is a small sample of consuming backend API with React using Redux/Thunk with hooks.

### Run using Docker

`docker run -p 4000:4000 andersonmiranda/etereo_test`

The app will be available at [http://localhost:4000](http://localhost:4000).

### Instrucions for run individually backend and frontend

#### Backend

Installs all dependencies.

```
cd backend
npm install
```

Runs the backend server:

`npm run start`

The API will be available at [http://localhost:4000/phones](http://localhost:4000/phones).

#### Frontend

Installs all dependencies:

```
cd frontend
npm install
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm run start`

### Instrucions for build and serve using node (from backend)

Build:

```
cd frontend
npm run build

```

Run the backend server:

```
cd ../backend
npm run serve

```

The app will be available at [http://localhost:4000](http://localhost:4000).
