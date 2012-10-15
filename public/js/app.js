$(function () {

  // Auto hide the address bar on Mobile Safari
  window.addEventListener("load",function() {
    setTimeout(function(){
      window.scrollTo(0, 1);
    }, 0);
  });

  prettyPrint();
  function monthInWord(num) { 
    var monthNames = [ 
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December" 
    ]; 

    return monthNames[num]; 
  }
  
  //todo: how to make this function available to tag.jade?
  function capitalize(str) { 
    return str.charAt(0).toUpperCase() + str.slice(1); 
  }
});

