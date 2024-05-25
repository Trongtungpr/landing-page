# Landing Page Project

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

How to Use
Scroll to Section:
As you scroll the page, the current section will be marked with the "active" class in the navigation menu.
Navigation through Menu:
In the navigation menu, you can click on the links to navigate to the corresponding sections.
When you click on a link, the page will scroll to the corresponding section, and that section will be marked as "active" in the navigation menu.
Code Explanation
First, we retrieve all sections and the navigation menu from the DOM.
Next, we write a function isInViewport() to check if a section is in the viewport.
Then, we write functions to remove the "active" class from all sections and check the current section and add the "active" class to it.
We attach a scroll event listener to check and mark the current section.
Finally, we create navigation buttons in the navigation menu and attach a click event to scroll to the corresponding section when a button is clicked.