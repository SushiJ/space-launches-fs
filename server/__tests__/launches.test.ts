import request from "supertest";
import app from "../src/app";
import mongoose from "mongoose";

describe("Launches API", () => {
  const MONGO_URL =
    "mongodb://127.0.0.1:27017/nasa?retryWrites=true&w=majority";
  beforeAll(async () => await mongoose.connect(MONGO_URL));
  afterAll(async () => await mongoose.disconnect());
  describe("Test GET /launches", () => {
    test("It should respond with 200 success", async () => {
      await request(app)
        .get("/launches")
        .expect(200)
        .expect("Content-Type", /json/);
    });
  });

  describe("Test POST /launch", () => {
    test("It should respond with 201 created", async () => {
      const response = await request(app)
        .post("/launches")
        .send({
          mission: "USS Enterprise",
          rocket: "Some rocket",
          destination: "Kepler-235 e",
          launchDate: new Date("January 5, 2028").toISOString(),
        })
        .expect(201)
        .expect("Content-Type", /json/);

      expect(response.body).toMatchObject({
        success: true,
        data: {
          mission: "USS Enterprise",
          rocket: "Some rocket",
          destination: "Kepler-235 e",
          launchDate: new Date("January 5, 2028").toISOString(),
        },
      });
    });

    test("It should catch missing required properties and respond with 400 bad request", async () => {
      const response = await request(app)
        .post("/launches")
        .send({
          mission: "USS Enterprise",
          rocket: "Some rocket",
          destination: "Kepler-235 e",
        })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        success: false,
        message: "Launch date is required",
        stack: {},
        status: 400,
      });
    });

    test("It should catch invalid dates and respond with 400 bad request", async () => {
      const response = await request(app)
        .post("/launches")
        .send({
          mission: "USS Enterprise",
          rocket: "Some rocket",
          destination: "Kepler-235 e",
          launchDate: "January 5, 2028",
        })
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toStrictEqual({
        success: false,
        message: "Launch Date is not a valid date",
        stack: {},
        status: 400,
      });
    });
  });
});
