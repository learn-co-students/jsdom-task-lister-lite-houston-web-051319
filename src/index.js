document.addEventListener("DOMContentLoaded", () => {

  //define variables for form and list
  let new_task = document.body.querySelector('#new-task-description');
  let tasks = document.body.querySelector('#tasks');
  let button = document.body.querySelector('.button')
  let priority = document.body.querySelector('#new-task-priority');

  button.addEventListener('click',function(e){
    e.preventDefault()

    //creates list item and gives it properties
    let li = document.createElement('li')
    li.innerText = new_task.value
    li.style.color = priority.value

    //creates delete button with list item
    let del_btn = document.createElement('button')
    del_btn.innerText = "x"
    li.append(del_btn)
    tasks.append(li)

    //gives delete button function to delete list item
    del_btn.addEventListener('click',function(e){
      e.preventDefault()
      li.remove()
    })

  })
  
  
  


});
