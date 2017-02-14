import $ from 'jquery'

//--------------------------------------------------------------------------
//TASK : Use the .map method to return an array of usernames from the dataset
//       (located inside the login: property)
//--------------------------------------------------------------------------
$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .map() - TASK 1 =============")

	//you write the code here
})



//--------------------------------------------------------------------------
//TASK : Use the .map method to return an array of objects from the dataset 
//       that contain only the full name, nationality and email.
//       => [{fullName: '...', nationality: '...' email: '...' }, ... ]
//--------------------------------------------------------------------------


$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .map() - TASK 2 =============")
	//you write the code here
})