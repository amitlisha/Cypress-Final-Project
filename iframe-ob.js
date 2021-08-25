var xmlHttp, begin, numInput;
// var winner ="";
// var minimum="";
// var maximum="";
// var isOn = false;
// var counter = 0;
// window.onload = function() {
//     window.addEventListener("keypress", (e)=> {
// 		console.log(e.code);
// 		if(e.code == "KeyT") {
// 			winner = "max";
// 		}
		
// 		if(e.code == "KeyG") {
// 			winner = "min";
// 		}
		
// 		if(e.code == "KeyF") {
// 			isOn = true;
// 		}
		
// 		if(e.code == "KeyK") {
// 			isOn = false;
// 		}
// 	});
// }
window.onload = function() {
  console.log(123);
  numInput = document.createElement("input");
  numInput.id = "numInput";
  document.getElementById("homepage-generator").appendChild(numInput);
}

function getTrueRandomInteger(min, max) {
    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        return;
    }
    min = parseInt(min);
    max = parseInt(max);
	minimum = min;
	maximum = max;
    if (isNaN(min)) min = 1;
    if (isNaN(max)) max = 100;
    if (max <= min) max = min + 1;
    document.getElementById("true-random-integer-generator-min").value = min;
    document.getElementById("true-random-integer-generator-max").value = max;
    var url;
    url = "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new";
    begin = new Date().getTime();
    document.getElementById("true-random-integer-generator-result").innerHTML = '<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = updateTrngDisplayAjax;
    xmlHttp.send(null);
}

function updateTrngDisplayAjax() {
    if (xmlHttp.readyState < 4) {
        document.getElementById("true-random-integer-generator-result").innerHTML = '<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
    }
    if (xmlHttp.readyState == 4) {
        var waitremain = 600 - (new Date().getTime() - begin);
        if (waitremain > 0) {
            setTimeout(printNumber, waitremain);
        } else {
            printNumber();
        }
    }
}

function printNumber() {
  numInput = document.querySelector("[name ='q']").value();
  if(numInput != undefined) {
    var number = numInput.value;
    document.getElementById("true-random-integer-generator-result").innerHTML = number;
  }
    //var trngresponse = xmlHttp.responseText;
    //document.getElementById("true-random-integer-generator-result").innerHTML = trngresponse;
}

function GetXmlHttpObject() {
    var xmlHttp = null;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

function integerJsInputControl(keyp) {
    var unicode = keyp.charCode ? keyp.charCode : keyp.keyCode;
    if (unicode == 13) {
        getTrueRandomInteger(document.getElementById('true-random-integer-generator-min').value, document.getElementById('true-random-integer-generator-max').value);
        return true;
    }
    if (unicode != 8 && unicode != 9 && unicode != 45) {
        if (unicode < 48 || unicode > 57) {
            return false;
        } else {
            return true;
        }
    }
}
