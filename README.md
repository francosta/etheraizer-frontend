# Overview

Etheraizer is a crowdfunding app that works on the Blockchain.
Users can create and present their projects for funding as well as support other projects on the platform.
All projects get a blockchain address, where the current balance as well as project owner (which are shown in the frontend) can be verified.
All support transactions can also be easily verified, both in the frontend and in the blockchain.

Users can pay and fund projects using the Ethereum blockchain and connecting their wallets through Metamask.

# Motivation

This app was built as the final project for the Flatiron School Software Engineering Bootcamp. I have built the entire application in two weeks.

# Server

The backend API was built using Ruby on Rails with a PostgreSQL database. This can be found in a different [GitHub repository](https://github.com/francosta/etheraizer-backend).

The blockchain-related backend is written in Javascript. 



# Client

The client-side of the application is built in vanilla Javascript. I have used a template for a dashboard by Creative Tim, which I have adapted (Material Dashboard - https://demos.creative-tim.com/material-dashboard/examples/dashboard.html).

I have added Bootstrap on top of the template. Many of the elements that support the single-page requirement of the app are taken from Bootstrap, e.g., modals for editing profile, adding applications or searching for jobs.

# Screenshots and Demo

[Video Demo](https://youtu.be/JUq8BWcoZJg)

![LoginPage](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.27.22.png)
Login Page

![Dashboard](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.27.31.png)
Dashboard

![UserProfile](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.27.59.png)
User Profile

![CoverLetterBank](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.28.28.png)
Cover Letter Bank

![JobFinder](https://github.com/francosta/job_application_tracker/blob/master/mod3_project-frontend/assets/img/Screenshots/Screenshot%202019-07-15%20at%2013.28.36.png)
Job Finder Tool

# Initialization

1. Clone and open the project in a code editor.
2. Go into the `mod3_project-backend` by running `cd mod3_project-backend`
3. Run `rails db:migrate` to create the database.
4. Run `rails db:seed` to create the seed data.
5. Go to the `mod3_project-frontend` directory.
6. Run `open index.html`
7. Login with the test user, using the following credentials: Email: "user@user.com"; Password: "password".
