# Build a Calculator with React

We're going to build a calculator in React based on the following image:

![calculator image](./ref/plan.png)

**Some goals for this build:**

- Keep the general layout of the above picture (if you want to add colors and styling or whatever later, go for it, but let's get the layout and some functionality first)
- All digit keys should type the corresponding key in the display area at the top of the calculator
- Decimal key should add a decimal to the current number
- +/- key should change the currently displayed number from positive to negative or from negative to positive
- The divide, multiply, add, and subtract keys should perform those calculations
- The equals button should give the answer to the current calculations
- The user should be able to string multiple calculations together (i.e. 2 x 2 x 2 = 8).
- The backspace button ("<-") should remove one character from the current number being displayed
- The clear button ("C") should clear the entire current calculation

# Tasks

## Task 1:
Get started: clone repository, get familiar with file structure, run "npm start", and test that the app as-is is rendering by navigating to localhost:3000 in your browser.

## Task 2:
Plan: Do you want to build using primarily functional or class components? What components do you need? (create files that you think you'll need) What components will be stateful and what do you think you need to store in state?

## Task 3:
Render buttons visually: Visually render the calculator buttons and create the area at the top where the current number will display. Think about how you want to group the buttons into "div" elements or even separate components in order to get them to appear in the proper order according to the plan image. 

- You can find the font from the plan image (DotGothic) on Google fonts [here](https://fonts.google.com/specimen/DotGothic16?preview.text_type=custom&preview.text=3#standard-styles).
- For the special symbols, you can choose to use special symbols in the DotGothic font, type in the DotGothic font (ex. Can use "<<" instead of the arrow symbol for backspace), or can get symbols from a source like Font Awesome [here](https://fontawesome.com/).

## Task 4:
Add functionality to numeral buttons: Add functionality so that when the numeral buttons are clicked, a variable in state is updated with the additional numeral, and the current number shows up in the display area. 

## Task 5:
Add additional functionality to non-numeral buttons: Add functionality so that the decimal button adds a decimal to the current number in state, the positive/negative button makes the number positive or negative, and the backspace button removes the most recent numeral/character. The number in the display area should display accordingly.

## Task 6:
Add functionality to the calculation buttons: Add functionality so that the calculation buttons add, subtract, divide, or display the result of the previous calculation accordingly. What methods do you need to add to make this happen? What variables do you need to add to state?

## Task 7:
Add remaining functionality: Check your calculation methods to make sure that the user can string together multiple calculations at once (ex. 2 * 2 * 2 = 8 or 2 + 2 + 2 = 6). When and where does it make sense to update state to make this work? In addition, add functionality to the "C" button so that it clears state and the displayed number.

## Task 8:
Styling: You might have done some basic styling already to keep things organized, but style your calculator to resemble the plan image as closely as possible. Don't worry too much about exact pixel length, etc., but try to keep the proportions visually similar and keep the layout the same. Once you've managed to replicate the plan pretty well, experiment with colors/fonts/styles if you want to improve your styling skills (extensions could include simple animations, onclick styles, using design principles to emphasize some buttons over others, etc.) 



# Below, see the built-in Create React App README for reference:
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
