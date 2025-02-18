function calculateVAT(price){
    if(typeof price !== "number" || price < 0){
        return "invalid"
    }
    const productVat = price*7.5 / 100;
    return productVat;
}



function validContact(contact){
    if(typeof contact !== "string"){
        return "invalid";
    }
    let valid = true;
    if(contact.length !== 11){
        valid = false;
        return valid;
    }
    if(contact[0] !== "0" || contact[1] !== "1"){
        valid = false;
        return valid;
    }
    for(num of contact){
        if(num < "0" || num > "9" || num === " "){
            valid = false;
            return valid;
        }
    }
    return valid;
}





function willSuccess(marks){
    if(!Array.isArray(marks)){
        return "invalid"
    }
    let result = true;
    let passMarks = [];
    let failMarks = [];
    for(const num of marks){
        if(typeof num !== "number"){
            return "only number is allowed."
        }
    }
    for(const mark of marks){
        if(mark >= 50){
            passMarks.push(mark);
        }
        else{
            failMarks.push(marks);
        }
    }
    if(passMarks.length > failMarks.length){
        return result;
    }
    else{
        result = false;
        return result;
    }
    
}




function validProposal (person1 , person2){
    if(typeof person1 !== "object" || typeof person2 !== "object"){
        return "invalid";
    }
    let result = true;
    if(person1.gender === person2.gender){
        result = false;
        return result;
    }
    const ageDifference = Math.abs(person1.age - person2.age);
    if(ageDifference >= 7){
        result = false;
        return result;
    }
    return result;
}





function calculateSleepTime(times){
    let totalSleepTime = 0;
    for(const time of times){
        totalSleepTime = totalSleepTime+ time;
        if(typeof time !== "number"){
            return "invalid"
        }
    }
    const hour = totalSleepTime / 3600;
    const hourNumber = parseInt(hour);
    const remainingSeconds = totalSleepTime % 3600;
    const remainingMinute = remainingSeconds / 60;
    const minuteNumber = parseInt(remainingMinute);
    const second = remainingSeconds % 60;
    return "hour: " + hourNumber + ", minute: " + minuteNumber + ", second: "+ second;
}
