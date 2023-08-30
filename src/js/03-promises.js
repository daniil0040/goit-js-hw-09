import Notiflix from 'notiflix';
const selectors = {
  form: document.querySelector(".form"),
  submitBtn : document.querySelector("button")
}
const values = {}

selectors.form.addEventListener("input", hendlerInput)
selectors.submitBtn.addEventListener("click", handlerSubmit)

function handlerSubmit(evt) {
  evt.preventDefault()
  let delay = Number(values.delay);
let step = Number(values.step);
  let amount = Number(values.amount)
  for (let position = 1; position < amount + 1; position += 1) {
    if (position>=2) {
      delay+= step
    }
  createPromise(position, delay)
}
}

function hendlerInput(evt) {
  const objKey = evt.target.getAttribute("name")
  values[`${objKey}`] = evt.target.value
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(position, delay);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
          if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
    },delay)
  })
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}