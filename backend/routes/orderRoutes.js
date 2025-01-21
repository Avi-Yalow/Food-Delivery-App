import {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
} from "../controllers/orderController.js";
import express from "express";
import authMiddleware from "../middlewares/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/myorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
