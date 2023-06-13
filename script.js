const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const currentDate = new Date();

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

arrowButton.addEventListener('click', calculateAge);

function checkDayInput(){

    day.classList.remove('error-input');
    
    const inputValue = day.value;
    

    if (inputValue > 31) {
      dayError.innerHTML = 'Must be a valid day';
    } else {
      dayError.innerHTML = '';
    }
}

function checkMonthInput(){

    month.classList.remove('error-input');

    const inputValue = month.value;

    if (inputValue > 12) {
      monthError.innerHTML = 'Must be a valid month';
    } else {
      monthError.innerHTML = '';
    }
}

function checkYearInput(){

    this.classList.remove('error-input');

    const inputValue = year.value;
    const currentYear = currentDate.getFullYear();

    if (inputValue > currentYear) {
      yearError.innerHTML = `Year can't be greater than ${currentYear}`;
    } else {
      yearError.innerHTML = '';
    }
}

function checkForEmptyInputs(date){
    return isNaN(date) 
}

function checkValidAndPastDate(day, month, year) {
    const inputDate = new Date(year, month - 1, day);

    if (inputDate.getFullYear() === year && inputDate.getMonth() === month - 1 && inputDate.getDate() === day) {
        console.log("Passed valid date");
        if (inputDate < currentDate) {
            return true;
        } else {
            dayError.innerHTML = 'The date must be in the past';
        }
    } else {
        dayError.innerHTML = 'Please enter a valid date';
        return false;
    }
}

function validateDateInput() {

    const dayValue = parseInt(day.value, 10);
    const monthValue = parseInt(month.value, 10);
    const yearValue = parseInt(year.value, 10);

    const emptyDay = checkForEmptyInputs(dayValue);
    const emptyMonth = checkForEmptyInputs(monthValue);
    const emptyYear = checkForEmptyInputs(yearValue);

    if(emptyDay){
        day.classList.toggle('error-input');
        dayError.innerHTML = 'This field is required';
    } 
    if(emptyMonth){
        month.classList.toggle('error-input');
        monthError.innerHTML = 'This field is required';
    } 
    if(emptyYear){
        year.classList.toggle('error-input');
        yearError.innerHTML = 'This field is required';
    } 

    // const validDate =  checkValidAndPastDate(dayValue, monthValue, yearValue);

    if (!emptyDay && !emptyMonth && !emptyYear && validDate){
        return true;
    }    
    return false;

}

function calculateAge(){

    const isDateValid =  validateDateInput();
    if (isDateValid) {
        
        
        const birthDate = new Date(year.value, month.value - 1, day.value);

        let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

        let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
        if (ageInMonths < 0) {
            ageInYears--;
            ageInMonths += 12;
        }

        let ageInDays = currentDate.getDate() - birthDate.getDate();

        if (ageInDays < 0) {
            const tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day.value);
            ageInMonths--;
            ageInDays = Math.floor((currentDate - tempDate) / (1000 * 60 * 60 * 24));
            if (ageInMonths < 0) {
                ageInYears--;
                ageInMonths += 12;
            }
        }
        
        // yearsTotal.innerHTML = ageInYears;
        // monthsTotal.innerHTML = ageInMonths;
        // daysTotal.innerHTML = ageInDays;
    }else {
        
        yearsTotal.firstChild.textContent = "**";
        yearsTotal.lastChild.textContent = "time";
        monthsTotal.textContent = "months";
        daysTotal.textContent = "days";
    }
}




