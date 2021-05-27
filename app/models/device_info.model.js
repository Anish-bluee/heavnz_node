// constructor
const DeviceInfo = function(deviceinfo) {
  this.id = deviceinfo.id;	
  this.user_id = deviceinfo.user_id;
  this.os = deviceinfo.os;
  this.token = deviceinfo.token;    
};

module.exports = DeviceInfo;