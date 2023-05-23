import request from "supertest";
import app from "../src/app";
import connectDB from "../src/utils/dbConnect";

describe("Launches API", () => {
  beforeAll(async () => await connectDB());
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
        error: "Launch date is required",
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
        error: "Launch Date is not a valid date",
      });
    });
  });
});
