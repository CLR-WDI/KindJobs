# KindJobs

## Introduction

This fullstack app serves as a portal that aims to make it easier to match people who want to work social good organisations (SGOs) with the relevant SGO.

The website is currently found at :
The git repo for the site is :

## Tech Stack

The technologies used:
Back-end
 * Node
 * Mongoose - database
 * Express - backend server
 * Webpack - transpiler / task runner
 * Passport - authentication

Front-end
 * React with Redux - front end framework
 * SCSS - styling

## Installation

STEP BY STEP instructions for getting it up and running.

### Cloning from git to local

Clone the [kindjobs repo](https://github.com/CLR-WDI/KindJobs) on to local by following these steps:
  * On command line type in

   ```
   git clone git@githb.com:CLR-WDI/KindJobs.git
   ```

  * After cloning, install the dependencies by typing

   ```
   npm i
   ```

  * To run on local, type

   ```
   npm start
   ```

   This will transpile the FrontEnd JavaScript files into the min.js file. This file is automatically generated by webpack so feel free to delete the file if there are conflicts on merging with other branches from other collaborators. Just remember to recompile it using npm start before pushing to heroku.

### Linking local to Heroku

In the command line in the application root folder that you are linking to Heroku, type in this command:

```
git remote add heroku git@heroku.com:kindjobs.git
```

Once that is done, you can deploy any changes to Heroku by pushing to Heroku.

### Transferring ownership of Heroku

To change the ownership of the Heroku account, follow these steps:
 * Initiating the transfer:
  - In the dashboard click the Settings tab of the application.
  - Scroll down to the “Transfer Ownership” section.
  - Click the “Select a new owner” field. The list of people who are collaborators on the app and the list of organizations to which you belong will be displayed.
  - If you don’t see the person you want to transfer the app to, then you must first add them as a collaborator. If you can’t see the organization that you want to transfer the app to, then you must ask the org admin to add you to the org.
  - Select the account from the list.
  - Click “Transfer”.

* Accept the transfer
  The new owner can receive the transfer by accepting the pending transfer request at the top of the dashboard, once it’s initiated.

  As the new owner, you will have the option to accept or decline all transfer requests. If the app has an ongoing cost, such as paid add-ons or dynos, then you will be asked to enter in a credit card before accepting, if you haven’t done so already.

* Cancel transfer
  The owner can cancel the transfer request at any time before the new owner accepts or declines the request.

## Deployment considerations

Because we are running an Express server, we suggest that the app be deployed on a Heroku server (aka dyno). This would make the handover and initial maintenance easier. No special skills are required. Only two changes would be needed:

 1. Link the dyno to the relevant MLabs resource for the Mongoose database.
 2. Change the Heroku account to a paid account. Currently, the dyno hosting the app is on a free account. The amount of time that the dyno can run is limited. Also, the size of the database is also limited. For a start, we recommend getting the cheapest possible tier of paid Heroku.

In the future, when there is a need to scale, then it might be worthwhile considering to migrate to AWS. Should that happen, a person who is familiar with AWS dev-ops would be needed to properly deploy and maintain the server.

## API calls

All the api calls are made to routes starting with "kindjobs/api/"
External api calls are currently limited to authentication

## Next steps

### New functionalities

 * For SGOs:
  - Dashboard to manage applications funneled by admins to visual the value add by kindjobs

 * For admins:
  - Ability to shortlist and KIV applications

 * For jobseekers:
  - Email user to authenticat signup
  - email user to reset password
  - Save applications
  - Customisable profile pictures
  - Ability to bookmark and hide job postings
  - Receive notifications about relevant job postings
  - Allow admin/AI to recommend jobs to users
  - Loader widget to let user know that things are loading

### Improve content

 * The content on the site is purely fictitious, the database requires clean up before deployment.

 * Acronyms should be defined when used.

 * The "About" page needs to be done.

### Operations and testing
* Implement unit and integration testing for site
* Test Driven Development for future production
* Optimize code for performance
* Improve load times (& potentially add more dynos on Heroku to improve performance)
