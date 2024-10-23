document.getElementById('display').value = '';  
function appendToDisplay(value) {  
 document.getElementById('display').value += value;  
}  
function deleteLastCharacter() {  
 const display = document.getElementById('display');  
 display.value = display.value.slice(0, -1);  
}  

function calculateResult() {  
 const display = document.getElementById('display');  
 try {  
 
  display.value = eval(display.value);  
 } catch (error) {  
 display.value = 'Помилка';
} }  


document.querySelectorAll('.buttons button').forEach(button => {  
 button.addEventListener('click', function() {  
 const value = this.textContent;  
 if (!isNaN(value) || value === '+' || value === '-' || value === '*' || value === '/') {  
 appendDigit(value);  
 } else if (value === '=') {  
    clearDisplay();  
 } else if (value === 'C') {  
 deleteLastCharacter();  
 }  
 });  
});
