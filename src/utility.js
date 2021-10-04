export const isEqual = (string1, string2) => (string1.valueOf() == string2.valueOf())

export const isFormFilled = (fieldArray) => {
    for (var i = 0; i<fieldArray.length; i++ ){
        if (fieldArray[i].valueOf() == ""){
            return false;
        }
    }
    return true;
}