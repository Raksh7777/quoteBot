const axios = require('axios');
const options = {
    method:'GET',
    url:'https://quotes15.p.rapidapi.com/quotes/random/',
    headers: {
    'x-rapidapi-key': 'fd59c21a7bmsh1aa397eef5bb6c6p11b6c5jsn37d544f0dcae',
    'x-rapidapi-host': 'quotes15.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
	console.log(response.data.content);
}).catch(function (error) {
	console.error(error);
});
