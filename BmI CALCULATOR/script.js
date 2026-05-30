const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector('#results')

if (height === '' || height < 0 || isNaN(height)) {
  result.innerHTML = `Please give a valid height ${height}`;  
}else if (weight === '' || weight < 0 || isNaN(weight)) {
  result.innerHTML = `Please give a valid height ${weight}`;  
}else{
  
 const BMI = (weight / ((height/100 )*(height/100))).toFixed(2)

 result.innerHTML = `<span>${BMI}<span>`;

 if(BMI < 18.6){
    result.innerHTML += ' - Under Weight'
  } else if(BMI <= 24.9){
    result.innerHTML += ' - Normal Range'
  } else {
    result.innerHTML += ' - Over Weight'
  }
}

 
}


);
