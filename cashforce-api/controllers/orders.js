class OrdersController {
  constructor(OrdersService) {
    this.OrdersService = OrdersService;
  }

  async getAll(req, res) {
    const { code, data, message } = await this.OrdersService.getAll();
    if (message) return res.status(code).json(message);

    return res.status(code).json(data);
  }
}

module.exports = OrdersController;
