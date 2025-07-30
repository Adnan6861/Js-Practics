const inputText = document.getElementById('inputBox');
const list = document.getElementById('resultList');
const btn = document.getElementById('addBtn');

btn.addEventListener('click', addTodo);

function addTodo() {
  if (inputText.value.trim() !== "") {
    const li = document.createElement('li');

    // Create a <p> element to hold the task text
    const p = document.createElement('p');
    p.innerText = inputText.value;  // Use innerText to avoid inserting HTML code
    li.appendChild(p);

    // Create the "Remove" button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn");
    li.appendChild(deleteBtn);

    // Add the <li> to the <ul>
    list.appendChild(li);

    // Clear the input box after adding the task
    inputText.value = "";

    // Add click event to the "Remove" button to delete the <li>
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
  }
}


