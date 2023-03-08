/* STEP 1 - Select the element that will be clicked to show or hide the
    the navigation menu.  In this ccase it's the button element
*/

const btn = document.querySelector(".toggle-button");
/* Finds the 'toggle-button' class  */

/* STEP 2 - Add a click event to the button icon
 */

btn.addEventListener("click", function () {
  /* when the button is clicked, show the nav element by adding the CSS 
    class name 'show-nav' */
  document.querySelector("nav").classList.toggle("show-nav");
});

/* STEP 3 - Link to the JavaScript file in the HTML 
    IMPORTANT - The JavaScript file must be loaded LAST!!
*/
