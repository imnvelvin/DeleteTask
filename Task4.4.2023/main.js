let btn1 = document.querySelector('#btn');
let lists = document.querySelector('#list')


let alert_task = document.querySelector(' .alert');

btn1.onclick =  function(){

    let text = document.querySelector('.form-control').value
    

    

    let div = document.createElement('div');
    div.className='box d-flex justify-content-between align-items-center';
    let h1= document.createElement('h1');
    h1.innerHTML=text;
  
    let button = document.createElement('button');
    button.className='btn btn-danger';
    

    button.innerHTML='Delete';
    
    div.append(h1,button);
    lists.appendChild(div);


    deleteElement(div);
    


}
function deleteElement(element){
    element.onclick= function(e){
       e.target.parentNode.remove();
    }
    
}

