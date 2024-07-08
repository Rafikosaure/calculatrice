
module.exports.calculatrice = (operator, nb1, nb2) => {
    switch (operator) {
        case "/":
            if (nb1 == 0 || nb2 == 0) {
                return null
            } else {
                return Math.round(100 * (nb1 / nb2)) / 100
            }
        case "+":
            return Math.round(100 * (nb1 + nb2)) / 100
        case "-":
            return Math.round(100 * (nb1 - nb2)) / 100
        case "x":
            return Math.round(100 * (nb1 * nb2)) / 100
        default:
           return null
    }
}