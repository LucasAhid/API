const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../auth/authMiddleware");

router.post("/order", authMiddleware, orderController.create);
router.get("/order/:id", authMiddleware, orderController.getOne);
router.get("/order/list", authMiddleware, orderController.getAll);
router.put("/order/:id", authMiddleware, orderController.update);
router.delete("/order/:id", authMiddleware, orderController.remove);

module.exports = router;
