use catalog
db.books.find({title:{$in:[/C#/,/Java/,/Python/]}})//1
db.books.find({isbn:{$nin:[/^19/,1884777384,/0/]}})//2
db.books.find({$nor:[{isbn:/^19/},{title:/momgo/},{pageCount:{$gt:600}}]})//3
db.books.find({status:{$not:{$eq:"PUBLISH"}}})//4 // $eq =
db.books.countDocuments({pageCount:{$mod:[10,0]}} )//5
db.books.find({categories:{$exists:false}} )//6
db.books.find({thumbnailUrl:{$exists:false}})//7
db.books.find({authors:"Matthew E. Hodges"},{title:1,longDescription:1})//8
db.books.find({authors:/a/i},{authors:1,title:1,longDescription:1})//9
db.books.find({categories:['XML','Internet']},{categories:1,longDescription:1})//10
db.books.find({categories:{$all:['XML','Internet']}},{categories:1,longDescription:1})//11
db.books.countDocuments({authors:{$all:[""]} } )//12
db.books.countDocuments({authors:"" } )//12
db.books.countDocuments({"authors.2":"" } )//13
db.books.countDocuments({_id:{$type:7}})//14
db.books.find()


