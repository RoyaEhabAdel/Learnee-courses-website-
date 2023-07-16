function show1() {
    var x = document.getElementById("myDIV1");
    var y = document.getElementById("myDIV2");
    var z = document.getElementById("myDIV3");
    var c = document.getElementById("myDIV4");
    var v = document.getElementById("myDIV5");

    y.style.display = "none";
    z.style.display = "none";
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function show2() {
    var x = document.getElementById("myDIV2");
    var y = document.getElementById("myDIV1");
    var z = document.getElementById("myDIV3");
    var c = document.getElementById("myDIV4");
    var v = document.getElementById("myDIV5");

    y.style.display = "none";
    z.style.display = "none";
    
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function show3() {
    var x = document.getElementById("myDIV3");
    var y = document.getElementById("myDIV1");
    var z = document.getElementById("myDIV2");
    var c = document.getElementById("myDIV4");
    var v = document.getElementById("myDIV5");

    y.style.display = "none";
    z.style.display = "none";

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function show4() {
    var x = document.getElementById("myDIV4");
    var y = document.getElementById("myDIV1");
    var z = document.getElementById("myDIV3");
    var c = document.getElementById("myDIV2");
    var v = document.getElementById("myDIV5");

    y.style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function show5() {
    var x = document.getElementById("myDIV5");
    var y = document.getElementById("myDIV1");
    var z = document.getElementById("myDIV3");
    var c = document.getElementById("myDIV4");
    var v = document.getElementById("myDIV2");

    y.style.display = "none";
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function addFunction(){
    var a = document.getElementById("add-to-me").innerHTML +=
            "<h3>This is the text which has been inserted by JS</h3>";
  }
  
  

