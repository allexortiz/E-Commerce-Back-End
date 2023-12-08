## E-Commerce-Back-End

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Links](#links)
- [Credits](#credits)
- [Questions](#questions)

## Description
This E-Commerce backend provides API routes for standard CRUD operations on various data groups. The following operations can be performed using these routes:
- Create a category, product, or tag
- View a category, product, or tag
- Update a category, product, or tag
- Delete a category, product, or tag

## Technologies
1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Node.js](https://nodejs.org/en/about/)
3. [Express.js](https://www.npmjs.com/package/express)
4. [MySQL2](https://www.npmjs.com/package/mysql2)
5. [Sequelize](https://www.npmjs.com/package/sequelize)
6. [dotenv](https://www.npmjs.com/package/dotenv)
7. [Insomnia](https://www.npmjs.com/package/insomnia)
 
## **Installation**
Start with cloning this repo on your local machine:
```sh
$ git clone https://github.com/allexortiz/E-Commerce-Back-End.git
$ cd e-commerce-backend
```
To install and set up the application, open the terminal in the db folder and run:
```sh
$ mysql -uroot -p
type in your password
$ source schema.sql
$ exit
$ cd ..
$ npm i
$ node seeds/index.js
$ npm start
```
You will need an .env file to connect to your database in order to connect to your MySQL database. Here's an example:
file: .env
```
DB_NAME='library_db'
DB_PASSWORD='[enter your mysql password here]'
DB_USER='root'
```

## Links
- [GitHub Repository](https://github.com/allexortiz/E-Commerce-Back-End)
- [Demo Video](https://drive.google.com/file/d/1R6UqceBCcpRo9HMUcJLe7UerwRzDkDq2/view)
---
## Credits
- Tutor - Dennis Itua
- Friend - Samuel Joy
---
## Questions
If you have any addition questions feel free to reach me at either my github or email address.
- [GitHub](https://github.com/allexortiz)
- [Email](allex.ortiz@outlook.com)