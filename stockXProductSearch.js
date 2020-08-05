const express = require('express')
const app = express()
const StockXAPI = require('stockx-api');
const stockX = new StockXAPI({
    currency: 'USD',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36'
});



app.get('/stockx/search', async (req,res) => {
  console.log("Keywords: " + req.query.keyword)
  // let allProducts = []
  // console.log(req.query.keyword)
  let productList = await stockX.newSearchProducts(req.query.keyword);
  res.send(productList)
})

const server = app.listen(3000, function() {console.log('api connected')});
