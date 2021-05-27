module.exports = app => {
  const category = require("../controllers/category.controller.js");

  // Create a new Customer
  app.post("/categories", category.create);

  // Retrieve all Customers
  app.get("/categories", category.findAll);

  // Retrieve a single Customer with customerId
  app.get("/categories/:categoryId", category.findOne);

  // Update a Customer with customerId
  app.put("/categories/:categoryId", category.update);

  // Delete a Customer with customerId
  app.delete("/categories/:categoryId", category.delete);

  // Create a new Customer
  app.delete("/categories", category.deleteAll);
};
