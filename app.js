"use strict"

const form = document.getElementById("mainForm")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let textError = ""

  if (!e.target[0].value) {
    textError = "Whoops! It looks like you forgot to add your email"
  } else if (!isEmail(e.target[0].value)) {
    textError = "Please provide a valid email address"
  }

  if (textError) {
    e.target[0].classList.add("page--border-red") 
    e.target[0].value = "example@email/com"
  } else {
    e.target[0].classList.remove("page--border-red")
  }
  document.querySelector(".page--submit-error").innerHTML = textError
})

function isEmail(value) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  return String(value)
    .trim()
    .toLowerCase()
    .match(regex)
}