var newCaseButton = document.querySelector(".panel #newCase");
var cloneCaseButton = document.querySelector(".panel #cloneCase");
var removeCaseButton = document.querySelector(".panel #removeCase");
var sendRequestButton = document.getElementById("sendRequest");

var headersCanvas = document.getElementById("responseHeaders").getContext("2d");
var responseCanvas = document.getElementById("responseText").getContext("2d");
var viewCanvas = document.getElementById("responseView");


var currentTestInstance = 1;
var httpRequest;

newCaseButton.addEventListener("click", addTestCase);
cloneCaseButton.addEventListener("click", addTestCase);
removeCaseButton.addEventListener("click", removeTestCase);
sendRequestButton.addEventListener("click", sendRequest);

function sendRequest() {
  var url = "http://www.aahoon.com";

  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = processResponse;
  httpRequest.open("GET",url,true);
  httpRequest.send();
}

function processResponse() {
  if(httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      headersCanvas.fillText(httpRequest.getAllResponseHeaders(),10,10);
      responseCanvas.fillText(httpRequest.response,10,10);
      viewCanvas.setAttribute("src",httpRequest.responseURL);

    } else {
      alert("The response was: "+ httpRequest.status);
    }
  }
}
function addTestCase() {
  console.log("hello");
  var testCaseGroupNode = this.closest("#accordion");
  var testInstance = this.closest(".test-instance")
  var newChild = testInstance.cloneNode(true);

  //Get Attribute that links hyperlink to expandable div
  var collapsable = newChild.querySelector(".collapse");
  var collapser = newChild.querySelector(".test-options");
  var textInput = newChild.querySelector("input");

  var newCaseButton = newChild.querySelector("#newCase");
  var cloneCaseButton = newChild.querySelector("#cloneCase");
  var removeCaseButton = newChild.querySelector("#removeCase");

  newCaseButton.addEventListener("click", addTestCase);
  cloneCaseButton.addEventListener("click", addTestCase);
  removeCaseButton.addEventListener("click", removeTestCase);

  var collapsableId = currentTestInstance + 1;
  currentTestInstance += 1;

  //Set that value to new node
  collapsable.setAttribute("id","collapse"+collapsableId);
  collapser.setAttribute("href","#collapse"+collapsableId);
  if (this.getAttribute("id") === "newCase") {
    textInput.value="";
  }
  testCaseGroupNode.append(newChild);
}

function removeTestCase() {
  var testCaseGroupNode = this.closest("#accordion");
  var testInstance = this.closest(".test-instance");
  testCaseGroupNode.removeChild(testInstance);
}

