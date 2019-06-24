## Instructions
The goal is to build a small app to search musical artists from this GraphQL API endpoint https://graphbrainz.herokuapp.com.
To achieve this I used several libraries
<ul>
    <li>apollo-boost</li>
    <li>graphql</li>
    <li>lodash</li>
    <li>react-apollo</li>
    <li>react-burger-menu</li>
    <li>react-redux</li>
    <li>react-toasts</li>
    <li>redux</li>
</ul>

I created a 
<ul>
    <li><b>Home page</b>: Here you can search the artists and click in any of them in order to sse more details about the artists or the album. For this I used a form with the two functions onChange() and onSubmit and i sent the search value to the query in order to get the results if exists. Then, I created a map with the results in order to print every each of them.
    </li>
    <li><b>Artist details page</b>: Here you can see the details of the artists, a small list of the releases and the most important you can add this artist to your favorites. For this I got the 'mbid' from the home page for the specific artist and I did a new query in order to get the artist details and the releases. Also, I used redux in order to add/remove the artist to/from my favorites sidebar and local storage in case we refresh the page to keep save the favorites.</li>
    <li><b>Album details page</b>: Here you can see the details of the Album. For this I got the 'mbid' from the home page for the specific artist and I did a new query in order to get the album details</li>
    <li><b>Sidebar</b>: In this page you can see all the favorites if exists and also you can see this sidebar in every page and also you remove the favorite from every page.</li>
</ul>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
