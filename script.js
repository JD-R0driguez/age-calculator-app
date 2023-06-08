const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');

const yearsTotal = document.querySelector('.years-total');
const monthsTotal = document.querySelector('.months-total');
const daysTotal = document.querySelector('.days-total');

day.addEventListener('input', checkDayInput);
month.addEventListener('input', checkMonthInput);
year.addEventListener('input', checkYearInput);


const arrowButton = document.getElementById('arrow');

arrowButton.addEventListener('mouseenter', () => {
    arrowButton.classList.toggle("filter-hover");
} )
arrowButton.addEventListener('mouseleave', () => {
    arrowButton.classList.toggle("filter-hover");
})

arrowButton.addEventListener('click', getAge);

function checkDayInput(){
    const inputValue = day.value;

    if (inputValue > 31) {
      dayError.innerHTML = 'Must be a valid day';
    } else {
      dayError.innerHTML = '';
    }
}

function checkMonthInput(){
    const inputValue = month.value;

    if (inputValue > 12) {
      monthError.innerHTML = 'Must be a valid month';
    } else {
      monthError.innerHTML = '';
    }
}

function checkYearInput(){
    const inputValue = year.value;
    const currentDate =  new Date();
    const currentYear = currentDate.getFullYear();

    if (inputValue > currentYear) {
      yearError.innerHTML = `Year can't be greater than ${currentYear}`;
    } else {
      yearError.innerHTML = '';
    }
}

// function checkValidYear(year){
//     const date = new Date();
//     return (year < date.getFullYear());
// }

function checkForEmptyInputs(date){
    return isNaN(date) 
}

function validateMonthDays(day, month, year) {
    const date = new Date(year, month -1, day);
    return (date.getFullYear() === year && 
    date.getMonth() === month - 1 && 
    date.getDate() === day);
}

function isYearBeforeCurrentYear(yearInput) {
    const currentYear = new Date().getFullYear();
    return (yearInput <= currentYear);
}


function validateDate() {

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

    const validMonthDay =  validateMonthDays(dayValue, monthValue, yearValue);
    const yearBeforeCurrent = isYearBeforeCurrentYear(yearValue); 

    if (!emptyDay && !emptyMonth && !emptyYear && validMonthDay && yearBeforeCurrent){
        return true;
    }    
    return false;

}


function getAge(){
    const isDateValid =  validateDate();
    if (isDateValid) {
        yearsTotal.innerHTML = "Calculate Years";
        monthsTotal.innerHTML = "Calculate Months";
        daysTotal.innerHTML = "calculate Days";
    }
}




