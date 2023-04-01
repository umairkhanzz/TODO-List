const addform = document.querySelector('.add');

const list = document.querySelector('.todos');

const search = document.querySelector('.search input');

const generatetemplete = (todo) => {
  const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
      </li>`;

  list.innerHTML += html;    

};


addform.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = addform.add.value.trim();

  if(todo.length){
  generatetemplete(todo);
  addform.reset();
  }

});

//  delete todos

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});



//     searching tecnoique

const filter = (term) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add('filter');
    })
  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove('filter');
    })

};

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filter(term);
})

