//1.npm init --yes   —生成package.json的配置文件
//2.安装mongoose -- npm install mongoose --save
//3.引用mongoose
const mongoose = require("mongoose");

//4.和数据库建立连接。
mongoose.connect("mongodb://127.0.0.1:27017/admin");

//5.操作users表--定义一个schema, schema里面的对象和数据库表里面的字段需要一一对应
var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number,
});

//6.定义数据库模型，操作数据库，--model里面的第一个参数 要注意：1.首字母大写， 2.要和数据库（表）的名称一一对应。//这个模型会和模型名称相同的附属的数据库（表）建立连接。 User=users
var User = mongoose.model("User", UserSchema);

//7.查询users表的数据
User.find({}, function (err, docs) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(docs);
});
