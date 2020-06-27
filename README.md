# Bookmark Manager Test App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.28.

## Development server

Use `npm i` to install dependencies. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Documentation

### Navigation

Build app locally or use prod [link](https://bookmarks-71b58.firebaseapp.com/)


App starts and redirects to ungrouped bookmarks page

![Alt text](./src/assets/screenshots/all.png "Ungrouped viewv")

Use menu in header for navigation

![Alt text](./src/assets/screenshots/work.png "Header navigation")

Hover on table row to access edit and delete controls

![Alt text](./src/assets/screenshots/hover.png "Hover options")

Click edit to see molad window with edit options

![Alt text](./src/assets/screenshots/edit.png "Edit bookmark")

Click delete to see delete modal and delete/cancel 

![Alt text](./src/assets/screenshots/delete.png "Delete bookmark")

Use plus button in header to get access to bookmark creation

![Alt text](./src/assets/screenshots/add.png "Add bookmark")

Enter valid name, url and make selection of group option to save new bookmark

![Alt text](./src/assets/screenshots/validation.png "Modal validation")

### Store

@ngrx/store-devtools installed for project

Install Chrome extention if needed 

[Redux Devtools for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

Open extension to debug state

![Alt text](./src/assets/screenshots/state.png "App State")

Do something to change app state and check actions

![Alt text](./src/assets/screenshots/actions.png "State actions")

### Firebase

All data stored and retrieved from firebase

![Alt text](./src/assets/screenshots/firebase.png "Firestore")

