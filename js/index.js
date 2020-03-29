let shoppingList = document.querySelector('ul');
let newItem = document.querySelector('input');
let addButton = document.getElementById('Add');

function init(){

  addButton.addEventListener( 'click', (event) => {
    event.preventDefault();
    insertValue();
  });

  shoppingList.addEventListener('click',(event) => {
     event.preventDefault();
     if(event.target.matches('.delete')){
       removeElement();
     }else if(event.target.matches('.check')){
       check();
     }

   });
}

function check(){
  let itembox = event.target.parentNode.parentNode;
  if(itembox.querySelector('label').style.textDecoration == "none" || itembox.querySelector('label').style.textDecoration == ""){
    itembox.querySelector('label').style.textDecoration = "line-through";
  }else{
    itembox.querySelector('label').style.textDecoration = "none";
  }
}

function insertValue(){
  if(newItem.value.trim() == ""){
    console.log("Empty value can not be added.")
  }else{
    let element =
    `<li>
            <label>${newItem.value}</label>
            <div>
              <button type = "submit" class = "check" > check </button>
              <button type = "submit" class = "delete" > delete </button>
            </div>
    </li>`;
    newItem.value = "";
    shoppingList.innerHTML =  element + shoppingList.innerHTML;
  }
}

function removeElement(){
  let itembox = event.target.parentNode.parentNode;
  itembox.remove();
}

init();
