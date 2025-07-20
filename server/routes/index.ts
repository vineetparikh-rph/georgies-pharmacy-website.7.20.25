import { Express } from "express";
import refillsRoute from "./refills";
import transferRoute from "./transfer";
import vaccineRoute from "./vaccine";

export async function registerRoutes(app: Express) {
  app.use("/api/refill", refillsRoute);
  app.use("/api/transfer", transferRoute);
  app.use("/api/vaccine", vaccineRoute);
}