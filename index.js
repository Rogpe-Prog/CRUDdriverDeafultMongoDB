const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'base-mongo'

MongoClient.connect(url, dbName, (err, client) => {
    const users = client.db(dbName).collection('users')
    
    //Create
        users.insertOne({
            username: 'ALISTER',
            password: '223311'
        }, (err, res) => {
            console.log(res.ops[0])
        })

    //Read
    users.find({}).toArray((err, result) => {
        console.log(result)
    })
    
    //Update
        users.update(
            {
                _id: mongodb.ObjectID('5df15913b5a824800cc075b9')
            }, {
                $set: {
                    username: 'fifth',
                    password: '615243'
                }
            }, (err, res) => {
                console.log(err)
            }
        )

    //Delete
    users.remove({
        _id: mongodb.ObjectID('5df158d40516837b5c9371b1')
    }, (err, res) => console.log(err))


    client.close()
})