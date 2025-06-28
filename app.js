// 1. Find the 'app' div from our HTML shell
const appContainer = document.getElementById('app');

// 2. Create the content you want to display using JavaScript
// For example, let's create a heading and a paragraph
const heading = document.createElement('h1');
heading.textContent = 'Welcome to My New Dynamic Page!';

const paragraph = document.createElement('p');
paragraph.textContent = 'This content was generated entirely by JavaScript, not static HTML.';

// 3. Clear the container (optional, but good practice) and add the new elements
appContainer.innerHTML = ''; // Clears any existing content
appContainer.appendChild(heading);
appContainer.appendChild(paragraph);

// You can build much more complex structures, handle user events, fetch data, etc.