import $ from 'jquery'


//--------------------------------------------------------------------------
//TASK : Use the .map method to return an array of usernames from the dataset
//       (located inside the login: property)
//--------------------------------------------------------------------------
$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .map() - TASK 1 =============")
	//you write the code here
	let usersArray = serverRes.results
	let userNamesList = usersArray.map(function(userObj, index, theUserArr){
		//you do this
		return userObj.login.username
	})

	console.log(userNamesList)
})



//--------------------------------------------------------------------------
//TASK : Use the .map method to return an array of objects from the dataset 
//       that contain only the full name, nationality and email.
//       => [{fullName: '...', nationality: '...' email: '...' }, ... ]
//--------------------------------------------------------------------------


$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .map() - TASK 2 =============")
	//you write the code here
	let usersArray = serverRes.results
	let relevantInfoArray = usersArray.map(function(userObj){
		let miniUserObj = {
			fullName: `${userObj.name.first} ${userObj.name.last}`,
			nationality: userObj.nat,
			email: userObj.email
		}
		
		return miniUserObj

	})
	
	console.log(relevantInfoArray)
})


