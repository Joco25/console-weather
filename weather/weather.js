const request = require('request'); 

var getWeather = (lat, lng, callback)=>{
		
		request({
		url: `https://api.darksky.net/forecast/5ed629d8b04ec7e873d05013279dd1e6/${lat},${lng}`,
		json: true
	},(error, response, body)=>{
		
		if(error){
			callback('Unable to connect to forcast.io servers');
		}else if(!error && response.statusCode=== 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
		else{
			callback('Unable to fetch weather');
		}
		
	});
};



module.exports = {
	getWeather
}