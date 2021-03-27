const addForm = document.querySelector('.add');
const ul = document.querySelector('.todoslist');
const search = document.querySelector('.search');

const list = [];

//////// Create Seaching function


////////// Create eventListener for ADD
addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const addTodo = addForm.addInput.value.trim();
    if(addTodo.length){
        controlTamplate(addTodo);
        addForm.reset();
    }else(
        alert('Input area is empty')
        ); 
    });
    
    ///////// Create a function for ADD 
    const controlTamplate = function(addTodo){
        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${addTodo}</span>
                <i class="fas fa-backspace trash"></i>
            </li>
        `;
        ul.innerHTML += html;
    };
    
/////////// Delete icon
    ul.addEventListener('click', e =>{
        if(e.target.classList.contains('trash')){
            e.target.parentElement.remove();
        }
        
    });

    search.addEventListener('keyup', (e) => {
        for (let child of ul.children) {
            if (e.target.value === "" || child.children[0].innerHTML.indexOf(e.target.value) !== -1) {
                child.classList.remove('hidden');
            }else 
            {
                child.classList.add('hidden');
            }
        }
    });