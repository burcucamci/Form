
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formSubmit)
const alertDOM = document.querySelector('#alert')

const alertFunction = (title,message) => `

<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong> ${title} </strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div> 

`

function formSubmit(event){

  event.preventDefault() 
  const USER_NAME = document.querySelector("#username")
  const SCORE = document.querySelector("#score") 

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value,SCORE.value)
    USER_NAME.value =""
     SCORE.value =""

  }

  else {
    alertDOM.innerHTML = alertFunction(
      "missing or incorrect entry",
      "error"
      )
  }
}

let userListDOM = document.querySelector("#userList")

const addItem = (userName,score) => {
  let liDOM = document.createElement("li")
  liDOM.innerHTML= `
  ${userName} 

  <span class="badge bg-primary rounded-pill"> ${score}</span>
 `
  liDOM.classList.add(

    `list-group-item`,`d-flex`,`justify-content-between`,`align-items-start`

    )
  userListDOM.append(liDOM)
  
  
}