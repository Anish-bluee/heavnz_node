module.exports = app => {
  const user = require("../controllers/user.controller.js");

  // Create a new Customer
  app.post("/users", user.create);

  app.post("/login", user.login);
  app.post("/register", user.register);
  app.post("/uploadUserImage", user.insertUserImages);


  // Retrieve all Customers
  app.get("/users", user.findAll);
  app.get("/userlist/:categoryId/:userId",user.userList);
  app.get("/getUserSettings/:userId", user.findUserSettings);

  app.post("/user_settings", user.updateSettings);
  app.post("/addBlockedUser", user.updateBlockedUser);

  app.post("/addLikedUser", user.updateLikedUser);

  app.post("/addDeviceInfo", user.insertDeviceInfo);  
  
  app.get("/getReceivedNotification/:userId", user.findReceivedNotification);
  app.get("/getSentNotification/:userId", user.findSentNotification);

  app.get("/getBlockedUser/:categoryId/:userId", user.findBlockedUser);

  app.get("/getMutualLikes/:categoryId/:userId", user.findMutualLikes);

  // Retrieve a single Customer with customerId
  app.get("/users/:categoryId", user.findOne);

  // Update a Customer with customerId
  app.put("/users/:userId", user.update);

  // Delete a Customer with customerId
  app.delete("/users/:categoryId", user.delete);

  // Create a new Customer
  app.delete("/users", user.deleteAll);
};
