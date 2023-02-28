const ucFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : str


const checkSpam = (str) => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')


const truncate = (str, maxlength) => str.length > maxlength ? `${str.slice(0, maxlength - 1)}…` : str


const extractCurrencyValue = (str) => +str.slice(1)