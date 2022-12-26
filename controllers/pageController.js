export const getIndexPage = (req, res) => {
  const user = req.session.userId;
  res.status(200).render("index", {
    page_name: "index",
  });
};
export const getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};
export const getRegisterPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};
export const getAboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
export const getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};
export const getFurnituresPage = (req, res) => {
  res.status(200).render("furnitures", {
    page_name: "furnitures",
  });
};
export const getBlogPage = (req, res) => {
  res.status(200).render("blog", {
    page_name: "blog",
  });
};
