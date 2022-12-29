class OffersController {
  constructor(OffersService) {
    this.OffersService = OffersService;
  }

  getAll(req, res) {
    const { code, data, message } = this.OffersService.getAll();
    if (message) return res.status(code).json(message);

    return res.status(code).json(data);
  }
}

module.exports = OffersController;
