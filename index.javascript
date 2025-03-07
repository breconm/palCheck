const userInput = document.getElementById('text-input');
const testPalBtn = document.getElementById('check-btn');
const palResult = document.getElementById('result');

const ifPal = (str) => {
  const frstInp = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return frstInp === frstInp.split("").reverse("").join("");
};

const palTest = ()=>{
  const input = userInput.value;

 if(input === ""){
    alert('Please input a value');
    return;
  }

  if (ifPal(input)){
    palResult.textContent = `${input} is a palindrome`
  } else {
   palResult.textContent =  `${input} is not a palindrome`
  }
}

testPalBtn.addEventListener("click",palTest);
