// A function called "multiplication" that returns the product of the two input numbers.
        // [Unit Test]
  // Expect the function to retun the correct pruduct of the two mutiplied numbers.
  // Expect ( 2 * 3 ) TO BE a NUMBER.
  // Expect ( 2 * 3 ) to equal 6.
  // Expect ( E * 3 ) TO BE and ERROR.


// A function called "concatOdds" takes two arrays of integers as arguments. 
// It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
        // [Unit Test]     
  // Must enter two arrays using [] and within the array and , numbers need to separated by commas. 
    // - Example: ([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) should result in [-1, 1, 3, 9, 15]
  // Expect ONLY ODD numbers to return from the array. 
  // Expect ONLY NUMBERS in the array TO BE return.
    // - EXAMPLE: [E, 2, L], [9, one, one, one, 4, 15, A] returns [9, 15]
  // No limit to on how long and how many of the same numbers can be in the array.
  // If more than TWO arrays are entered, funtion will return product as ERROR.
    // - Example: ([3, 2, 1], [9, 1, 1, 1, 4, 15, -1], [3, 2, 1]) should result in ERROR.


// A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user.
//They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
      // [Functional Test]
  // App should display a Prompt that asks User to enter Login ID or continue as Guest.
    // - Option to enter Login ID should be available on Display Screen in the case the user accidentally selects Guest.
    // - If the User enters a Login ID, the App should be able let the User know if they have anyu Store Credit or PROMO Codes they could use for the Purchase.
  // App should display all Items in the Cart along with Item Price. 
  // If Cart is empty, App should alert user to put something in the cart before continuing further into the Checkout Proccess.
  // App should have the option to Remove Items.
  // App should have the option to enter a Valid PROMO code for any Discount.
    // - Only ONE PROMO code can be used for the purchase.
  // The App should display the Total Price Ammount along with Sale Tax.
  // When the User is ready to Checkout, the App should prompt the User for Payment Card Info to complete transaction.
    // - If User has sufficient funds, the App should notify the User that the Transaction was Successful and should the User the Delivery Info.
    // - If User has insufficient funds, the App should alert the User that the Transaction was Unsuccessful and Prompt the user to use a different Card.
