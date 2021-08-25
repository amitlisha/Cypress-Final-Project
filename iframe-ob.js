console.log("amit123123");
var inputMain;
window.onload = () => {
  var span = document.getElementById(
    "true-random-integer-generator-max-button-span"
  );
  var input = document.createElement("input");
  input.id = "numInput";
  input.autocomplete = "off";
  inputMain = input;
  span.append(input);
  document.getElementById(
    "true-random-integer-generator-button"
  ).style.display = "inline";
};
var xmlHttp, begin;
function getTrueRandomInteger(min, max) {
  xmlHttp = GetXmlHttpObject();
  if (xmlHttp == null) {
    return;
  }
  min = parseInt(min);
  max = parseInt(max);
  if (isNaN(min)) min = 1;
  if (isNaN(max)) max = 100;
  if (max <= min) max = min + 1;
  document.getElementById("true-random-integer-generator-min").value = min;
  document.getElementById("true-random-integer-generator-max").value = max;
  var url;
  url =
    "https://www.random.org/integers/?num=1&min=" +
    min +
    "&max=" +
    max +
    "&col=1&base=10&format=plain&rnd=new";
  begin = new Date().getTime();
  document.getElementById("true-random-integer-generator-result").innerHTML =
    '<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
  xmlHttp.open("GET", url, true);
  xmlHttp.onreadystatechange = updateTrngDisplayAjax;
  xmlHttp.send(null);
}
function updateTrngDisplayAjax() {
  if (xmlHttp.readyState < 4) {
    document.getElementById("true-random-integer-generator-result").innerHTML =
      '<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
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
  if ((inputMain.value != "") && (parseInt(inputMain.value) <= 20) && (parseInt(inputMain.value) >= 1)) {
    document.getElementById("true-random-integer-generator-result").innerHTML =
      inputMain.value;
  } else {
    var trngresponse = xmlHttp.responseText;
    document.getElementById(
      "true-random-integer-generator-result"
    ).innerHTML = trngresponse;
  }
}
// var trngresponse = xmlHttp.responseText;
// document.getElementById("true-random-integer-generator-result").innerHTML = trngresponse;
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
    getTrueRandomInteger(
      document.getElementById("true-random-integer-generator-min").value,
      document.getElementById("true-random-integer-generator-max").value
    );
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
