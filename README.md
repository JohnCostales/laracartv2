# Laravel React Shopping Cart
This is a shopping cart application made using Laravel. It is 2 of 2 applications developed for a comparison study in web design architecture. This is a Single-Page Web application developed using Laravel framework and MySQL as the database.

## Getting Started
Clone or zip the repository on to a folder you wish.

Clone on your selected folder by entering the following on the command line:

```
git clone https://github.com/JohnCostales/LaraReactCart.git
```

Rename the .env.example file to .env

### Package Manager
Install [Composer](https://getcomposer.org/download/ "Composer download").

### Local Database
The database is MySQL and to run this you first need to install [XAMPP](https://www.apachefriends.org/index.html "XAMPP download").

Then once set up is completed you need to turn on MySQL and Apache in XAMPP.

Next you need to open localhost/phpmyadmin on your browser and create a new database on the menu on the left hand side and call it shoppingcart.

Finally, you need to import the shoppingcart.sql file in to the database that comes with this.

### Prerequisites

Open your command line in the laracart folder.

```
cd laracart
```

### Installing

Once you have the folder open in your command line you need to go through the following:

Step 1: 
Generate keys.
```
php artisan key:generate
```

Step 2:
Populate the database.

```
php artisan migrate:refresh --seed
```

Step 3:
Install NPM package manager

```
npm init
``` 

Step 4:
Run the server.

```
php artisan serve
```

The application should run through port 8000. Open localhost:8000 in your browser.

## Using the website

To view the adminstration panel go to localhost:8000/admin
The username would be: admin@test.com
Password is: secret

## Built With

* [Laravel](https://laravel.com/docs/5.7) - The web framework used
* [Composer](https://getcomposer.org/) - Dependency Management
* [Bootstrap](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Authors

**John Costales** - *Initial work* - [JohnCostales](https://github.com/JohnCostales)
