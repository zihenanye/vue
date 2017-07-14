require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})
var apiRoutes=express.Router();
var searchList = require("../src/mock/search.json");
var navList = require("../src/mock/nav.json");  //首页导航
var dataList = require("../src/mock/data.json"); //推荐页
var listList = require("../src/mock/list.json"); //推荐页大家都在买
var typeList = require("../src/mock/type.json"); //分类页 分类
var brandList = require("../src/mock/brand.json"); //分类页 品牌
var classPage = require("../src/mock/classPage.json"); //居家列表
var jujiaImg = require("../src/mock/jujiaImg.json"); //居家banner
var meizhuang = require("../src/mock/meizhuang.json"); //美妆
var gehu = require("../src/mock/gehu.json");//个户
var gehuImg = require("../src/mock/gehuImg.json");//个户
var xiangbao = require("../src/mock/xiangbao.json");//箱包
var xiangbaoImg = require("../src/mock/xiangbaoImg.json");//箱包
var jiadian = require("../src/mock/jiadian.json");//家电
var chufang = require("../src/mock/chufang.json");//厨房
var chufangImg = require("../src/mock/chufangImg.json");//厨房
var peishi = require("../src/mock/peishi.json");//配饰
var peishiImg = require("../src/mock/peishiImg.json");//配饰
var lingshi = require("../src/mock/lingshi.json");//零食
var lingshiImg = require("../src/mock/lingshiImg.json");//零食
var muying = require("../src/mock/muying.json");//母婴
var muyingImg = require("../src/mock/muyingImg.json");//母婴
var jiaju = require("../src/mock/jiaju.json");//家具
var jiajuImg = require("../src/mock/jiajuImg.json");//家具
var shop = require("../src/mock/shop.json");//购物车
var foot = require("../src/mock/foot.json");//足迹

// 使用api的方法来创建连接时的请求
apiRoutes.get('/footList',function (req,res) {
  res.json(foot);
})
apiRoutes.get('/searchList',function (req,res) {
  res.json(searchList);
})
apiRoutes.get('/navList',function (req,res) {
  res.json(navList);
})
apiRoutes.get('/dataList',function (req,res) {
  res.json(dataList);
})
apiRoutes.get('/listList',function (req,res) {
  res.json(listList);
})
apiRoutes.get('/typeList',function (req,res) {
  res.json(typeList);
})
apiRoutes.get('/brandList',function (req,res) {
  res.json(brandList);
})
apiRoutes.get('/classPage3',function (req,res) {
  res.json(classPage);
})
apiRoutes.get('/jujia3',function (req,res) {
  res.json(jujiaImg);
})

apiRoutes.get('/classPage13',function (req,res) {
  res.json(meizhuang);
})

apiRoutes.get('/classPage12',function (req,res) {
  res.json(gehu);
})
apiRoutes.get('/jujia12',function (req,res) {
  res.json(gehuImg);
})

apiRoutes.get('/classPage8',function (req,res) {
  res.json(xiangbao);
})
apiRoutes.get('/jujia8',function (req,res) {
  res.json(xiangbaoImg);
})

apiRoutes.get('/classPage9',function (req,res) {
  res.json(jiadian);
})

apiRoutes.get('/classPage4',function (req,res) {
  res.json(chufang);
})
apiRoutes.get('/jujia4',function (req,res) {
  res.json(chufangImg);
})

apiRoutes.get('/classPage11',function (req,res) {
  res.json(peishi);
})
apiRoutes.get('/jujia11',function (req,res) {
  res.json(peishiImg);
})

apiRoutes.get('/classPage14',function (req,res) {
  res.json(lingshi);
})
apiRoutes.get('/jujia14',function (req,res) {
  res.json(lingshiImg);
})

apiRoutes.get('/classPage7',function (req,res) {
  res.json(muying);
})
apiRoutes.get('/jujia7',function (req,res) {
  res.json(muyingImg);
})

apiRoutes.get('/classPage5',function (req,res) {
  res.json(jiaju);
})
apiRoutes.get('/jujia5',function (req,res) {
  res.json(jiajuImg);
})

apiRoutes.get('/shopList',function (req,res) {
  res.json(shop);
})
// 调用api 
app.use('/api',apiRoutes)

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
