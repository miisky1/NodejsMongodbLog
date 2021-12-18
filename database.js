const MongoClient = require("mongodb").MongoClient
const mongoose = require("mongoose")

const DBurl = 'mongodb://172.21.2.236:27017'

MongoClient.connect(DBurl,{ useNewUrlParser:true },function(error,db){
    if(error){
        console.log(error)
    }else{
        let userdemo = db.db('190110910139').collection('user')
        console.log(userdemo.find().toArray(function(error,result){
            if(error){
                console.log(error)
            }else{
                console.log(result)
            }
        }))
    }
})

// mongoose.connect(DBurl,{ useNewUrlParser:true })
// mongoose.connection.once('open',function(){
//     console.log("数据库连接诶成功")
// })

// const userSchema = mongoose.Schema({
//     name:String,
//     password:Number
// })

// const userModel = mongoose.model('user',userSchema)

// userModel.find({},function(error,data){
//     if(!error){
//         console.log("数据获取成功")
//         console.log(data)
//     }
// })