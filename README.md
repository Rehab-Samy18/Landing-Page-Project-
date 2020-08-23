Here's my README of my landing page project .....

1) First of all , I've added two more sections to css file (section 4 , section 5)

2)Then, I've built the navigation funcion which is called (navBuilderFun) and here are the steps i've thought of :
   - I've defined an empty string to store every new section title inside it.
   - I've looped over all sections and added every section link to this empty string.
   - The code details and comments are in JS file.
So , When clicking an item from the navigation menu, the link scrolls to the appropriate section.

3)Then, To build section activation function , it was necessary to built two functions ..
They are (sectionActivationAddition) and (sectionAcivationRemove) ..
-I've used     element.classList.(add/remove)('your-active-class') , and I got (your-active-class) from HTML file ..
-I've also added a style to the section when it's active or not active from this method (section.style.cssText())
-When you go to a specific section , its background color converts to pink to distiguish it .
-When you leave a specific section , its background color converts to its default color.

4)Then,I've defined an important function that returns the size and the position of the element which is called (sizeAndPosition) .. 
-And the last step , I've implemented the section activation function using the last three functions 
and i've used (addEventListener) method that adds section activation when scroll event happens

5)After editing : I've added function (scrolling) that Scrolls to anchor ID using scrollTO event
I've used three famous function :
-addEventListener('click',.....) , which means when we click on the navigation menu , there is something has to happen
-e.preventDefault : which means If it's invoked when the cancelable attribute value is true, 
     * and while executing a listener for the event with passive set to false, 
     * signals to the operation that caused event to be dispatched that it needs to be canceled. 
-scrollIntoView: which scrolls to the appropriate section.

