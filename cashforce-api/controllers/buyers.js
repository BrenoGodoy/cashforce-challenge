class BuyersController {
  constructor(BuyersService) {
    this.BuyersService = BuyersService;
  }

  async getById(req, res) {
    const { id } = req.params;
    const { code, data, message } = await this.BuyersService.getById(id);
    if (message) return res.status(code).json(message);

    return res.status(code).json(data);
  }
}

module.exports = BuyersController;
