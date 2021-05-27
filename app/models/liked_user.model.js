// constructor
const LikedUser = function(likedUser) {
  this.sno = likedUser.sno;	
  this.liking_id = likedUser.liking_id;
  this.liked_id = likedUser.liked_id;
  this.category_id = likedUser.category_id;  
  this.mutual_like = likedUser.mutual_like;  
  this.like_type = likedUser.like_type;  
  this.status = likedUser.status;  
};

module.exports = LikedUser;