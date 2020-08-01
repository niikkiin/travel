
### Quick Start

* Navigate to `client` folder.
* Install dependencies by running `yarn` or `npm install`.
* Run `yarn start` or `npm run start` to start the local development server.

<br />

    <!-- "react-dnd": "^11.1.3",
    "react-dnd-html5-backend": "^11.1.3", -->

### Project Structure

- This project is bootstrapped using [Create React App](https://github.com/facebook/create-react-app).
- **Redux** is used for state management.
- All primary pages are located inside `src/pages`.
- Routing configurations can be found on `src/routes.js`
- Other extra styles specific to the libraries used are located inside `src/assets`.
- The `src/store` directory contains all the redux
- The `src/layouts` directory contains the layout structures
- The `src/sections` directory contains the components that builds up the main feed page
- The `src/data` directory contains the temporary data

<br />

### Styling

* Place new styles for a component inside its own folder on a component or a page and create a styled-component for it.
* All svg files and images should be placed on `src/assets` and to its corresponding category.


### Available Scripts

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

<br />

### Built using

- [styled-components](https://styled-components.com/) - for styling
- [Redux](https://redux.js.org/) - for state management
- [react-easy-crop](https://www.npmjs.com/package/react-easy-crop) - for image cropping
- [react-select](https://react-select.com/) - for input tags
