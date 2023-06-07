
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const dayValue = parseInt(day.value, 10);
const monthValue = parseInt(month.value, 10);
const yearValue = parseInt(year.value, 10);

const arrowButton = document.getElementById('arrow');

arrowButton.addEventListener('mouseenter', () => {
    arrowButton.classList.toggle("filter-hover");
} )
arrowButton.addEventListener('mouseleave', () => {
    arrowButton.classList.toggle("filter-hover");
})


arrowButton.addEventListener('click', getAge);

function getAge() {
    const yearsTotal = document.querySelector('.years-total');
    yearsTotal.innerHTML = day;
  }