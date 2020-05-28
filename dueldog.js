if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // is mobile..
    document.write("<html>
  <head><title>Website</title></head>
  <body>
     <h1>It seems like you're on a mobile device, please visit us on your PC!</h1>
  </body>
  </html>");
}
else {
    document.write("<p><b>You're on PC</b></p>");
}
