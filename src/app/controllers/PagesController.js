class PagesController {
  // [GET] /blog/

  index(req, res) {
    res.render("collections");
  }

   // [GET] /pages/dealer-locator
   dealerlocator(req, res) {
    res.render("dealerLocator");
  }

   // [GET] /blog/cog
  cog(req, res) {
    res.render("cog");
  }
}

module.exports = new PagesController();
