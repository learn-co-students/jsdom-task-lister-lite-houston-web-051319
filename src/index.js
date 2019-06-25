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

    //creates edit button
    let edit_btn = document.createElement('button')
    edit_btn.innerText = "edit"
    li.append(edit_btn)

    //adds list item to list
    tasks.append(li)

    //gives delete button function to delete list item
    del_btn.addEventListener('click',function(e){
      e.preventDefault()
      li.remove()
    })

    //gives edit button function to edit list item
    edit_btn.addEventListener('click',function(e){
      e.preventDefault()

      //saves list item
      let stuff = li.innerText
      let info = stuff.replace("xedit","")
      let list_value = li.value


      //makes edit form
      edit_form = document.createElement('form')
      //makes text field
      list_input = document.createElement('input')
      list_input.type = "text"
      list_input.value = info
      //makes select box with options
      select_box = document.createElement('select')
      option1 = document.createElement('option')
      option2 = document.createElement('option')
      option3 = document.createElement('option')
      option1.value = "1"
      option1.innerText = "High"
      if(list_value == option1.value){
        option1.selected = "true"
      } 
      option2.value = "2"
      option2.innerText = "Medium"
      if(list_value == option2.value){
        option2.selected = "true"
      } 
      option3.value = "3"
      option3.innerText = "Low"
      if(list_value == option3.value){
        option3.selected = "true"
      }
      select_box.append(option1)
      select_box.append(option2)
      select_box.append(option3)

      //makes submit button      
      submit_button = document.createElement('input')
      submit_button.type = "submit"
      submit_button.value = "update"

      //appends everything into edit form
      edit_form.append(list_input)
      edit_form.append(select_box)
      edit_form.append(submit_button)

      //clears list item and replaces it with edit form
      li.innerText = ""
      li.append(edit_form)

      //change list item after submitting edit form
      submit_button.addEventListener('click',function(event){
        event.preventDefault()
        li.innerText = list_input.value
        if(select_box.value == "3"){
          li.style.color = "green"
        }else if(select_box.value == "2"){
          li.style.color = "yellow"
        }else if(select_box.value == "1"){
          li.style.color = "red"
        }
        li.append(del_btn)
        li.append(edit_btn)
      })
    
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
