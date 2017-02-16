import $ from 'jquery'

//--------------------------------------------------------------------------
//TASK : Use the .filter method to return an array from the dataset
//       with all the female users from Great Britain (nat: 'GB')  
//--------------------------------------------------------------------------
$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .filter() - TASK 1 =============")
	let usersArray = serverRes.results
	let filteredUsersArray = usersArray.filter( function(userObj){
		if(  userObj.gender == 'female' && userObj.nat === 'GB' ){
			return true
		} 
	})
	
	console.log(filteredUsersArray)
	
})



//--------------------------------------------------------------------------
//TASK : Use the .filter method to return all the users older than 35
//       and registered since 2010 Jan 1
//--------------------------------------------------------------------------
$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .filter() - TASK 2 =============")
	let usersArray = serverRes.results
	let olderUsersNewRegistrantsList = usersArray.filter(function(userObj){
		let nowDateObj = new Date()
		
		// User Age Calc
		let userDateOfBirthObj = new Date(userObj.dob)
		let userAgeInMs = nowDateObj.getTime() - userDateOfBirthObj.getTime()
		let userAgeInYrs = userAgeInMs/(1000 * 60 * 60 * 24 * 365)
		
		//User Registration Calc
		let userRegistrationDateObj = new Date(userObj.registered)
		let registrationThresholdDateObj = new Date(2010, 0, 1)

		let userRegistrationDateVal = userRegistrationDateObj.getTime()
		let registrationThresholdTimeVal = registrationThresholdDateObj.getTime()

		if( userAgeInYrs > 35 && userRegistrationDateVal > registrationThresholdTimeVal  ){
			return true
		}
		
	})
	console.log(olderUsersNewRegistrantsList)
})
