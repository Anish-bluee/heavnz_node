// constructor
const UserImages = function(userImages) {
  this.image_id = userImages.image_id;	
  this.user_id = userImages.user_id;
  this.image = userImages.image;
  this.profile_image = userImages.profile_image;    
};

module.exports = UserImages;