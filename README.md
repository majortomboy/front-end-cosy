# Cosy Cosplay Planner

## Introduction

Creating a cosplay is a detailed, lengthy process that requires cosplayers to keep track of many literal and figurative moving parts. From prop making to costume sewing to wig styling, organizing your time and materials is half the battle to making a great costume.

Cosy provides a centralized cosplay project management system, to help cosplayers keep track of their to do lists, budget, photos, and more and avoid the dreaded “con crunch” the night before a costume’s debut.

## Demo Video

<a style="float:right" href="https://drive.google.com/file/d/1jQ3G5AN37JsWgGrKIcUL6m9CBoBbylQ1/view?usp=sharing" target="_blank"><img alt="Demo Video" width="800" src="https://lh3.googleusercontent.com/VH7_G1fS4uks8t0DBx-u7XIP_JJNAckKtYS872zgK6hlUX9-BcLcA4rNQ-OO5Er0MJuRoebJ0Fkd0nlqC4RnNjEI-TRqo9Nk-HrKT8LXlOxEsLJXKVu1vY3QKw-Gw-vjnw-dqeiF62nc29u38e1Cruy0jWdKttIxsP9AdqGmrgUAR7mPoCjV57OhsQ7WH8aR78Jos1WPzvQ17Y-7G2peL4FlAi0I8zJznT-bAFiGkCXdAkMNKpx2o-EwAXWJD8vJDUJc7aat55Q5-u0iT5NyIF-E3qw8eZoCMWOkkmS0pmzmuHgaQI0PuPXvI-JY00g7oRltRNUW22GLGoWi-4WqfZe7gvPPAqVQ4VKJ3XgijyS566svc7b9t52sq5LU5AbE0NICthffd3W0TL3mTWLOaZCFKKXqXi2z-NaKTBpwisYm9L-nfBuuTujy50TUQloFriLlm9ooOrLxH3PbX6RO3Tt__up61NFGLFCgaHPvS1bv9cSnG_qnO4L-r482eT0cVS9YWGmguS0v1xyF3OAw0pVo7FlKehV67k5mLautiEr0RkIiB-a5Fm2Mhh1gGjOFNjXmtpVFg_Wxwr2xM32TXTm-d4Z1DphGllUeIIldXI_bYwR-flPJB-1Z3r1ezraulORxPtaeEM6V2cu4aL1irOmV6mcXIMD_W-oT0CpmYyRuHjjgQfDAT3bRcRqyRYcRfmzO0Pdvza6GA-YGuArV8g=w1308-h718-no?authuser=0" />
</a>

## Deployed App

You can find a deployed version of Cosy on Heroku [here](https://cosy-cosplay-planner.herokuapp.com/)

## Dependencies

Cosy relies on:

- Django
  - Django REST Framework
  - DRF Simple JWT
- PostgreSQL
- React.js
  - CreateReactApp
  - ReactStrap
- Bootstrap
  - Sass 
- AWS S3

## Environment Setup

1. Clone this repository

3. Install front-end dependencies with ```$ npm install```
   
3. Clone the [backend repository](https://github.com/majortomboy/back-end-cosy/) separately

5. Set up a virtual environment for the backend and activate the environment:

   ```
   $ python3 -m venv venv
   $ source venv/bin/activate
   ```
   
5. Install backend dependencies with ```$ pip install requirements.txt```
   
6. Add a ```.env``` file with ```$touch .env``` (make sure to add this to a ```.gitignore``` file)
   
7. To the ```.env``` file, add the following variables:

   *Note: You will need to have an AWS account in order to store and access photos*
   
   ```
    SECRET_KEY = <Django key provided upon project start>
    DEVELOPMENT_DATABASE_PASSWORD = <local Postgres database password>
    AWS_ACCESS_KEY_ID = <AWS access key ID>
    AWS_SECRET_ACCESS_KEY = <AWS secret access key>
    AWS_STORAGE_BUCKET_NAME = <AWS bucket name>
    AWS_S3_REGION_NAME = <AWS region name>
   ```
   
8. Run your backend server with ```$ python manage.py runserver```
   
9. Run your front end server with ```npm start```


Cosy is developed by [Ada Developers Academy](https://adadevelopersacademy.org/) Cohort 15 student Sidney DuPont as a capstone project.<br>
Cosy logo designed by [Ren Blakely](https://renblakely.com/)
