
db.getCollection("books").find({})
//1
db.books.update(
    {pageCount:1234},
    {$set:{title:'1,2,3,4 to Java programing',status:'PUBLISH'}},
    {upsert:true}
)
//2
db.books.updateMany({title:/^b/i},{$unset:{publishedDate:true}})
//3
db.books.update({status:'PUBLISH',publishedDate:{$exists:false}},{$currentDate:{publishedDate:true}})
//4
db.books.updateMany({},{$set:{price:Math.random()*190+10}})
//5
db.books.updateMany({categories:{$all:[/java/i]}},{$mul:{price:1.1}})
//6
db.books.updateMany({title:/c#/i},{$inc:{pageCount:390},$currentDate:{lastModified:true}})
//7
db.books.updateMany({},{$max:{pageCount:0},$currentDate:{lastModifiedPages:true}})
//8
db.books.updateMany({},{$rename:{lastModifiedPages:'lastModified'}})
//9
db.books.updateMany({},{$min:{pageCount:1000}})
//10
db.books.updateMany({$or:[{categories:null},{categories:{$size:0}}]},{$unset:{categories:true}})
db.books.updateMany({$or:[{authors:null},{authors:{$size:0}}]},{$unset:{authors:true}})
