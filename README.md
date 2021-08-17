# Cosy Cosplay Planner

## Introduction

Creating a cosplay is a detailed, lengthy process that requires cosplayers to keep track of many literal and figurative moving parts. From prop making to costume sewing to wig styling, organizing your time and materials is half the battle to making a great costume.

Cosy provides a centralized cosplay project management system, to help cosplayers keep track of their to do lists, budget, photos, and more and avoid the dreaded “con crunch” the night before a costume’s debut.

## Demo

<a style="float:right" href="https://drive.google.com/file/d/1jQ3G5AN37JsWgGrKIcUL6m9CBoBbylQ1/view?usp=sharing" target="_blank">
  <img alt="Cosy Demo Video" width="800" src="https://drive.google.com/file/d/1McOTvAC5-BTG1co5Bcx00U6nIDaxd5LP/view?usp=sharing" />
</a>

## Dependencies

Cosy relies on:

- Django
  - Django REST Framework
  - DRF Simple JWT
- PostgreSQL
- React.js
  - ReactStrap
  - CreateReactApp
- Bootstrap
- AWS S3

## Environment Setup

1. Clone this repository
2. Install front-end dependencies:
   ```
   $ npm install
   ```
3. Clone the [backend repository](https://github.com/majortomboy/back-end-cosy/) separately
4. Install backend dependencies:
   ```
   $ pip install requirements.txt
   ```
5. Add a ```.env``` file and add this to a ```.gitignore``` file
   ```
   $ touch .env
   ```
6. To the ```.env``` file, add the following variables:
   ```
    SECRET_KEY = <Django key provided upon project start>
    DEVELOPMENT_DATABASE_PASSWORD = <local Postgres database password>
    AWS_ACCESS_KEY_ID = <AWS access key ID>
    AWS_SECRET_ACCESS_KEY = <AWS secret access key>
    AWS_STORAGE_BUCKET_NAME = <AWS bucket name>
    AWS_S3_REGION_NAME = <AWS region name>
   ```


Cosy is developed by [Ada Developers Academy](https://adadevelopersacademy.org/) Cohort 15 student Sidney DuPont as a capstone project.<br>
Cosy logo designed by [Ren Blakely](https://renblakely.com/)
