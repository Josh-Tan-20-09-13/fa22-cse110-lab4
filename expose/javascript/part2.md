1. Line 12 will print out `3` which is the variable `i` which will be the length of the array of prices. This prints successfully because `i` is defined as a `var`.
2. Line 13 will print out `150` which is the last element of the price array's discounted price which would be "150". This works because the `discountedPrice` variable is defined as a `var` so it is accessible.
3. Line 14 will print out `150` which is the final price of the last element in the price array which is "150". This works because `finalPrice` is defined as a `var` and is accessible by the print.
4. The function will return the array `[50, 100, 150]` because the local variable `discounted` gets pushed each one the the initial values with the mathematical operations performed upon it.
5. Line 12 will error because the variable `i` is defined using `let` and is in another block so it is unaccessible from the print statement.
6. Line 13 will error because the `discountedPrice` variable is defined with the `let` word and is in another block so is unaccessible from the print statement.
7. Line 14 will print `150` since the `discounted` uses `let` to define itself and in the same code block as the print statement.
8. The function will return `[50, 100, 150]` because even though the variables were defined with `let` rather than `var`, the change in variable scope did not change the result of the code. No varariables in the code were referenced outside their scope.
9. Line 11 will error because the variable `i` is defined with the keyword `let` and is in a different codeblock from the print statement. Thus, it is not accessible and an error occurs.
10. Line 12 will return `3` which is the length of the passed array. The variable `length` is a constant initialized to `prices.length` and this is valid. An error would only occur when reassigning a constant.
11. This function will return the array `[50, 100, 150]` since it works as intended and the changing of some variables to constants does not change anything. The reason why the `discounted` array is able to have items pushed to it is because even though it is a constant, it is only a constant reference to an array.
12. Answers for 12 below:
  - A. `student['name']`
  - B. `student['Grad Year']`
  - C. `student['greeting']()`
  - D. `student['Favorite Teacher']['name']`
  - E. `student['courseLoad'][0]`
13. Answers for 13 below:
  - A. `32` because this takes the string '3' and concatenates the string representation of 2.
  - B. `1` because this takes the string '3' and converts it to a number and subtracts 2.
  - C. `3` because the number 3 is added with null for nothing.
  - D. `3null` because the string '3' is concatenated with null which is interpreted as a string.
  - E. `4` because true maps to 1 so it evaluates to 1 + 3
  - F. `0` because false and null are both 0 so the result is 0
  - G. `3undefined` because the string 3 is concatenated with undefined which is interpreted as a string
  - H. `NaN` because the string 3 substracted by not a number is not a number.
14. Answers for 14 below:
  - A. `true` because the numerical value of the string '2' is greater than 1
  - B. `false` is false because '2' would come after '12' lexicographically since a string comparison is being done
  - C. `true` because 2 and the numerical value of the string '2' are equal
  - D. `false` because 2 is a number and '2' is a string and the types are not the same
  - E. `false` because true is a boolean and 2 is a number and the types are not the same
  - F. `true` because true is a boolean and 2 is typecasted to a boolean so it works
15. the `==` operator simply checks for inequality without typechecking whereas the `===` is stricter and not only checks for the value being the same but also the type.
16. Refer to part2-question16.js
17. The function will return the array `[2, 4, 6]` because the `modifyArray()` function will iterate through the provided array and perform an operation specified by a function with a single argument to each element. In this case, it is the function `doSomething` which returns the inputted number multiplied by 2. Thus, each element is multipled by 2 to get the result.
18. Refer to part2-question18.js
19. The code abovce will output `1` then `4` then `3` then `2`
