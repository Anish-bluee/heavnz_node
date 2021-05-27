const User = require("../models/user.model.js");
const UserSetting = require("../models/user_setting.model.js");
const BlockedUser = require("../models/blocked_user.model.js");
const LikedUser = require("../models/liked_user.model.js");
const DeviceInfo = require("../models/device_info.model.js");
const UserImage = require("../models/user_images.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const user = new User({
    user_name: req.body.user_name,
    user_password: req.body.user_password,
    user_email: req.body.user_email,
    user_image: req.body.user_image,
    upload_image: req.body.upload_image,
    user_gender: req.body.user_gender,
    user_dob: req.body.user_dob,
    user_age: req.body.user_age,
    status: req.body.status,
    signup_via: req.body.signup_via,
  });

  // Save Customer in the database
  User.create(user, (err, data) => {
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

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    else res.status(200).send({
      status:'success',
      data: data
    });
  });
};


// Find Blocked User with user id
exports.userList = (req, res) => {    
  User.getUserListByCategory(req.params.categoryId, req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send({
      status:'success',
      data: data
    });
  });
};



// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send({
      status:'success',
      data: data
    });
  });
};

// Find User settings with user id
exports.findUserSettings = (req, res) => {  
  User.getUserSettings(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User settings with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send({
      status:'success',
      data: data
    });
  });
};

// Find Blocked User with user id
exports.findBlockedUser = (req, res) => {    
  User.getBlockedUsers(req.params.categoryId, req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found blocked User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send({
      status:'success',
      data: data
    });
  });
};


// Find User Mutual likes with user id
exports.findMutualLikes = (req, res) => {    
  User.getMutualLikes(req.params.categoryId, req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found blocked User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send({
      status:'success',
      data: data
    });
  });
};

// Find User Sent notification user id
exports.findSentNotification = (req, res) => {    
  User.getSentNotifications(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found blocked User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send({
      status:'success',
      data: data
    });
  });
};

exports.findReceivedNotification = (req, res) => {    
  User.getReceivedNotifications(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found blocked User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        });
      }
    } else res.send({
      status:'success',
      data: data
    });
  });
};

exports.updateSettings = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }  

  User.updateSettings(    
    new UserSetting(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );
};


exports.updateBlockedUser = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }  

  User.updateBlockedUser(    
    new BlockedUser(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );

};

exports.updateLikedUser = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }  

  User.updateLikedUser(    
    new LikedUser(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );

};


exports.insertDeviceInfo = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }  

  User.addDeviceInfo(    
    new DeviceInfo(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );

};

exports.insertUserImages = (req, res) => {
  // Validate Request  
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }  


  User.addUserImages(    
    new UserImage(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );

};

exports.login = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }  

   if (!req.body.user_email || !req.body.user_password) {
     res.status(400).send({
      message: "user email or password cannot be empty!"
    });
   }

  User.login(    
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with user name ${req.params.user_name}.`
          });
        } else {
          res.status(500).send({
            message: "Error login user " + req.params.user_name
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );
};

exports.register = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }  

   if (!req.body.user_email ) {
     res.status(400).send({
      message: "user email cannot be empty!"
    });
   }

  if (!req.body.signup_via ) {
     res.status(400).send({
      message: "user signup_via cannot be empty!"
    });
   }

   if (!req.body.user_gender ||  !req.body.user_dob ) {
     res.status(400).send({
      message: "user DOB and Gender cannot be empty!"
    });
   }

  User.register(    
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with user name ${req.params.user_email}.`
          });
        } else {
          res.status(500).send({
            message: "Error register user " + req.params.user_email
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );

};




// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  User.updateById(
    req.params.userId,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId
          });
        }
      } else res.send({
            status:'success',
            data: data
          });
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.userId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.params.userId
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all User."
      });
    else res.send({ message: `All User were deleted successfully!` });
  });
};
