<h1>Exercises for Unit Node.js</h1>

## Exercise 1: Explore with the Node.js REPL

> _After Lesson: Run the Node.js REPL_

Use the Node.js REPL to list the methods provided by the Node.js core `crypto` module. Use one of these methods to generate a random ID.

## Exercise 2: Create and use CommonJS modules

> _After Lesson: Modules in Node.js_

1. Create a script that uses `module.exports` to export a function.
2. Create another script that uses `require()` to import the function and then calls it.

## Exercise 3: Create and use ECMAScript modules

> _After Lesson: Modules in Node.js_

1. Create a script that uses `export default` to export a function.
2. Create another script that uses `import` to import the function and then calls it.

## Exercise 4: Change the HTML response

> _After Lesson: Test the HTTP server_

Create an HTTP server that sends an HTML response body with your own message.

Run the server and use your web browser to make a request to it.

## Exercise 5: Send JSON from Mars

> _After Lesson: Send a JSON response_

Create an HTTP server that sends a JSON response body: `{ location: "Mars" }`

Run the server and make a request to it with `curl` using the `--verbose` flag.

What is the value of the `Content-Length` response header? Include this value when you submit your code solution.

## Exercise 6: Command-line art

> _After Lesson: Using packages_

1. Create a new Node.js project and install the [figlet](https://www.npmjs.com/package/figlet) package.
2. Write a script that uses the function from this package to output some text based art (the `figlet` package README has a 'Quick Start' section).
3. Run the script with Node.js.

## Exercise 7: Use a method with a callback

> _After Lesson: Callbacks_

Create a script that uses the Node.js core `fs.writeFile()` (callback API) method to write a text file. The documentation for this method is on the [Node.js File system](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback) page.

## Exercise 8: Promises lucky draw

> _After Lesson: Promises_

The `luckyDraw` function returns a promise. Create a promise chain where the function is called for for each of the players: Joe, Caroline and Sabrina

Log out the resolved value for each promise and handle any promise rejections in the chain.

```javascript
function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
```

## Exercise 9: await the lucky draw results

> _After Lesson: async and await_

Create a `getResults` function that uses `async` and `await`. Inside of the function, call the `luckyDraw` function for each of the players: Tina, Jorge, Julien

Log out the resolved value for each promise and handle any promise rejections.

```javascript
function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
```

## Exercise 10: Listen to the news

> _After Lesson: Other asynchronous patterns_

The `newsEvent` object continuously emits three different events: `newsEvent`, `breakingNews` and `error`

Attach event listeners for each event and log out their data.

```javascript
const { EventEmitter } = require("node:events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();
```

## Exercise 11: Set up a simple Express App

### Do

- Write simple Express server that listens on port `3000` (use dotenv to specify the port)
- Create a dummy "database" of `planets` using a `let` variable. (You will use this data in further exercises.)
- Configure your app (`app.use()`) to:
  - accept JSON from the Client
  - log the Client's requests

### Use

- Dummy database with initial data:

  ```js
  type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];
  ```

- `express-async-errors`
- `morgan`

------------------------

## Exercise 12:  CRUD with dummy database

### Do

- Write a router with the following routes:
  - `GET /api/planets`: return all planets (JSON) with `200`
  - `GET /api/planets/:id`: return a planet (JSON) by id with `200`
  - `POST /api/planets`: create a planet, return only `201` code and a success JSON with key `msg`
    - Make sure every planet is created with `id` and `name`.
  - `PUT /api/planets/:id`: update a planet by id, return only `200` code and a success JSON with key `msg`
  - `DELETE /api/planets/:id`: delete a planet by id, return only `200` code and a success JSON with key `msg`
- Validate planet fields where appropriate.

### Use

- The dummy database of planets from the previous exercise.
- `joi` library for validation.

### Check

- Use Postman to test the routes.
- Paths `POST` and `PUT` should receive data in JSON format (`req.body`).

## Exercise 13: CRUD with Controller

### Do

- Write a router with the following routes:
  - `GET /api/planets`: return all planets (JSON) with `200`
  - `GET /api/planets/:id`: return a planet (JSON) by id with `200`
  - `POST /api/planets`: create a planet, return only `201` code and a success JSON with key `msg`
    - Make sure every planet is created with `id` and `name`.
  - `PUT /api/planets/:id`: update a planet by id, return only `200` code and a success JSON with key `msg`
  - `DELETE /api/planets/:id`: delete a planet by id, return only `200` code and a success JSON with key `msg`
- Add planets Controller (`controllers/planets.ts`) consisting of the following functions:
  - `getAll`
  - `getOneById`
  - `create`
  - `updateById`
  - `deleteById`.
- Note: the router should use controller methods to return results, by replace callback functions in routes `(req: Request, res: Response) =>` with the functions above. (For example: the route `/api/planets` should use `getAll` function.)

### Use

- The dummy database of planets from the previous exercise.
- `Array.prototype.find` higher-order function to Get One.
- Spread operator (`[...planets]`) to Create.
- `Array.prototype.map` higher-order function to Update.
- `Array.prototype.filter` higher-order function to Delete.

### Check

- Use Postman to test the routes.

## Exercise 14: CRUD with Controller and Postgres DB

### Do

- Using PgAdmin:
  - Create a Postgres DB.
- Using a `setupDb` function:
  - Create `planets` table.
  - Populate the table with two planets (e.g. `'Earth'` and `'Mars'`).
- Connect your app to Postgres using Express (`pg-promise`). [https://github.com/vitaly-t/pg-promise]
- Replace the dummy DB with the Postgres DB.
- Write a router with the following routes:
  - `GET /api/planets`: return all planets (JSON) with `200`
  - `GET /api/planets/:id`: return a planet (JSON) by id with `200`
  - `POST /api/planets`: create a planet, return only `201` code and a success JSON with key `msg`
    - Make sure every planet is created with `id` and `name`.
  - `PUT /api/planets/:id`: update a planet by id, return only `200` code and a success JSON with key `msg`
  - `DELETE /api/planets/:id`: delete a planet by id, return only `200` code and a success JSON with key `msg`
- Add planets Controller (`controllers/planets.ts`) consisting of the following functions:
  - `getAll`
  - `getOneById`
  - `create`
  - `updateById`
  - `deleteById`.
- Note: the router should use controller methods to return results, by replace callback functions in routes `(req: Request, res: Response) =>` with the functions above. (For example: the route `/api/planets` should use `getAll` function.) Controller should use DB to return results (Use the SQL queries below.)

### Use

- SQL query to create the table:

  ```sql
  DROP TABLE IF EXISTS planets;

  CREATE TABLE planets(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
  );
  ```

- Make sure that all CRUD operations read from and write to Postgres (instead of the dummy db you've been using in previous exercises).
  - `GET /planets`
    - Use this SQL query:
      ```sql
      SELECT * FROM planets;
      ```
  - `GET /planets/:id`
    - Use this SQL query:
      ```sql
      SELECT * FROM planets WHERE id=$1;
      ```
    - Make sure that `$1` is `id`.
  - `POST /planets`
    - Use this SQL query:
      ```sql
      INSERT INTO planets (name) VALUES ($1);
      ```
    - Make sure that `$1` is `name`.
  - `PUT /planets/:id`
    - Use this SQL query:
      ```sql
      UPDATE planets SET name=$2 WHERE id=$1;
      ```
    - Make sure that `$1` is `id` and `$2` is `name`.
  - `DELETE /planets/:id`
    - Use this SQL query:
      ```sql
      DELETE FROM planets WHERE id=$1;
      ```
    - Make sure that `$1` is `id`.

### Check

- Use Postman to test the routes.

## Exercise 15: Upload files

### Do

- Add `image` field to `planets` table in the DB.
- Set `POST /planets/:id/image` route for file upload (planet's image).
- Store the image file locally (on disk).
- Save file path to DB (update the correct planet).

### Use

- Add `image TEXT` to your `CREATE TABLE planets` SQL query.
- Use `multer` library to save files to `/uploads` folder.
- Add `image TEXT` to `CREATE TABLE planets` SQL query (in your DB setup).
- Use this SQL query to update planet's image:

  ```sql
  UPDATE planets
  SET image=$2
  WHERE id=$1;
  ```

### Check

- Use Postman to test the upload route (you can send a file in Postman).

## Exercise 16: JWT Auth part 1

### Do

- Create `users` table in Postgres DB.
- Set up Passport authentication with JWT.
  - Use `SECRET` key from `.env`

### Use

- Use `passport` and `passport-jwt` packages
- Create `users` table SQL query:

  ```sql
  DROP TABLE IF EXISTS users;

  CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT
  );
  ```

- Use `dotenv` package
- Create `.env` file and store `SECRET` key

### Check

- Use Postman to test the routes.

## Exercise 17: JWT Auth part 2

### Do

- Create routes:
  - `POST /users/signup`: create `user` in DB.
    - Store user with `username` and `password` keys in the DB.
      - If successful, respond with JSON `{msg: "Signup successful. Now you can log in."}`.
  - `POST /users/login`: log user in (adds JWT to `user` in DB).
    - Check that a provided password and the password in the DB match.
      - If they don't, respond with an error.
      - If they do, respond with `token` (JWT), `id` and `username`

### Use

- `req.body` in both routes
- `jsonwebtoken` package
- `jwt.sign` to sign a token with:
  - `payload` (with `id` (user id) and `username`)
  - `secret` (from `.env`)

### Check

- Use Postman to test the routes.

## Exercise 18: JWT Auth part 3

### Do

- Create route:
  - `GET /users/logout`: log user out (removes JWT from `user` in DB).
- Create `authorize` middleware and use it in routes that require it (protected routes).
- Restrict file upload of planet images to `users`.

### Use

- SQL query:
  ```sql
  UPDATE users
  SET token=NULL
  WHERE id=$1;
  ```
  - Make sure that `$1` is the user's `id`
- `passport.authenticate()` in `authorize` function
  - set `session` to `false` in `passport.authetnicate` (2nd param)
  - when successful, do: `req.user = user` (`user` comes from `(err, user)` cb func that `passport.authenticate` provides (3rd param))

### Check

- Use Postman to test the routes.
