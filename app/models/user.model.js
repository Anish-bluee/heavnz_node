const sql = require("./db.js");
const UserImage = require("./user_images.model.js");
//import fs from 'fs';

// constructor
const User = function(user) {
  this.user_name = user.user_name;
  this.user_password = user.user_password;
  this.user_email = user.user_email;
  this.user_image = user.user_image;
  this.user_fbid = user.user_fbid;
  this.upload_image = user.upload_image;
  this.user_gender = user.user_gender;
  this.user_dob = user.user_dob;
  this.user_age = user.user_age;
  this.user_total_friends = user.user_total_friends;
  this.user_interest = user.user_interest;
  this.user_school = user.user_school;
  this.user_college = user.user_college;
  this.user_employer = user.user_employer;
  this.user_position = user.user_position;
  this.user_lat = user.user_lat;
  this.user_long = user.user_long;
  this.about_user = user.about_user;
  this.device_token = user.device_token;
  this.city = user.city;
  this.state = user.state;
  this.country = user.country;
  this.signup_via = user.signup_via;
  this.is_logged_in = user.is_logged_in;
  this.verification_status = user.verification_status;
  this.status = user.status;
};

User.login = (newUser, result) => {
  var md5 = require('md5');
  var pass = md5(newUser.user_password);
  
 sql.query(`SELECT * FROM a_user WHERE user_email  = "${newUser.user_email}"  and user_password  = "${pass}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });

};


User.register = (newUser, result) => {
  var md5 = require('md5');  
  newUser.user_fbid = newUser.user_fbid != undefined ?  newUser.user_fbid : ''; 
  newUser.user_name = newUser.user_name != undefined ?  newUser.user_name : ''; 
  newUser.user_password = newUser.user_password != undefined ?  md5(newUser.user_password) : ''; 
  newUser.user_email = newUser.user_email != undefined ?  newUser.user_email : ''; 
  newUser.user_gender = newUser.user_gender != undefined ?  newUser.user_gender : ''; 
  newUser.user_dob = newUser.user_dob != undefined ?  newUser.user_dob : ''; 
  newUser.user_age = newUser.user_age != undefined ?  newUser.user_age : ''; 
  newUser.user_total_friends = newUser.user_total_friends != undefined ?  newUser.user_total_friends : ''; 
  newUser.user_interest = newUser.user_interest != undefined ?  newUser.user_interest : ''; 
  newUser.user_school = newUser.user_school != undefined ?  newUser.user_school : ''; 
  newUser.user_college = newUser.user_college != undefined ?  newUser.user_college : ''; 
  newUser.user_employer = newUser.user_employer != undefined ?  newUser.user_employer : ''; 
  newUser.user_position = newUser.user_position != undefined ?  newUser.user_position : ''; 
  newUser.user_lat = newUser.user_lat != undefined ?  newUser.user_lat : ''; 
  newUser.user_long = newUser.user_long != undefined ?  newUser.user_long : ''; 
  newUser.about_user = newUser.about_user != undefined ?  newUser.about_user : ''; 
  newUser.device_token = newUser.device_token != undefined ?  newUser.device_token : '';
  newUser.city = newUser.city != undefined ?  newUser.city : '';
  newUser.state = newUser.state != undefined ?  newUser.state : '';
  newUser.country = newUser.country != undefined ?  newUser.country : '';  
  newUser.signup_via = newUser.signup_via != undefined ?  newUser.signup_via : ''; 
  newUser.is_logged_in =  1;
  newUser.status =  1;  
  
 sql.query(`SELECT * FROM a_user WHERE user_email  = "${newUser.user_email}" `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }    
    if (res.length) {        
        if(newUser.user_fbid == undefined || newUser.user_fbid == ''){          
           result(null, 'Already user registered');
           return;
        }


      newUser.user_fbid = newUser.user_fbid != undefined ?  newUser.user_fbid : res[0].user_fbid; 
      newUser.user_name = newUser.user_name != undefined ?  newUser.user_name : res[0].user_name;  
      newUser.user_password = newUser.user_password != undefined ?  md5(newUser.user_password) : res[0].user_password;  
      newUser.user_email = newUser.user_email != undefined ?  newUser.user_email : res[0].user_email;  
      newUser.user_gender = newUser.user_gender != undefined ?  newUser.user_gender : res[0].user_gender;  
      newUser.user_dob = newUser.user_dob != undefined ?  newUser.user_dob :  res[0].user_dob;   
      newUser.user_age = newUser.user_age != undefined ?  newUser.user_age :  res[0].user_age;  
      newUser.user_total_friends = newUser.user_total_friends != undefined ?  newUser.user_total_friends :  res[0].user_total_friends;  
      newUser.user_interest = newUser.user_interest != undefined ?  newUser.user_interest : res[0].user_interest;  
      newUser.user_school = newUser.user_school != undefined ?  newUser.user_school : res[0].user_school;   
      newUser.user_college = newUser.user_college != undefined ?  newUser.user_college : res[0].user_college;  
      newUser.user_employer = newUser.user_employer != undefined ?  newUser.user_employer : res[0].user_employer;  
      newUser.user_position = newUser.user_position != undefined ?  newUser.user_position : res[0].user_position;  
      newUser.user_lat = newUser.user_lat != undefined ?  newUser.user_lat : res[0].user_lat;  
      newUser.user_long = newUser.user_long != undefined ?  newUser.user_long : res[0].user_long;  
      newUser.about_user = newUser.about_user != undefined ?  newUser.about_user : res[0].about_user;  
      newUser.device_token = newUser.device_token != undefined ?  newUser.device_token : res[0].device_token;  
      newUser.city = newUser.city != undefined ?  newUser.city : res[0].city;  
      newUser.state = newUser.state != undefined ?  newUser.state : res[0].state;  
      newUser.country = newUser.country != undefined ?  newUser.country : res[0].country;   
      newUser.signup_via = newUser.signup_via != undefined ?  newUser.signup_via : res[0].signup_via;   
      newUser.is_logged_in =  1;

       const objectArray = Object.entries(newUser);
        var key_val = [];
        var val_arr = [];

      objectArray.forEach(([key, value]) => {
        
        if(value !== undefined){
          key_val.push(key + ' = ?');
          val_arr.push(value);
        }
      });

       val_arr.push(res[0].user_id);       
      
      sql.query(
        "UPDATE a_user SET "+ key_val.join(",") +" WHERE user_id = ?",
        val_arr,
        (err, resu) => {  
          //console.log('hihih'+err);
          //result(null, err);
          if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }

            if (resu.affectedRows == 0) {
              // not found Customer with the id
              result({ kndi: "not_found" }, null);
              return;
            }

            //console.log("updated User: ", { id: res[0].user_id, ...newUser });
            result(null, { id: res[0].user_id, ...newUser });
            return;
        });
    }else{                
        sql.query("INSERT INTO a_user SET ?", newUser, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log("created user: ", { id: res.insertId, ...newUser });
          if(newUser.user_fbid != undefined || newUser.user_fbid  != ''){
            const image_url =  "https://graph.facebook.com/"+newUser.user_fbid+"/picture?type=large&width=720&height=720";
            const user_image = { user_id : res.insertId, image: image_url, profile_image : 1 };
            
             sql.query("INSERT INTO user_images SET ?",  new UserImage(user_image), (err, resImage) => {
                result(null, { id: res.insertId, ...resImage[0] });
             });
          }else{
            result(null, { id: res.insertId, ...newUser });
          }
          
        });
    }   
  });
};


User.create = (newUser, result) => {
  sql.query("INSERT INTO a_user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (userId, result) => {
  sql.query(`SELECT * FROM a_user WHERE user_id  = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

User.getAll = result => {
  sql.query("SELECT * FROM a_user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};

User.getUserListByCategory  = (categoryId, userId, result) => {

sql.query(`SELECT * FROM user_settings WHERE user_id  = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user List by category: ", res[0]);
      //result(null, res[0]);
      $where = '';
      if(res[0]['radius'] !== undefined){      
          $where += ` AND (3959 *acos(cos(radians((SELECT user_lat from a_user where user_id =  ${userId} ))) * cos(radians(user_lat)) * cos(radians(user_long) - radians((SELECT user_long from a_user where user_id = ${userId}))) + sin(radians((SELECT user_lat from a_user where user_id =${userId}))) * sin(radians(user_lat )))) <= `+res[0]['radius'];
      }

      if(res[0]['gender'] !== undefined){      
          const gender_arr = res[0]['gender'].split(",");
          $where += ' AND u.user_gender IN ("'+gender_arr.join("\",\"")+'")';
      }

       if(res[0]['age_from'] !== undefined ){
        $where += " AND DATE_FORMAT(FROM_DAYS(DATEDIFF(CURDATE(),STR_TO_DATE(u.user_dob,'%m/%d/%Y'))), '%Y')+0 >= "+res[0]['age_from'];
      }

      if(res[0]['age_to'] !== undefined ){
        $where += " AND DATE_FORMAT(FROM_DAYS(DATEDIFF(CURDATE(),STR_TO_DATE(u.user_dob,'%m/%d/%Y'))), '%Y')+0 <= "+res[0]['age_to'];
      }
    }

    // not found Customer with the id
   // result({ kind: "not_found" }, null);  

  $query = `SELECT b.*,u.*,DATE_FORMAT(STR_TO_DATE(u.user_dob, '%m/%d/%Y'),'%m/%d/%Y') as user_dob,(3959 *acos(cos(radians((SELECT user_lat from a_user where user_id = ${userId}))) * cos(radians(user_lat)) * cos(radians(user_long) - radians((SELECT user_long from a_user where user_id = ${userId}))) + sin(radians((SELECT user_lat from a_user where user_id = ${userId}))) * sin(radians(user_lat )))) AS distance,CASE WHEN ul.mutual_like IS NULL THEN 0 ELSE ul.mutual_like END AS mutual_like FROM a_birthdate_details b JOIN a_user u ON SUBSTRING_INDEX( u.user_dob, '/', 2 ) = b.match_date left JOIN (select * from a_user_likes where liked_id = ${userId} group by liking_id) as ul on ul.liking_id = u.user_id  where (SELECT SUBSTRING_INDEX( user_dob, '/', 2 ) FROM a_user WHERE user_id = ${userId}) BETWEEN SUBSTRING_INDEX( b.birth_date, '-', 1 ) AND SUBSTRING_INDEX( b.birth_date, '-', -1 ) AND u.user_id != ${userId} AND b.category = ${categoryId} AND u.user_id NOT IN(select liked_id from a_user_likes where liking_id = ${userId} ) AND u.user_id NOT IN(select blocked_id from blocked_users where user_id = ${userId} )`+ $where;



      console.log($query);

sql.query($query, (err, res) => {
  if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user list: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
});

});

  
};

User.getUserSettings = (userId, result) => {
  sql.query(`SELECT * FROM user_settings WHERE user_id  = ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user settings: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

User.getBlockedUsers = (categoryId, userId, result) => {
  sql.query(`select b.blocked_id, u.user_name as name from blocked_users b join a_user u on u.user_id = b.blocked_id where b.user_id= ${userId} and b.category_id = ${categoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found blocked users: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

User.getSentNotifications = ( userId, result) => {
  sql.query(`select * from notifications where from_user_id= ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Sent notification users: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

User.getReceivedNotifications = ( userId, result) => {
  sql.query(`select * from notifications where to_user_id= ${userId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Received notification users: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

User.getMutualLikes = (categoryId, userId, result) => {

var sqlq = 'SELECT l2.liked_id as id,u.user_name as name,u.user_image as img,l1.category as cat,l1.created_datetime as date from (SELECT * FROM `a_user_likes` where liked_id=${userId} and category_id = ${categoryId}) as l1 join (SELECT * FROM `a_user_likes` where liking_id=${userId}) as l2 on l2.liked_id = l1.liking_id join a_user u on u.user_id = l1.liking_id where l2.liked_id not in (select blocked_id from blocked_users where user_id=${userId})';

  sql.query(sqlq, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Mutual Likes List: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


User.updateSettings = (user_settings, result) => {  
 if(user_settings.id == undefined){
     sql.query("INSERT INTO user_settings SET ?", user_settings, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created notification: ", { id: res.insertId, ...user_settings });
    result(null, { id: res.insertId, ...user_settings });
  });
 }else{
     const objectArray = Object.entries(user_settings);

        var key_val = [];
        var val_arr = [];

      objectArray.forEach(([key, value]) => {
        console.log(key); // 'one'
        console.log(value); // 1

        if(value !== undefined && key != 'id' ){
          key_val.push(key + ' = ?');
          val_arr.push(value);
        }
      });

       var id = user_settings.id;
       val_arr.push(id);

        sql.query(
          "UPDATE user_settings SET "+ key_val.join(",") +"  WHERE id = ?",
          val_arr,
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }

            if (res.affectedRows == 0) {
              // not found Customer with the id
              result({ kndi: "not_found" }, null);
              return;
            }

            console.log("updated user_settings: ", { id: id, ...user_settings });
            result(null, { id: id, ...user_settings });
          }
        );

 } 
};


User.updateBlockedUser = (blocked_user, result) => {   

 sql.query(`select count(*) as cnt from blocked_users where blocked_id = ${blocked_user.blocked_id} and user_id = ${blocked_user.user_id}  and category_id = ${blocked_user.category_id}`, (err, res) => {   
   if(res[0].cnt == 0){

         sql.query("INSERT INTO blocked_users SET ?", blocked_user, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }

          sql.query(`select count(*) as cnt from blocked_users where blocked_id = ${blocked_user.blocked_id} `, (err, res) => {   
            if(res[0].cnt >= 10){
                  sql.query(
                      "UPDATE a_user SET status = 2  WHERE user_id = ?",
                      [blocked_user.blocked_id],
                      (err, res) => {
                  });    
            }
        });


          console.log("created Blocked User: ", { id: res.insertId, ...blocked_user });
          result(null, { id: res.insertId, ...blocked_user });
        });
    }else{
      result(err, 'Already blocked user');
      return;
    }     
 });
 
};


User.updateLikedUser = (liked_user, result) => {   
 console.log(`select count(*) as cnt from a_user_likes where liking_id = ${liked_user.liking_id} and liked_id = ${liked_user.liked_id}  and category_id = ${liked_user.category_id}`);
 //return;
 sql.query(`select count(*) as cnt from a_user_likes where liking_id = ${liked_user.liking_id} and liked_id = ${liked_user.liked_id}  and category_id = ${liked_user.category_id}`, (err, res) => {   
   if(res[0].cnt == 0){
         liked_user.mutual_like = 0;
         sql.query("INSERT INTO a_user_likes SET ?", liked_user, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log("created Liked  User: ", { id: res.insertId, ...liked_user });
          result(null, { id: res.insertId, ...liked_user });
        });
    }else{
      if(res[0].like_type == 1){
        result(err, 'Already Liked user');
      }else{
        sql.query(
          "UPDATE a_user_likes SET mutual_like = 1  WHERE liking_id = ? and liked_id = ? and category_id = ?",
          [liked_user.liking_id,liked_user.liked_id,liked_user.category_id],
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }

            if (res.affectedRows == 0) {
              // not found Customer with the id
              result({ kndi: "not_found" }, null);
              return;
            }

            console.log("updated user_settings: ", { id: res[0].sno, ...liked_user });
            result(null, { id: res[0].sno, ...liked_user });
            return;
          }
        );
      }      
    }     
 });
 
};

User.addDeviceInfo = (device_info, result) => {   

sql.query("DELETE FROM a_device_info WHERE token = ?", device_info.token, (err, res) => {
       sql.query("INSERT INTO a_device_info SET ?", device_info, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
          console.log("created Device Info: ", { id: res.insertId, ...device_info });
          result(null, { id: res.insertId, ...device_info });
        });      

  });
 
};

User.addUserImages = (user_image, result) => {  
  const fs = require('fs');
  sql.query(`select count(*) as cnt from user_images where user_id = ${user_image.user_id}`, (err, res) => {   
  if(res[0].cnt >= 6){
    result(err, 'Already 5 images uploaded to this user, try changing image endpoint');
    return;
  }
  if(!fs.existsSync('uploads/users/'+user_image.user_id+'/')){
    fs.mkdirSync('uploads/users/'+user_image.user_id+'/', 0777, function(err){
        if(err){
            console.log(err);
            // echo the result back
            response.send("ERROR! Can't make the directory! \n");
        }
    });
}
 let base64String = user_image.image; // Not a real image 
// Remove header
 let base64Image = base64String.split(';base64,').pop(); 

 let filename = getRandomFileName()+'.png';

fs.writeFile('uploads/users/'+user_image.user_id+'/'+filename, base64Image, {encoding: 'base64'}, function(err) {
    console.log('File created');
});

  user_image.image = filename;

   sql.query("INSERT INTO user_images SET ?", user_image, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created User Images: ", { id: res.insertId, ...user_image });
      result(null, { id: res.insertId, ...user_image });
    });     

  }); 
 
};



User.updateById = (id, user, result) => {

  const objectArray = Object.entries(user);

  var key_val = [];
  var val_arr = [];

objectArray.forEach(([key, value]) => {
  console.log(key); // 'one'
  console.log(value); // 1

  if(value !== undefined ){
    key_val.push(key + ' = ?');
    val_arr.push(value);
  }
});

 val_arr.push(id);

  sql.query(
    "UPDATE a_user SET "+ key_val.join(",") +"  WHERE user_id = ?",
    val_arr,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kndi: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM a_user WHERE user_id = ?", id, (err, res) => {
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

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

User.removeAll = result => {
  sql.query("DELETE FROM a_user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} user`);
    result(null, res);
  });
};

function getRandomFileName() {
var timestamp = new Date().toISOString().replace(/[-:.]/g,"");  
var random = ("" + Math.random()).substring(2, 8); 
var random_number = timestamp+random;  
return random_number;
}

module.exports = User;
