use bookStoreDB
use catalog
show dbs

db.createCollection('sites')
db.sites.insert({name="noa111",site_url="ddd",books_code=[],site_id=1})
db.sites.insert({name="tzipi1111",site_url="eee",books_code=[],site_id=2})

db.createCollection('books')
db.books.insert({name="noa",short_desc="aaa",img_url="a",book_url="b",isbn="1",price=4.3,categories=["a","b","c","d"],siteId=1,pages=3})
db.books.insert({name="yafi",short_desc="bbb",img_url="b",book_url="d",isbn="1",price=5,categories=["a","b","c","d"],siteId=2,pages=3})
db.books.insert({name="tzipi",short_desc="ccc",img_url="c",book_url="e",isbn="1",price=6,categories=["a","b","c","d"],siteId=1,pages=8})

show collections









