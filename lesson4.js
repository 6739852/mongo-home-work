//ause catalog

db.books.find({title:/a/i},{title:1,_id:0})
db.books.find().sort({title:1})
db.books.find().sort({title:-1})
db.books.countDocuments({title:/^J/i})
db.books.find().sort({pageCount:-1}).limit(5)
db.books.find({categories:{$exists:false}})
db.books.find({shortDescription:{$exists:true}})
db.books.countDocuments({_id:{$type:"objectId"}} )
