import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    console.log("fetchong data")
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    console.log("can.t fetchong data")
    res.status(404).json({ message: error.message });
  }
});

export default router;

