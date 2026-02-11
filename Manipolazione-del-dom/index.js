function addProduct() {
  const input = document.querySelector('input');
  const ul = document.querySelector('ul');

  if (input.value.trim() !== "") {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = input.value;

    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);

    input.value = "";
  }
}