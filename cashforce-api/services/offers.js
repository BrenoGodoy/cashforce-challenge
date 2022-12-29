class OffersService {
  constructor(offerModel) {
    this.offerModel = offerModel;
  }

  getAll() {
    const response = this.offerModel.findAll();
    return { code: 200, data: response};
  }
}

module.exports = OffersService;
