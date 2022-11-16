
function checkIfIsEmail(text){

    //skal ikke inneholde mellomrom
    //teksten skal inneholde et punktum før @. Og et punktum etter.
    let containsAt = text.indexOf('@') >= 0;
    let containsNotSpace = text.indexOf(' ') < 0;

    
    let containsDotBeforeAt = false;
    let containsDotAfterAt = false;

    let indexOfAt =  text.indexOf('@');
    let substringAfterAt = text.substring(indexOfAt);
    if(text.indexOf('.')>=0 && text.indexOf('.') < indexOfAt) containsDotBeforeAt = true;
    if(substringAfterAt.indexOf('.') >=0) containsDotAfterAt = true;


    if(containsAt && containsNotSpace && containsDotBeforeAt && containsDotAfterAt) return true;
    else return false;

}