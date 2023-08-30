const selectors = {
  form: document.querySelector(".form"),
  // delayInput: document.querySelector(`[name = "delay"]`),
  // delayStepInput: document.querySelector(`[name = "step"]`),
  // amountInput: document.querySelector(`[name = "amount"]`),
  submitBtn : document.querySelector("button")
}

selectors.form.addEventListener("input",hendlerInput)
function hendlerInput(evt) {
  console.log(evt.target.getAttribute("name"), evt.target.value);
  const obj = {}
  if (!obj.hasOwnProperty(evt.target.getAttribute("name"))) {
    obj.evt.target.getAttribute("name") = evt.target.value
  } else {
    
  }
  return obj
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });