/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionsVar = document.querySelectorAll('section'); //I've used .querySelectorAll as It's not one section ..
const navFactor = document.getElementById('navbar__list'); //Storing my unordered list inside a global variable called navFactor

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
  function navBuilderFun () {  
     
     sectionsVar.forEach(el => {
    const navlistElement = `<li><a class='menu__link' data-link=${el.id}>${el.dataset.nav}</li>`
    navFactor.insertAdjacentHTML('beforeend', navlistElement)
  })
        

     }   
  

  navBuilderFun();   //Calling the navigation function  */


  // Scroll to anchor ID using scrollTO event
  function scrolling(){
  navFactor.addEventListener('click', e => {
    e.preventDefault();
    /** If invoked when the cancelable attribute value is true, 
     * and while executing a listener for the event with passive set to false, 
     * signals to the operation that caused event to be dispatched that it needs to be canceled. */

    const parent = e.target.hasAttribute('data-link') //Igot data-link attribute from html file
   ? e.target  //Returns the object to which event is dispatched (its target).
   : e.target.parentElement;
    const scrollToElement = document.getElementById(parent.dataset.link);
    scrollToElement.scrollIntoView({behavior: 'smooth'});
  })   
}
  scrolling();


// Add class 'active' to section when near top of viewport

function sizeAndPosition (section)  {
    return Math.floor(section.getBoundingClientRect().top); /* This function returns the size and the position 
    of the element */
    /* Math.floor : it's a method that Returns the greatest integer less than or equal to its numeric argument.*/
}

function sectionActivationAddition (condition , section) {  //This function is used to add active section
    if(condition===true){
     section.classList.add('your-active-class'); //I got (your-active-class) from HTML file.
     section.style.cssText = "background-color:pink;"; /*When you go to a specific section , its background 
      color converts to pink to distiguish it */
    }
 }
function sectionActivationRemove (section)  {  //This function is used to remove active section
    section.classList.remove('your-active-class');  //I got (your-active-class) from HTML file.
    section.style.cssText =  "background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    /* When you leave a specific section , its background color converts to its default color */
}



//implementing the functions
function activeSection() {
      sectionsVar.forEach(section => { //looping over all sections
          const element = sizeAndPosition(section); //gets offset of each section
          viewPort = () => element < 100 && element >= -100; //I've suggested any number 
          sectionActivationRemove(section);  //remove active section
          sectionActivationAddition(viewPort(),section); //add active section according to its offset
      });
}

window.addEventListener('scroll',activeSection);  //adding section activation when scroll event happens



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
