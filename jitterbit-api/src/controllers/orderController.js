const orderService = require("../services/orderService");

module.exports = {
  async create(req, res) {
    try {
      const result = await orderService.create(req.body);
      res.status(201).json(result);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async getOne(req, res) {
    try {
      const result = await orderService.getOne(req.params.id);
      if (!result) return res.status(404).json({ error: "Pedido não encontrado" });
      res.json(result);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async getAll(req, res) {
    const result = await orderService.getAll();
    res.json(result);
  },

  async update(req, res) {
    try {
      await orderService.update(req.params.id, req.body);
      res.json({ message: "Pedido atualizado" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async remove(req, res) {
    try {
      await orderService.remove(req.params.id);
      res.json({ message: "Pedido removido" });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
