let formatDate = function(date){
  var monthNames = ["January", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"];
  return ( date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear());
};

export {formatDate}
