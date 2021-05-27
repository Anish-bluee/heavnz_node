// constructor
const UserSetting = function(user_setting) {
  this.id = user_setting.id;	
  this.user_id = user_setting.user_id;
  this.category_id = user_setting.category_id;
  this.age_from = user_setting.age_from;
  this.age_to = user_setting.age_to;
  this.radius = user_setting.radius;
  this.gender = user_setting.gender;
  this.show_profile = user_setting.show_profile;
  this.last_seen = user_setting.last_seen;
  this.online_visibility = user_setting.online_visibility;
};

module.exports = UserSetting;