let formatDate = function(date){
  if(typeof date === "string"){return date}
  var monthNames = ["January", "February", "March", "April", "May", "June", "July","August", "September","October","November", "December"];
  return ( date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear());
};

let dateToYYYY_MM_YY = function(date){
  if(typeof date === "string"){return date}
  let day = ("0" + date.getDate() ).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  return date.getFullYear()+"-"+(month)+"-"+(day) ;
};

let dateToYYYY_MM_YY_Mongoose = function(date){
  return date.substr(0,10);
};

export {formatDate, dateToYYYY_MM_YY, dateToYYYY_MM_YY_Mongoose}
