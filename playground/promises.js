var asyncAdd = (a,b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a=== 'number' && typeof b=== 'number'){
				resolve(a+b);
			}else{
				reject('Arguments must be numbers');
			}
		},1500);
	});
};

asyncAdd(34,26).then((res)=>{
	console.log('Result:', res);
	return asyncAdd(res,13);
}).then((res )=>{
	console.log('Result should be 95:', res);
}).catch((errorMessage)=>{
	console.log('Error:',errorMessage);
});

// var somePromise = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		resolve('Hey. It worked');
// 		reject('Unable to fullfill promise');
// 	},2500);
	
// });

// somePromise.then((message)=>{
// 	console.log('Success:',message);
// },(errorMessage)=>{
// 	console.log('Error: ', errorMessage);
// });