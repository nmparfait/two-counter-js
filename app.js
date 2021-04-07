//helper function to get access to the class
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check  "${selection}" selector, no such element exists`
    );
  }
}

function counter(element, value) {
  this.element = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.decreaseBtn = element.querySelector('.decrease');
  this.increaseBtn = element.querySelector('.increase');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;
  //console.log(this.decreaseBtn);
  //console.log(this.valueDOM);
}

//adding more options to our object
counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value;
};

counter.prototype.decrease = function () {
  console.log(this);
  this.value--;
  this.valueDOM.textContent = this.value;
};

counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new counter(getElement('.first-counter'), 100);
const secondCounter = new counter(getElement('.second-counter'), 200);
