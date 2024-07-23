function numberCheck(number){
    let result=""
    if(number>0) result="positive"
    if(number<0) result="negative"
    if(number=0) result ="zero"
    else result="not a number" 
    return result;
}

const a=numberCheck(25)
console.log(a)

function voteEligibilty(age){
    if(age>18) return "eligible for voting"
    else return "not eligible for voting"
}

const age=voteEligibilty(20)
console.log(age)

function dayOfWeek(day){
     let dayName=""
    switch(day){
        case 0:
            dayName="Sunday";
            break;
        case 1:
            dayName="Monday";
            break;
        case 2 :
            dayName="Tuesday";
            break;
        case 3 :
            dayName="Wednesday";
            break;
        case 4 :
            dayName="Thursday";
            break;
        case 5 :
            dayName="Friday";
            break;
        case 6 :
            dayName="Saturday"
            break;
        default:
            dayName="enter a valid day number"
            break;                    

    }

    return dayName;
}

const b= dayOfWeek(4)
console.log(b)

function gradeChecker(marks) {
    let grade = "";
    switch (true) {
        case (marks > 90):
            grade = "A1";
            break;
        case (marks > 80 && marks <= 90):
            grade = "A2";
            break;
        case (marks > 70 && marks <= 80):
            grade = "B1";
            break;
        case (marks > 60 && marks <= 70):
            grade = "B2";
            break;
        case (marks > 50 && marks <= 60):
            grade = "C1";
            break;
        case (marks > 40 && marks <= 50):
            grade = "C2";
            break;
        case (marks > 30 && marks <= 40):
            grade = "D";
            break;
        default:
            grade = "failed";
            break;
    }

    return grade;
}

const c= gradeChecker(56)
console.log(c)


function isYear(year){
    if((year % 400 == 0) ||
    (year % 100 != 0) && 
    (year % 4 == 0)){
        return "is leap year"}

    else {
        return "not a leap year"
    }
}

console.log(isYear(2024))