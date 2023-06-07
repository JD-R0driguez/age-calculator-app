
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');

day.addEventListener('input', validateDay);
month.addEventListener('input', validateMonth);
year.addEventListener('input', validateYear);


const arrowButton = document.getElementById('arrow');

arrowButton.addEventListener('mouseenter', () => {
    arrowButton.classList.toggle("filter-hover");
} )
arrowButton.addEventListener('mouseleave', () => {
    arrowButton.classList.toggle("filter-hover");
})

arrowButton.addEventListener('click', getAge);


function validateDay(){

    const inputValue = day.value;

    if (inputValue > 31) {
      dayError.innerHTML = 'Must be a valid day';
    } else {
      dayError.innerHTML = '';
    }
}

function validateMonth(){
       
    const inputValue = month.value;

    if (inputValue > 12) {
      dayError.innerHTML = 'Must be a valid month';
    } else {
      dayError.innerHTML = '';
    }
}

function validateYear(){
    const inputValue = year.value;
    const currentDate =  new Date();
    const currentYear = currentDate.getFullYear();

    if (inputValue > currentYear) {
      dayError.innerHTML = `Year can't be greater than ${currentYear}`;
    } else {
      dayError.innerHTML = '';
    }
}



function getAge() {

    const dayValue = parseInt(day.value, 10);
    const monthValue = parseInt(month.value, 10);
    const yearValue = parseInt(year.value, 10);

    //Validate that date is a valid date

    const emptyDay = checkForEmptyInputs(dayValue);
    const emptyMonth = checkForEmptyInputs(monthValue);
    const emptyYear = checkForEmptyInputs(yearValue);

    if(emptyDay) dayError.innerHTML = 'This field is required';
    if(emptyMonth) monthError.innerHTML = 'This field is required';
    if(emptyYear) yearError.innerHTML = 'This field is required';

    const validDate =  checkValidDate(dayValue, monthValue, yearValue);
    const validYear =  checkValidYear(yearValue);

    if (validDate && validYear){
        //alert("go head");
    }else{
        //alert("try again");
    }
    const yearsTotal = document.querySelector('.years-total');
    yearsTotal.innerHTML = day;
  }


  function checkForEmptyInputs(date){
    return isNaN(date) 
  }

  function checkValidDate(day, month, year) {
    const date = new Date(year, month -1, day);
    return (date.getFullYear() === year && 
    date.getMonth() === month - 1 && 
    date.getDate() === day);
  }

  function checkValidYear(year){
    const date = new Date();
    return (year < date.getFullYear());
  }