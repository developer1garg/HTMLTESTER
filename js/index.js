var newCaseButton = document.querySelector(".panel #newCase");
var cloneCaseButton = document.querySelector(".panel #cloneCase");
var removeCaseButton = document.querySelector(".panel #removeCase");
var currentTestInstance = 1

newCaseButton.addEventListener("click", addTestCase);
cloneCaseButton.addEventListener("click", addTestCase);
removeCaseButton.addEventListener("click", removeTestCase);

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

