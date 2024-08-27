function formatIndianCurrency(amount) {
    // Convert amount to string and remove any non-digit characters
    const str = amount.toString().replace(/[^0-9]/g, '');
  
    // Check if the string is empty after removing non-digits
    if (!str) return '';
  
    // Use regular expression to format the number
    // This regex splits the string into two parts: the last three digits and the rest
    // Then, it adds commas to the remaining part in groups of two digits
    const formatted = str.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  
    // Add comma for the last three digits if not already present
    return formatted.replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1,');
  }

  function convertIntoInteger(amount){
    const number = parseInt(amount.replace(/,/g, ''), 10);
    return number ;
    // console.log(number)
  }