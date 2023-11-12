const result = document.getElementById('result')
const cbtn = document.getElementById('C')
const deletebtn = document.getElementById('delete')
const procentbtn = document.getElementById('procent')
const divisionbtn = document.getElementById('division')
const seven_numberbtn = document.getElementById('seven_number')
const eight_numberbtn = document.getElementById('eight_number')
const nine_numberbtn = document.getElementById('nine_number')
const multibtn = document.getElementById('multi')
const four_numberbtn = document.getElementById('four_number')
const five_numberbtn = document.getElementById('five_number')
const six_numberbtn = document.getElementById('six_number')
const minusbtn = document.getElementById('minus')
const one_numberbtn = document.getElementById('one_number')
const two_numberbtn = document.getElementById('two_number')
const three_numberbtn = document.getElementById('three_number')
const plusbtn = document.getElementById('plus')
const zero_numberbtn = document.getElementById('zero_number')
const eqalsbtn = document.getElementById('result')
let action;
let buffer = "0"
let runningTotal = 0 

function buttonClick(value) {
   if (isNaN(value)){
      handleSymbol(value);
   }else{
      handleNumber(value);
   }
   result.innerText = buffer
}

function handleSymbol(symbol) {
   switch(symbol){
      case 'C':
         buffer ='0';
         runningTotal = 0;
         break;
      case '=':
         if(action === null) {
            return
         }
         flushOperation(parseInt(buffer));
         action = null;
         buffer = runningTotal;
         runningTotal = 0;
         break;
         case '←':
            if(buffer.length ===1) {
               buffer = '0';
            } else {
               buffer = buffer.substring(0,buffer.length-1);
            }
            break;
         case '+':
         case '−':
         case '×':
         case '÷':
            handleMath(symbol);
            break;
   }
}

function handleMath(symbol){
   if(buffer === '0'){
      return
   }
   const intBuffer = parseInt(buffer);

   if(runningTotal === 0) {
      runningTotal = intBuffer;
   }else{
      flushOperation(intBuffer);
   }
   action = symbol;
   buffer = '0';

}
function flushOperation(intBuffer) {
   if(action === '+') {
      runningTotal += intBuffer
   }else if(action === '−') {
      runningTotal -= intBuffer
   }else if(action === '×') {
      runningTotal *= intBuffer
   }else if(action === '÷') {
      runningTotal /= intBuffer
   }
}
function handleNumber(numberString) {
   if(buffer ==='0') {
      buffer = numberString;
   } else{
      buffer += numberString;
   }
}
function init() {
   document.querySelector('.calc-buttons').addEventListener('click', function(event){
      buttonClick(event.target.innerText);
   })
}
init()