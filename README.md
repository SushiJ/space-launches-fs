# Celestial Explorer

Celestial Explorer is an innovative web application designed to provide users with a comprehensive platform for tracking and managing space launches. 
Whether you're an enthusiast, a professional in the aerospace industry, or simply curious about the wonders of space exploration, 
this application keeps you informed about past launches as well as Past **SpaceX** launches and gives you the ability cancel any future launches.

##### TL DR;
This is a small control panel app for a imaginary space expedition agency.

### quickstart

```sh
git clone https://github.com/sushiJ/space-launches-fs
cd space-launches-fs
docker start mongodb
pnpm dev ./client && pnpm dev ./server
# open localhost:5173
```

### stack

- Preact
- tailwindcss
- Express
- Mongo
- typegoose

[SpaceX api](https://api.spacexdata.com/v4/launches/query) for data 

### overview
-- Insert Images here

### routes

| method | route  | description                                                    |
| --- | --- | --- |
| GET    | /            | the landing page  (WIP)                                  |
| GET    | /launches    | the page with launches form                              |
| POST   | /launches    | exactly what it sounds like                              |
| GET    | /history     | the page with the list of past launches including SpaceX |
| GET    | /upcoming    | the page with the list of upcoming launches              |
| PUT    | /upcoming    | put request to cancel upcoming launches                  |


That's pretty much it, happy hacking!
