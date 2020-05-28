if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  document.open();
  document.write("<h1>It seems like you're on a mobile device, please visit us on your PC!</h1>");
  document.close();
}
else {
    document.write("<p><b>You're on PC</b></p>");
}
