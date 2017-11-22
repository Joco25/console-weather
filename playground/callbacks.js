var getUser = (id, callback)=>{
	var user = {
		id: id,
		name: 'Lance'
	};
	setTimeout(()=>{
		callback(user);	
	}, 3000);
};

getUser(24, (user)=>{
	console.log(user);
});