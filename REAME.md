# Shifu(me)


This is a small in browser game, the famous rock paper and scissors. You can play online against a friend.

The game is hosted on EC2 from AWS. You can access it at [http://13.37.231.144/](http://13.37.231.144/).
Unfortunately, the websocket connection is not working on the EC2 instance for now. I'm working on it.

-----
## Technologies


### Back-end
- The back-end is a [Node.js](https://nodejs.org/en/) application using [Express](https://expressjs.com/) and TypeScript.
- It uses [Socket.io](https://socket.io/) to handle the real-time communication between the players.

### Front-end
- The front is a [React](https://reactjs.org/) application using regular Javascript.


-----
## How to run the project?

### The easy way

You can run the project using [Docker](https://www.docker.com/). You need to have Docker and docker-compose installed on your machine.

To run the project, you need to be in the root folder and run the following command:
```bash
docker-compose build
```
```bash
docker-compose up
```

You can then access the front-end at `http://localhost:3000`.

### Back-end

To install the dependencies and run the back-end, you need to be in the `back` folder and run the following commands:
```bash
npm i
``` 
```bash
npm run start
```

You can then access the back-end at `http://localhost:8000`.
And test a simple GET request at `http://localhost:8000`, it should return `Hello World!`.


### Front-end

To install the dependencies and run the front-end, you need to be in the `front` folder and run the following commands:
```bash
npm i
``` 
```bash
npm run start
```

You can then access the front-end at `http://localhost:3000`.