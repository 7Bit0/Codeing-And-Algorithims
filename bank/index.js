

var loan = 1_500_000 // In Dollars
var interestRate = .005 // Per Month (For our exsample it is each minute)

/**
 * How much money the user is paying off their load
 * @param {number} ammount 
 */
function pay(ammount) {
    loan -= ammount
}

/**
 * applys interest to the load
 */
function applyIntrest() {
    loan += loan * interestRate
}

/**
 * The amount of money per payment
 * @param {number} ammount 
 */
function calcPayoffTime(ammount) {
    var inital = loan
    var payoff = 0
    var months = 0
    while (inital > 0) {
        if (inital == Infinity) return Infinity;
        months++;
        inital += inital * interestRate
        payoff += inital * interestRate
        inital -= ammount
    }
    return [months, payoff]
}

console.log(calcPayoffTime(100_000))