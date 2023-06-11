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

function validateDte(day, month, year) {
    const validMonthDay = new Date(year, month -1, day);
    if (validMonthDay.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day){
        if('date is past'){
            return true;
        }
    }else{
        dayError.innerHTML = 'must be a valid date';
        return false;
    }
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

    const validMonthDay =  validateDte(dayValue, monthValue, yearValue);

    if (!emptyDay && !emptyMonth && !emptyYear && validMonthDay && yearBeforeCurrent){
        return true;
    }    
    return false;

}

function getAge(){
    const isDateValid =  validateDate();
    if (isDateValid) {

        const birthDate = new Date(year.value, month.value - 1, day.value);
        console.log(currentDate.getFullYear());
        console.log(birthDate.getFullYear());
        
        let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

        let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
        if (ageInMonths < 0) {
            ageInYears--;
            ageInMonths += 12;
        }

        let ageInDays = currentDate.getDate() - day.value;
        if (ageInDays < 0) {
            const tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day.value);
            ageInMonths--;
            ageInDays = Math.floor((currentDate - tempDate) / (1000 * 60 * 60 * 24));
        if (ageInMonths < 0) {
            ageInYears--;
            ageInMonths += 12;
        }
        }
        
        yearsTotal.innerHTML = ageInYears;
        monthsTotal.innerHTML = ageInMonths;
        daysTotal.innerHTML = ageInDays;
    }else {
        yearsTotal.innerHTML = "-- years";
        monthsTotal.innerHTML = "-- months";
        daysTotal.innerHTML = "-- days";
    }
}




