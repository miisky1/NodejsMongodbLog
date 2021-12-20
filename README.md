##商品管理系统功能
###就是可以实现用户的注册，登录（注册登录过程都对密码实施了加密），还有商品浏览，商品搜索，增加商品，删除商品，修改商品，实现商品浏览的分页，总之算是一个比较全面的商品管理系统

## 1）项目设计部分：

#### （1）项目总体构成；

​		该项目是运用本学期学到的nodejs+mongodb+express+ejs，参考https://github.com/shataniya/Commodity-management-system所完成的商品管理系统。用户可以通过登录本平台的商品列表界面对商品进行一系列的浏览与搜索，管理员可以通过登录本平台的商品管理界面对商品进行增删查改等操作。该商品管理系统可以完成用户的注册与登陆，包含商品列表、商品管理、商品增加等界面，为商品管理应用提供了一定的帮助。

#### （2）引入的包在项目中的作用相关说明；

  要开始使用本平台，请先引入相关包: 

  npm install express

  npm install ejs

  npm install fs

  npm install md5-node

  npm install multiparty

  npm install body-parser

  npm install mongodb

  npm install mongoose

  npm install express-session

  利用命令将相应文件包安装到您的路径中。

#### （3）项目目录结构和各个部分的说明。



## 2）使用说明书：

每个功能的使用方法。

## 3）开发日记（与commit对应）

2021/12/18：今天在一筹莫展中找到了https://github.com/shataniya/Commodity-management-system分享的系统，很开心。引入了相关包后，能够运行。进行了相关修改，能够连上自己的数据库了，登录注册(login,register success)都能完成。进行了相关优化后，能实现增删查改(add,edit,delete,search success)等功能。在这之后，我在products集合里导入了我自己的商品数据。令人头疼的是，关于翻页的功能(next,previous)一直无法实现。

2021/12/19：今天我优化了翻页的功能(next,previous success)使之能够正常的上下页跳动。但仍无法使“无数据就无法进入下一页“这一功能实现。可能超出了知识范畴，我就先跳过进行接下来的操作。将项目进行更改优化后，我发现查询功能只能在”/product“或者在”商品列表的第一页“使用，进行了相关查询与优化。仍然无法解决，很沮丧，可能也超出了知识范畴。决定先跳过，进行管理员与用户的区分操作。我添加了一个"isAdmin"数据库数据，用户在注册的时候默认是false。也能够传到数据库里。但，在区分的时候”isAdmin“传不过来。目前一些细碎的功能优化完成(youhua success)，仍需优化。

2021/12/20：