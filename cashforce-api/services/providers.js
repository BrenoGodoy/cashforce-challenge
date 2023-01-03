class ProvidersService {
  constructor(providersModel) {
    this.providersModel = providersModel;
  }

  async getById(id) {
    const response = await this.providersModel.findOne({ where: { id } });
    if (!response) return { code: 404, message: 'ERRO!'};
    return { code: 200, data: response};
  }
}

module.exports = ProvidersService;
