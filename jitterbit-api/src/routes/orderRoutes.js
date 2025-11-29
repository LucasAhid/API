/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Endpoints de pedidos
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *                 example: "v10089015vdb-01"
 *               valorTotal:
 *                 type: number
 *                 example: 10000
 *               dataCriacao:
 *                 type: string
 *                 example: "2023-07-19T12:24:11.5299601+00:00"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                       example: "2434"
 *                     quantidadeItem:
 *                       type: integer
 *                       example: 1
 *                     valorItem:
 *                       type: number
 *                       example: 1000
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Erro de validação ou dados inválidos
 */


/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Orders]
 *     responses:
 *       201:
 *         description: Pedido criado
 */

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Retorna um pedido pelo ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Número do pedido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do pedido
 *       404:
 *         description: Pedido não encontrado
 */

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Lista todos os pedidos
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualiza os dados de um pedido existente
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       400:
 *         description: Erro de validação
 */
/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deleta um pedido pelo ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido removido
 *       404:
 *         description: Pedido não encontrado
 */


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
