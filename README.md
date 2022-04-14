This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Description
App has grid with virtual scroll for render big data json(my example with 30 000 entities).
Also possible to edit data from grid.


## Run project
#### `cd json-viewer`
#### `npm i`
#### `npm run start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Or view
https://makspob.github.io/json-viewer/

#### App based on clean architecture and has four layers, where each bottom layer has no access to the top one:
`-core`  
`-data-access`  
`-store`  
`-feature(view)`  
