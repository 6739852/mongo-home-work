books.use
//1
db.books.updateMany({pageCount: 50},{$set:{title: "1,2,3,4 to java programmming", status: PUBLISH}},{upsert:true})
//2
db.books.updateMany({title:/^b/i},{$unset:{publishedDate:true}})
//3
db.books.update({status:PUBLISH, publishedDate:null},{$currentDate:{updateDate:true}})
//4
db.books.updateMany({},{ $set: { price: { $literal: Math.floor(Math.random() * 91) + 10 } } })
//5
db.books.updateMany({category:/Java/i},{$mul:{price:1.1}})
//6
db.books.updateMany({title:/C#/},{$inc:{pageCount:-20 },$set:{lastModified:27/11/2024}})
//7
db.books.updateMany({$max:{pageCount:0}},{$set:{pageCount:0, lastModifiedPages:27/11/2024}})
//8
db.books.updateMany({},{$rename:{lastModifiedPages:'lastModified'}})
//9
db.books.updateMany({},{$min:{pageCount:1000}})
//10
db.books.updateMany({authors:[]},{$unset:{ authors:""}})
