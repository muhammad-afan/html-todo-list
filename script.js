let addBtn = document.querySelector('.addItem');
let ul = document.querySelector('ul');


addBtn.onclick = () => {
    let li = document.createElement('li');
    let inputValue = document.querySelector('.item').value;
    let textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    if(inputValue === ''){
        alert("You must write something");
    }else{
        ul.appendChild(li);
    }
    document.querySelector('.item').value = '';

    let span = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    
    span.appendChild(text)
    li.appendChild(span);
    console.log(li)

    span.addEventListener('click', function(ev){
        this.parentElement.remove();
    })
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    ev.target.classList.toggle('checked');
})