## Modal-Form
This project consists of two very useful components namely a side navigation menu and modal form. When the user clicks on the sign up bottom a modal form (register form) will appear with a black see-through background. The sidebar nav menu will display when the user click on the menu icon in the top left corner.

The modal form checks on the client side that a valid username, email and a password were inserted. The input boxes will turn red with an error message if the user typed/submitted something that is not acceptable. The submit button has an eventlistener('click') that starts the function of the whole program with conditionals to make sure all input fields are correct/acceptable.

The username input gets checked by a function consisting of a piece of regex so that no numbers are present in the username. The email input also gets checked by a function consisting of a line of regex that checks for a valid email. I googled my issue of getting the correct regex to check for a valid username and email. The password input boxes must match otherwise an error message will show.
