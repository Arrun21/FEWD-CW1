# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
Clone the git repository or download a zip file\
Then in visual studio code on the terminal enter
### `npm install`

To install all the neccessary files\
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Changes to design

After discussion with lecturer about the development plan I have to decided to make the following changes to my web app:\
-I decided to display recipes,menus and shopping list on a single page instead of using routes as I wanted to display shopping list on the side of the page so the user would always be able to check what ingredients to buy\
-I decided to remove images from my design as I decided to include description instead for each recipe which was added to my data structure\
-I also decided to update my data structure to include ratings and reviews\
-For each recipe I decided to add it to an accordion like how I designed the menu and shopping list\
-For shopping list instead of a checkbox for each ingredient, I grouped the ingredients per recipe allowing the user to remove the ingredients per recipe

## List of features that have been implemented
-Search bar is able to search for certain recipes\
-Clicking on each recipe will display the nutritional information\
-Buttons to create menu and shoppinglist\
-Buttons to delete certain menus and shoppinglist\
-The checkbox is able to filter by ingredients\
-For the checkbox I decided to make it into a toggle switch\
-For review I decided to add a textbox which allows users to add in text\
-Ratings and review are displayed each time a user adds in a new rating and review\
-Added in average rating that displays the average rating depending on the users rating for that specific recipe

## Link to a live version of the app
https://powerful-crag-58053.herokuapp.com/
