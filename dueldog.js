if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // is mobile..
    document.write("<div id="splashscreen"> <h2>Please visit us on your PC!/h2> </div>");
}
else {
    document.write("<img src="logo.png" alt="logo"> <h1>DUELDOG</h1>
    <p>Current Beta Test Full
    Next beta beginning soon!
    Enter your email, our admin team will contact
    you shortly with additional information!</p>");
}
