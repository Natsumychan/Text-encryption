const textArea= document.querySelector(".writing-area")
const encryptedText= document.querySelector(".encrypted-message")
const encryptButton= document.querySelector(".encrypt-button")
const decryptButton= document.querySelector(".decrypt-button")
let newPhrase

encryptButton.addEventListener("click",encryptOption)
decryptButton.addEventListener("click",decryptOption)

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function encryptOption (){
 // const text = encrypt(textArea.value)
 let catchText= textArea.value
 if(catchText){
  console.log(catchText)
 }else{
  emptyTextValue()
 }
}

function decryptOption(){
 let catchText= textArea.value
  if(catchText){
   console.log(catchText)
  }else{
   emptyTextValue()
 }
}

function emptyTextValue(){
 return alert("Please insert the text! 😐")
}


function encrypt(encryptedString){
 let codeKeys=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
 let phrase= encryptedString.toLowerCase()
 for (let index = 0; index < codeKeys.length; index++) {
  if (phrase.includes(codeKeys[index][0])) {
   newPhrase= phrase.replaceAll(codeKeys[index][0],codeKeys[index][1])
  }
  
 }
 return newPhrase
}