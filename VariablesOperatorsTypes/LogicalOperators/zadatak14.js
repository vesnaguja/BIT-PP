/*ZADATAK 14: If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
●	Is age negative value
●	Is age greater than 120 */

      var age = 34;

      if (age <= 0) {
        console.log(false);
      } else {
        console.log('Age isn\'t negative value.')
      }

      if (age >= 120) {
        console.log(false);
      } else {
        console.log('Age isn\'t greater than 120.')
      }