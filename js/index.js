$(document).ready(function() {
  var inputs=[""];
  var totalString;
  var operators=["+","-","/","*"];

  var operators2=["."];

  var nums=[0,1,2,3,4,5,6,7,8,9];
  
  function update() {
    totalString=inputs.join("");
    $("#steps").html(totalString);
  }
  function getValue(input) {
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")) {
      console.log("Duplicate '.'");
    }
    else if(inputs.length===1 && operators.includes(input)===false) {
      inputs.push(input);
    }
    else if(operators.includes(inputs[inputs.length-1])===false) {
      inputs.push(input);
    }
    else if(nums.includes(Number(input))) {
      inputs.push(input);
    }
    update();
  }
  function getTotal() {
    totalString=inputs.join("");
    $("#steps").html(eval(totalString));
  }
 
  $("a").on("click",function(){
    if(this.id==="deleteAll") {
      inputs=[""];
      update();
    }
    else if(this.id==="deleteOne") {
      inputs.pop();
      update();
    }
    else if(this.id==="total") {
      getTotal();
    }
    else {
      if(inputs[inputs.length-1].indexOf("+","-","/","*")===-1) {
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }
  });
});