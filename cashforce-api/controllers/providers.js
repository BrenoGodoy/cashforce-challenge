class ProvidersController {
  constructor(ProvidersService) {
    this.ProvidersService = ProvidersService;
  }

  async getById(req, res) {
    const { id } = req.params;
    const { code, data, message } = await this.ProvidersService.getById(id);
    if (message) return res.status(code).json(message);

    return res.status(code).json(data);
  }
}

module.exports = ProvidersController;
