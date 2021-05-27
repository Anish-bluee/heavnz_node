// constructor
const BlockedUser = function(blockedUser) {
  this.id = blockedUser.id;	
  this.user_id = blockedUser.user_id;
  this.blocked_id = blockedUser.blocked_id;
  this.category_id = blockedUser.category_id;  
};

module.exports = BlockedUser;