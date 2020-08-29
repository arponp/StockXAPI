const express = require('express')
const app = express()
const StockXAPI = require('stockx-api');
const stockX = new StockXAPI({
    currency: 'USD',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36'
});

app.get('/stockx/product',async (req,res) => {
  // let allProducts = []
  // console.log(req.query.keyword)
  // let urlKey = req.query.urlKey
  // let productList = await stockX.fetchProductDetails(urlKey);
  // res.send(productList)

  //mock data
  var mockList = {
    name: "Jordan 4 Retro Union Guava Ice",
    urlKey: "air-jordan-4-retro-union-guava-ice",
    thumbnail_url: "https://stockx.imgix.net/Air-Jordan-4-Retro-Union-Guava-Ice.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1596306060",
    pid: "DC9533-800",
    variants: []
  }
  for (var i=12; i<=15; i++) {
    var mockVariant = new Object()
    mockVariant.size = `${i}`
    mockVariant.uuid = "306fa326-767e-4bd6-a010-e78228cfe30d"
    mockVariant.market = {
      lowestAsk: 800,
      highestBid: 700
    }
    mockList.variants.push(mockVariant)
  }

  mockList = JSON.stringify(mockList)
  res.send(mockList)
})



const server = app.listen(3001, function() {console.log('api connected')});
