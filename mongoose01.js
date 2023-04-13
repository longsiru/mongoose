//1.npm init --yes   —生成package.json的配置文件
//2.安装mongoose -- npm install mongoose --save
//3.引用mongoose
const mongoose = require("mongoose");

//4.和数据库建立连接。
mongoose
  .connect("mongodb://127.0.0.1:27017/sayo", { useNewUrlParser: true })
  .then(() => console.log("chenggong"))
  .catch((err) => console.log(err));

//5.操作users表--定义一个schema, schema里面的对象和数据库表里面的字段需要一一对应
var UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number,
});

//6.定义数据库模型，操作数据库，--model里面的第一个参数 要注意：1.首字母大写， 2.要和数据库（表）的名称一一对应。//这个模型会和模型名称相同的附属的数据库（表）建立连接。 User=users
var User = mongoose.model("User", UserSchema);

//7.查询users表的数据
User.find({})
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));

// //8。增加数据
// var u = new User({
//   //实例化模型 传入增加的数据
//   name: "lisi2222333",
//   age: 20,
//   status: true,
// });
// u.save();

// //9.修改数据
// //第一个参数是条件，第二个参数是要跟新的数据。第三个是执行回掉函数
// User.updateOne({ name: "lisi2222" }, { name: "哈哈哈" }, function (err, res) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("成功");
// });

// //10.删除数据
// User.deleteOne({ _id: "5b72ada84e284f0acc8d318a" }, function (err) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   // deleted at most one tank document
//   console.log("成功");
// });

// //11.保存成功查找
// var u = new User({
//   name: "lisi2222333",
//   age: 20,
//   status: true, //类型转换
// });
// u.save(function (err, docs) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   //console.log(docs);
//   User.find({}, function (err, docs) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(docs);
//   });
// });
