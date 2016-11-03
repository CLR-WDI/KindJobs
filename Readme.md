# KindJobs

## Introduction

This fullstack app serves as a portal that aims to make it easier to match people who want to work social good organisations (SGOs) with the relevant SGO.

## API calls

All the api calls are made to routes starting with "kindjobs/api/"

## Deployment

Because we are running an Express server, we suggest that the app be deployed on a Heroku server (aka dyno). This would make the handover and initial maintenance easier. No special skills are required. Only two changes would be needed:

 1. Link the dyno to the relevant MLabs resource for the Mongoose database.
 2. Change the Heroku account to a paid account. Currently, the dyno hosting the app is on a free account. The amount of time that the dyno can run is limited. Also, the size of the database is also limited. For a start, we recommend getting the cheapest possible tier of paid Heroku.

In the future, when there is a need to scale, then it might be worthwhile considering to migrate to AWS. Should that happen, a person who is familiar with AWS devops would be needed to properly deploy and maintain the server.
