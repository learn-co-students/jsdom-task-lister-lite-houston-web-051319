document.addEventListener("DOMContentLoaded", () => {

  //define variables for form and list
  let new_task = document.body.querySelector('#new-task-description');
  let tasks = document.body.querySelector('#tasks');
  let button = document.body.querySelector('.button')
  let priority = document.body.querySelector('#new-task-priority');
  let form = document.body.querySelector('#create-task-form')
  let order_btn = document.createElement('button')
  order_btn.innerText = "Organize by Priority"
  document.body.append(order_btn)

  button.addEventListener('click',function(e){
    e.preventDefault()

    //creates list item and gives it value and color
    let li = document.createElement('li')
    li.innerText = new_task.value
    li.value = priority.value
    if(li.value == "3"){
      li.style.color = "green"
    }else if(li.value == "2"){
      li.style.color = "yellow"
    }else if(li.value == "1"){
      li.style.color = "red"
    }

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
  
  //properties of button to organize
  order_btn.addEventListener('click',function(e){
    //something to order by color or whatever LOL
    e.preventDefault()

    task_array = new Array(...tasks.children)
    let sorted_tasks = task_array.sort(function(a, b){return a.value - b.value});
    tasks.innerHTML = ""
    sorted_tasks.forEach(function(item){
      tasks.append(item)
    })
  })

});
