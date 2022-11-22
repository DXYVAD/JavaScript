let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete";
delete user.name; 
alert(`User.name is ${user.name}`);
alert(`User.surname is ${user.surname}`);