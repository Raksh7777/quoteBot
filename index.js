const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const axios = require('axios');
const http = require('http');
const port = 3000;
console.log(process.env.API_KEY);
const server=http.createServer((req,res)=>{
const options = {
    method:'GET',
    url:'https://quotes15.p.rapidapi.com/quotes/random/',
    headers: {
    'x-rapidapi-key': process.env.API_KEY,
    'x-rapidapi-host': 'quotes15.p.rapidapi.com'
    }
  };
 
  axios.request(options).then(function (response) {
    var quote=response.data.content;
    res.end(JSON.stringify({ quote})); 
	//console.log(response.data.content);
}).catch(function (error) {
	console.error(error);
});

})
server.listen(3000, () => {
  console.log(`Server running at port ${port}`)
})
