var customerName = 'bob'

function name() {
    return customerName
}

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
}

function setBestCustomer() {
   bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Griffin'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
}