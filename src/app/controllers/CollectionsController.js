class CollectionsController {
  // [GET] /collections

  index(req, res) {
    res.render("collections");
  }

  // [GET] /collections/bikes
  bikes(req, res) {
    res.render("bikes");
  }

  // [GET] /collections/pants
  pants(req, res) {
    res.render("pants");
  }

  // [GET] /collections/pants
  gear(req, res) {
    res.render("gear");
  }

  // [GET] /collections/pants
  sale(req, res) {
    res.render("sale");
  }

  // [GET] /collections/all
  all(req, res) {
    res.render("all");
  }
}

module.exports = new CollectionsController();
