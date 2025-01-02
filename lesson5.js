use catalog
db.books.find({title:{$in:[/C#/,/Java/,/Python/]}})//1
db.books.find({isbn:{$nin:[/^19/,1884777384,/0/]}})//2
db.books.find({$nor:[{isbn:/^19/},{title:/momgo/},{pageCount:{$gt:600}}]})//3
db.books.find({status:{$not:{"PUBLISH"}}})//4
db.books.countDocuments({pageCount:{$mod:[10,0]}} )//5
db.books.find({thumbnailUrl:{$exist:false}})//7


