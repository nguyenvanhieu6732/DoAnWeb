class BlogController {
  // [GET] /blog/

  index(req, res) {
    res.render("collections");
  }

   // [GET] /blog/teams
  teams(req, res) {
    res.render("teams");
  }

   // [GET] /blog/cog
  cog(req, res) {
    res.render("cog");
  }
}

module.exports = new BlogController();
