document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //elements
  let form=document.getElementById('create-task-form')
  let formInput = document.querySelector('#new-task-description')
  formInput.value='Wash the dishes'
  //function
  const handleDelete=(e)=>{
    e.target.parentNode.remove()
  }
  const handleToDo=(todo)=>{
    let li=document.createElement('li')
    let btn =document.createElement('button')
    btn.textContent='Delete'
    btn.addEventListener('click', (e)=>{
      handleDelete(e)
    })
    li.appendChild(document.createTextNode(todo))
    li.appendChild(btn)
    let taskList = document.getElementById('tasks')
    taskList.appendChild(li)
    
  }

  const AddToDoList=()=>{
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      handleToDo(formInput.value)
      form.reset()
    })
  }
  //function call
  AddToDoList()
}); 
