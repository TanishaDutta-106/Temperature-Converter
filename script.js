const tempInput = document.getElementById('temp-input');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const convertButton = document.getElementById('convert-button');

function validateForm(){
    convertButton.disabled = !(tempInput && fromUnit && toUnit);
}
    
tempInput.addEventListener('input', validateForm);
fromUnit.addEventListener('change', validateForm);
toUnit.addEventListener('change', validateForm);

document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const tempInput = parseFloat(document.getElementById('temp-input').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;

    let result;

    if(fromUnit === toUnit){
        result = tempInput;
    } else{
        result =convertTemperature(tempInput, fromUnit, toUnit);
    }
    document.getElementById('result').textContent = `Converted: ${result} ${toUnit}`;
});

function convertTemperature(temp, fromUnit, toUnit) {
  // Conversion logic
    if (fromUnit === 'C') {
        if (toUnit === 'F') return (temp * 9/5) + 32;
        if (toUnit === 'K') return temp + 273.15;
  }
    if (fromUnit === 'F') {
        if (toUnit === 'C') return (temp - 32) * 5/9;
        if (toUnit === 'K') return (temp - 32) * 5/9 + 273.15;
  }
    if (fromUnit === 'K') {
        if (toUnit === 'C') return temp - 273.15;
        if (toUnit === 'F') return (temp - 273.15) * 9/5 + 32;
  }
}