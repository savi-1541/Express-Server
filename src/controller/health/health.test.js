import { healthCheck } from "./index.js";
import { test, expect, jest } from "@jest/globals";

const reqMock = {};

const resMock = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

test("Health check test API", () => {
  healthCheck(reqMock, resMock);

  expect(resMock.status).toHaveBeenCalledWith(200);
  expect(resMock.json).toHaveBeenCalledWith({
    statusCode: 200,
    message: "Server health OK",
  });
});
