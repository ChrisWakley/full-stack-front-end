#full-stack-front-end

This Project links with my other repo "full-stack-back-end" to create a full stack project. The whole project links together to present a Single Page Application; a web based database that gives you a full breakdown of weaponry and armour statistics for the online game: Runescape 3.

The time window we were given for the full project during my Nology course was one week, I'm very happy with how much I got created and working in that time.

This project contains my React front end, it communicates with my back end API to pull data from a mySQL database in order to populate and display cards of weaponry and armour items in the game. Functional logic allows you to filter the items by material type as well as add and delete line entries in the database.

This project is ongoing and likely will be for the foreseeable future, as I have several other features planned that I wish to implement such as:

 - add media queries to allow for page responsiveness on various different screen sizes, currently its built to be visually displayed on a pc monitor only.
 - adding a call to edit currently existing data.
 - adding the full list of in game weapons and armours to the database - add each material tier to the filter functionality.
 - adding the functionality to be able to compare the same item from different material sets with the intention of giving someone a general idea of how much of a power boost each tier is from one material to the next.
 - long term goal of functionality allowing users to creat a weapon and armour loadout which gives the full sets effects and stat improvements when worn. This could be further enhanced by combining it with the previously mentioned compare function to give the ability to compare two full loadouts.

To run this project the following steps need to be taken:

 - Download and install VSCode.
 - Download and install IntelliJ.
 - Download and install mySQL.

 - clone the repo for both front and back ends into a full stack container folder, open the front end project in VSCode in order to see the front end code. open the        back end project in IntelliJ to see the API code.
 - populate a table called: stats in mySQL and import the rs3db.csv file to fill it. Ensure mySQL is running.
 - Run the back end from IntelliJ to utilise the API calls (the front end wont populate at all without this running)
 - run the following commands in VSCode: npm install, npm run start. This will launch the front end website in your local browser.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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
