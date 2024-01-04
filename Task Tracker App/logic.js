const input_box = document.getElementById("addText");
const btnadd = document.getElementById("add");
const containerList = document.getElementById("list-container");
const dataBox = document.getElementById("box2");
const list = document.getElementsByTagName("li")
if(list.length>5){
    containerList.style.overflow='scroll';
}
btnadd.addEventListener('click', function addText (){
    if(input_box.value === ''){
        alert("Please enter something");
    }
    else{
         let li = document.createElement('li');
         li.innerHTML= input_box.value;
         containerList.appendChild(li);

         let span =document.createElement('span');
         span.innerHTML = "\u00d7";
         li.appendChild(span);


    }
    input_box.value ="";
    saveData();
})

containerList.addEventListener('click', function(e){
    if(e.target.tagName=== 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('Data',containerList.innerHTML)
}
function showData(){
    containerList.innerHTML = localStorage.getItem('Data',containerList.innerHTML);
}
showData();