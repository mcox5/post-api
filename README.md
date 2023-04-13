# README

With this app you can see/create/delete posts.

The app was built with `Rails` for the backend (rails api) and `React` for frontend.

# Requirements
1. Install BEFORE run the app, install `Ruby 3.1.2` `Rails 7.0.4.3`, `React 7.0.5`, `yarn 1.22.19`, `Postgresql: 14.837`, it´s recommended to use the same versions

2. Install `axios` to make the API´s calls: `cd post-app` and then `npm install axios --save`

3. To update the state I use `immutability-helper` : `npm install immutability-helper --save`

4. Heroku CLI: You should install the Heroku command-line interface on your machine. You can download it from the official Heroku website. Follow the on-screen instructions to install the CLI on your machine.

5. Node.js and npm: Make sure that you have Node.js and npm installed on your machine. You can download them from the official Node.js website. Verify that they are correctly installed by running `node -v` and `npm -v` in your terminal.

6. Project dependencies: It is necessary that you have installed the project dependencies that are listed in the package.json file. To install the dependencies, run `npm install` in the root folder of your project.

7. Procfile: The command `heroku local -f Procfile.dev` refers to the Procfile.dev file. Make sure that this file exists in the root folder of your project and that it has the correct content.

# To run rails API server:

1. Install all the ruby gems with this command: `bundle install`
2. Reset the database and run the seed with: `rails db:reset`
3. Start the server: `rails s`

# To run the APP and the API server at the same time:

I use the `heroku local -f Procfile.dev` to run the APP and the API at the same time.
**BEFORE** run the app please have the items mentionated in the requirements installed.
