class BuyersService {
  constructor(buyersModel) {
    this.buyersModel = buyersModel;
  }

  async getById(id) {
    const response = await this.buyersModel.findOne({ where: { id } });
    if (!response) return { code: 404, message: 'ERRO!'};
    return { code: 200, data: response};
  }
}

module.exports = BuyersService;
