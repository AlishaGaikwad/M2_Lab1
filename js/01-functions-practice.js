//STEP 1
function halfNumber(number) {
    var result = number / 2;
    console.log("Half of " + number + " is " + result + ".");
    return result;
}
//STEP 2

function squareNumber(number) {
    var result = number ** 2;
    console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;

}
//STEP 3
function percentOf(num1, num2) {
    var result = (num1 / num2) * 100;
    console.log(result + " is percentage of " + num1 + " of " + num2);
    return result;
}
//STEP 4
function findModulus(n1, n2) {
    var result = n1 % n2;
    console.log(result + " is modulus of " + n1 + " and " + n2);
    return result;
}

halfNumber(2);
squareNumber(3);
percentOf(5, 6);
findModulus(4, 10);
