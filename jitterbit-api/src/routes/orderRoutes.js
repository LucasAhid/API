const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/order", orderController.create);
router.get("/order/:id", orderController.getOne);
router.get("/order/list", orderController.getAll);
router.put("/order/:id", orderController.update);
router.delete("/order/:id", orderController.remove);

module.exports = router;
