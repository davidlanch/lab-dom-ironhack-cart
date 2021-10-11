// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const subtotalPrice = price * quantity;

  subtotal.textContent = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  let total = 0;
  const allProducts = document.querySelectorAll('.product ');
  const totalPrice = document.querySelector('#total-value  span');

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  totalPrice.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const childToRemove = target.parentNode.parentNode;
  const firstParent = document.querySelector('tbody');
  firstParent.removeChild(childToRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.create-product  input[type="text"]').value;
  const newPrice = document.querySelector('.create-product  input[type="number"]').value;
  const nodeToClone = document.querySelector('.product');
  const cloneNode = nodeToClone.cloneNode(true);
  const parentClone = document.querySelector('tbody');
  cloneNode.querySelector('.price span').textContent = newPrice;
  cloneNode.querySelector('.name span').textContent = newProduct;
  parentClone.appendChild(cloneNode);
  


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
