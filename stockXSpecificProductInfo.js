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
  let urlKey = req.query.urlKey
  let productList = await stockX.fetchProductDetails(urlKey);
  res.send(productList)
})



const server = app.listen(3000, function() {console.log('api connected')});
