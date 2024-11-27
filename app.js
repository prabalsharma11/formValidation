const email = document.getElementById('email')
const pass = document.getElementById('pass')
const form1 = document.getElementById('form1')
const pass1 = document.getElementById('pass1')
const sucess = document.getElementById('sucess')

function emailvalidation(email) {
  return email.length > 3 && email.includes('@') && email.includes('.')
}
function passvalidation(pass) {
  return pass.length > 8
}

function checkValidation() {
  const emailValue = email.value.trim()
  const passwordValue = pass.value.trim()
  let valid = true
  if (emailvalidation(emailValue)) {
    form1.innerText = ''
  } else {
    form1.innerText =
      "Make sure email is more than 3 characters and has '@' and '.'."
    valid = false
  }

  if (passvalidation(passwordValue)) {
    pass1.innerText = ''
  } else {
    pass1.innerText =
      "Make sure email is more than 3 characters and has '@' and '.'."
    valid = false
  }
  if (valid) {
    sucess.style.display = 'block'
  } else {
    sucess.style.display = 'none'
  }
}

function submit() {
  const emailValue = email.value.trim()
  const passwordValue = pass.value.trim()
  if (emailvalidation(emailValue) && passvalidation(passwordValue)) {
    alert('Successful signup!')
  } else {
    alert('Please fix the errors before submitting.')
  }
}
