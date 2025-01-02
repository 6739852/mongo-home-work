//1
//mongoimport --db catalog --collection books --file catalog.books.json

//2
db.books.find()

//3
db.books.find({ISBN:'1933988797'})

//4
db.books.find({nameBook:/java/},{nameBook})

//5
db.books.find({status:'PUBLISH'},{nameBook,date,_id})

//6
db.books.find({amount:{$gt:100}},{nameBook,amount,ISBN})

//7
db.books.find({nameBook:/c#/})

//8
db.books.find({nameBook:/\a/})

//9
db.books.find({amount:[10-100]},{nameBook,amount})

//10
db.books.find({nameBook:/r/})

//11
db.books.find({nameBook:/data/},{nameBook})

//12
db.books.find({nameBook:/\e/},{_id,nameBook})

