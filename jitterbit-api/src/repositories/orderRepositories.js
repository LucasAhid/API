const db = require("../config/db");

module.exports = {
  async insertOrder(order) {
    await db.query(
      "INSERT INTO Orders (orderId, value, creationDate) VALUES (?, ?, ?)",
      [order.orderId, order.value, order.creationDate]
    );

    for (const item of order.items) {
      await db.query(
        "INSERT INTO Items (orderId, productId, quantity, price) VALUES (?, ?, ?, ?)",
        [order.orderId, item.productId, item.quantity, item.price]
      );
    }
  },

  async getOrder(id) {
    const [orderRows] = await db.query(
      "SELECT * FROM Orders WHERE orderId = ?",
      [id]
    );
    if (orderRows.length === 0) return null;

    const [items] = await db.query(
      "SELECT productId, quantity, price FROM Items WHERE orderId = ?",
      [id]
    );

    return { ...orderRows[0], items };
  },

  async getAllOrders() {
    const [rows] = await db.query("SELECT * FROM Orders");
    return rows;
  },

  async updateOrder(id, data) {
    await db.query("UPDATE Orders SET value = ?, creationDate = ? WHERE orderId = ?", [
      data.valorTotal,
      data.dataCriacao,
      id,
    ]);
  },

  async deleteOrder(id) {
    await db.query("DELETE FROM Items WHERE orderId = ?", [id]);
    await db.query("DELETE FROM Orders WHERE orderId = ?", [id]);
  },
};
