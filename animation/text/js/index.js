var showText = function (target, message, index, interval) {
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}

$(document).ready(function() {
  setTimeout(function() {
    var text = $('.text-edit').html().replace(/<br *\/?>/gi,'\n');
  showText("#msg", text, 0, 100); 
  }, 2000);
});