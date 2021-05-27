const Notification = require("../models/notification.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if(req.body.type == undefined)  req.body.type  = 0;

  // Create a Customer
  const notification = new Notification({
    from_user_id: req.body.from_user_id,
    to_user_id: req.body.to_user_id,
    category_id: req.body.category_id,
    message: req.body.message,
    type: req.body.type   
  });

 Notification.create(notification, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send({
      status:'success',
      data: data
    });
  });
};



// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Category.remove(req.params.categoryId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Category with id ${req.params.categoryId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Category with id " + req.params.categoryId
        });
      }
    } else res.send({ message: `Category was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Category.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Category."
      });
    else res.send({ message: `All Category were deleted successfully!` });
  });
};
