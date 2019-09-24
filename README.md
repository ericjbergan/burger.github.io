Eat-Da-Burger!

This is a full stack app that allows the user to add a sandwich to the database, 'devour' said sandwich, and then delete it.

It utilizes node express, handlbars, and MySQL along with the usual suspects: HTML, JS, and CSS. It uses an ORM to store the MySQL queries.

Unfortunately, on Heroku when the item is read from the db it isn't being tagged with it's id, so it can't be 'devoured' or deleted. Since it works fine on the local and you can save to the db on Heroku, I'm at a loss as to why the rest of it doens't work as well.

https://eat-da-burger-ejb.herokuapp.com