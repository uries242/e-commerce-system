


## CHALLENGES

 setting up the project folders

ts configuration. missing key dev dependency
- solution: npm install -D tsx

2. returning the data in a UI - friendly 

3. syntax 

4. error handling


api services was updated to checks for "response.ok" before proceeding.  If the server returned an error status, it throws immediately.
It also uses a custom AppError with a status code to know what kind of error occurred. I also utilized  "instanceof" to distinguish between known errors (AppError) and unexpected ones.

## RESOURCES
https://www.w3schools.com/typescript/typescript_error_handling.php
error handling:
 - https://medium.com/@arreyetta/error-handling-in-typescript-best-practices-80cdfe6d06db
 - https://engineering.udacity.com/handling-errors-like-a-pro-in-typescript-d7a314ad4991             

