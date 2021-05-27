const sql = require("./db.js");

// constructor
const Notification = function(notification) {
  this.from_user_id = notification.from_user_id;
  this.to_user_id = notification.to_user_id;
  this.category_id = notification.category_id;
  this.message = notification.message;
  this.type = notification.type;

};

Notification.create = (newNotification, result) => {
  sql.query("INSERT INTO notifications SET ?", newNotification, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Notification: ", { id: res.insertId, ...newNotification });
    result(null, { id: res.insertId, ...newNotification });
  });
};

/*Category.findById = (categoryId, result) => {
  sql.query(`SELECT * FROM a_categories WHERE id = ${categoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found category: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Category.getAll = result => {
  sql.query("SELECT * FROM a_categories", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("categories: ", res);
    result(null, res);
  });
};

Category.updateById = (id, category, result) => {
  sql.query(
    "UPDATE a_categories SET category_name = ?, liners = ?, status = ?, sorting = ? WHERE id = ?",
    [category.category_name, category.liners, category.status,  category.sorting, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated category: ", { id: id, ...category });
      result(null, { id: id, ...category });
    }
  );
};

Category.remove = (id, result) => {
  sql.query("DELETE FROM a_categories WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted category with id: ", id);
    result(null, res);
  });
};

Category.removeAll = result => {
  sql.query("DELETE FROM a_categories", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} category`);
    result(null, res);
  });
};*/

module.exports = Notification;
