let text = "I love my country Pakistan <br> I like my city Faisalabad <br> I love my Homeland"
// function LowerCase(){
//     lowerCaseText = Textbar.toLowerCase();
// }

document.getElementById("btn-1").onclick = function () {
   // var input = document.getElementById("Data").value;
   var Textbar = document.getElementById("Textbar").value;
   var Output = Math.round(Textbar);
   document.getElementById("Text").innerHTML = Output;
}

document.getElementById("btn-2").onclick = function () {
   // var input = document.getElementById("Data").value;
   var Textbar = document.getElementById("Textbar").value;
   var Output = Math.ceil(Textbar);
   document.getElementById("Text").innerHTML = Output;
}
document.getElementById("btn-3").onclick = function () {
   // var input = document.getElementById("Data").value;
   var Textbar = document.getElementById("Textbar").value;
   var Output = Math.floor(Textbar);
   document.getElementById("Text").innerHTML = Output;
}

document.getElementById("btn-4").onclick = function () {
   // var input = document.getElementById("Data").valu
   // var Textbar = document.getElementById("Textbar").value;
   var Output = Math.random();
   document.getElementById("Text").innerHTML = Output;
}

document.getElementById("btn-5").onclick = function () {
   var Output = Math.random();
   var result = (Output * 6) + 1;
   var result = Math.floor(result);
   document.getElementById("Text").innerHTML = result;
}

document.getElementById("btn-6").onclick = function(){
   var randomString = "";
   var Length = document.getElementById("Textbar").value;
   var upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
   var numbers = "01213456789";
   let possibleString = upperCaseAlphabets + lowerCaseAlphabets + numbers;
   for(let i=0; i<Length; i++){
      let randomNumber = Math.random();
      randomString += possibleString.charAt(Math.floor(randomNumber * possibleString.length))
      document.getElementById("Text").innerHTML = randomString;
   }
}
document.getElementById("btn-7").onclick = function(){
   var string = document.getElementById("Textbar").value;
   console.log(typeof string)
   console.log(string)
   var Num = Number(string)
   document.getElementById("Text").innerHTML = Num;
   console.log(typeof Num)
   console.log(Num)
 }

document.getElementById("btn-8").onclick = function(){
   var Textbar = document.getElementById("Textbar").value;
   var Num = Number(Textbar)
   var Ouput = Num.toFixed(2)
   document.getElementById("Text").innerHTML = Ouput;
}

document.getElementById("btn-9").onclick = function(){
   let Textbar = parseInt(document.getElementById("Textbar").value);
   // let Textbar = Number(Textbar);
   let Tax = parseInt(Textbar * 0.17);
   let Ouput = Textbar + Tax;
   document.getElementById("Text").innerHTML = Ouput;
}