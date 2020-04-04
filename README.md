## Running the project

In the project directory, you can run:

### `npm install && npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project functionality

   - Registration form with input field validations
   - Trying to register without entering all the fields will result in showing an error message
   - Address input with implemented Google Places API autocomplete
   - After saving at least one user the users list will become available and visible
   - Users list will show all registered users. Pressing user's name will open a user card drawer.
   - User card is available for editing and updating. 
   - It is possible to delete a user card by pressing the red X in the user card.
   - It is possible to delete all users by pressing the red "Delete users" button below user's list.
   
## Project structure

   - Components folder for storing all re-usable components, e.g buttons, inputs, texts
   - Containers folder for storing all screens, containers, drawers, tables
   - Sass folder for storing the CSS styling files
   - State folder for all Redux state and related actions
   - Utils folder for required utilities such as app constants, validation functions, local storage functions
   
## Project tools

   - React
   - Redux
   - Local storage
   - Sass
   - Google Places API
