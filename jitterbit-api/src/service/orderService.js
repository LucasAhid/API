const orderRepository = require("../repositories/orderRepository");

module.exports = {
  async create(data) {
    const mappedOrder = {
      orderId: data.numeroPedido,
      value: data.valorTotal,
      creationDate: data.dataCriacao,
      items: data.items.map((i) => ({
        productId: parseInt(i.idItem),
        quantity: i.quantidadeItem,
        price: i.valorItem,
      })),
    };

    await orderRepository.insertOrder(mappedOrder);
    return mappedOrder;
  },

  async getOne(id) {
    return orderRepository.getOrder(id);
  },

  async getAll() {
    return orderRepository.getAllOrders();
  },

  async update(id, data) {
    return orderRepository.updateOrder(id, data);
  },

  async remove(id) {
    return orderRepository.deleteOrder(id);
  },
};
