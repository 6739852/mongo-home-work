db.getCollection("books").find({})
//1
db.books.distinct('title').map(b => b.toUpperCase());

//2
db.books.distinct('categories').map(b => {
    let count = db.books.countDocuments({categories:b})
    return b+' : '+count
});

//4
db.books.aggregate([
    { $match: { status: 'PUBLISH' } },
    { $project: { status: 0 } },
    { $set: { is_published: true} }

])