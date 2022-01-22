// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(arr) {
    //containers to hold arrays temporarily
    let tempArr = [];
    let tempArr2 = [];
    let isValid = true;
    //iterate through the array and push check digits to temp container 
    for (let i = arr.length - 2; i >= 0; i -= 2) {
        tempArr.push(arr[i]);
    }
    //iterate through the array and push other digits to temp container 
    for (let i = arr.length - 1; i >= 0; i -= 2) {
        tempArr2.push(arr[i]);

    }
    //performs the other Luhn operations
    for (let j = 0; j < tempArr.length; j++) {
        let tempj = tempArr[j] * 2;
        if (tempj > 9) {
            tempj = tempj - 9;
        }
        else {
            tempj;
        }
        tempArr2.push(tempj);
    }
    // returns sum of all digiits
    let sum = tempArr2.reduce(function (a, b) {
        return a + b;
    })
    //checks if sum mod 10 returns 0 
    if (sum % 10 == 0) {
        return isValid;
    }
    else {
        return !isValid;
    }
}

function findInvalidCards(nestedArray) {
    //containers to hold arrays 
    let invalidcards = [];
    let validcards = [];
    //looping through the nested array
    for (let i = 0; i <= nestedArray.length - 1; i++) {
        //segregates valid from invalid cards
        if (validateCred(nestedArray[i]) === false) {
            invalidcards.unshift(nestedArray[i]);
        }
        else {
            validcards.unshift(nestedArray[i]);
        }
    }
    return invalidcards;
}

function idInvalivCardCompanies(nestedInvalid) {
    //container for final array of companies
    let companies = [];
    //loops through nested array and push elemts to companies if they dont already exist
    for (let i = 0; i < nestedInvalid.length - 1; i++) {
        switch (nestedInvalid[i][0]) {
            case 3:
                if (!companies.includes('Amex (American Express)')) {
                    companies.push('Amex (American Express)')
                }
                break;
            case 4:
                if (!companies.includes('Visa')) {
                    companies.push('Visa')
                }
                break;
            case 5:
                if (!companies.includes('Mastercard')) {
                    companies.push('Mastercard')
                }
                break;
            case 6:
                if (!companies.includes('Discover')) {
                    companies.push('Discover')
                }
                break;
            default:
                if (!companies.includes('Company not found')) {
                    companies.push('Company not found')
                }
                break;
        }
    }
    return companies;
}



