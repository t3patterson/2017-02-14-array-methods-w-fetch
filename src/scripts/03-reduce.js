import $ from 'jquery'

function reduce(arr, cb, starterVal){
	var reducedVal = starterVal
	for(var i = 0 ; i < arr.length; i++){
		reducedVal = cb(reducedVal, arr[i], i, arr)
	}
	return reducedVal
}

//--------------------------------------------------------------------------
//TASK : Use the .reduce method to return the longest password length    
//--------------------------------------------------------------------------
$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .reduce() - TASK 1 =============")
	
	let usersArray = serverRes.results 
	let maxPwLength = usersArray.reduce(function(prevLengthVal, currVal, i, arr){ 
		// console.log(prevVal)
		let userPwLength = currVal.login.password.length
		if(userPwLength > prevLengthVal ){
			return userPwLength
		} else {
			return prevLengthVal
		}
 	}, 0)
	
	console.log(maxPwLength)
	
	//you write the code here
})


//--------------------------------------------------------------------------
//TASK : Use the .reduce method to return an object that has a count of all
//       the nationalities.    

//      => {
//         US: 17,
//         DE: 11,
//         GB: 10,
//         IR: 4   
//      }
//--------------------------------------------------------------------------

$.getJSON('https://randomuser.me/api?results=100').then(function(serverRes){
	console.log("============ .reduce() - TASK 2 =============")
	
	let usersArray = serverRes.results

	let nationalityCountObj = usersArray.reduce( function(prevObjValue, currElement, i, arr){
		
		if( typeof prevObjValue[currElement.nat] === 'undefined' ){
			prevObjValue[currElement.nat] = 1
		} else {
			prevObjValue[currElement.nat] = prevObjValue[currElement.nat]  + 1
		}
		
		return prevObjValue

	} , {} )
	
	console.log(nationalityCountObj)
	//you write the code here
})
