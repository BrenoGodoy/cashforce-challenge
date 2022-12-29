class OrdersService {
  constructor(ordersModel) {
    this.ordersModel = ordersModel;
  }

  async getAll() {
    const response = await this.ordersModel.findAll();
    if (!response) return { code: 404, message: 'ERRO!'};
    return { code: 200, data: response};
  }
}

module.exports = OrdersService;
