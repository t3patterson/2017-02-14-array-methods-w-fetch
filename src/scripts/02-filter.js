import $ from 'jquery'

//--------------------------------------------------------------------------
//TASK : Use the .filter method to return an array from the dataset
//       with all the female users from Great Britain (nat: 'GB')  
//--------------------------------------------------------------------------
$.getJSON('https://randomuser.me/api?results=100').then(function(){
	console.log("============ .filter() - TASK 1 =============")

})



//--------------------------------------------------------------------------
//TASK : Use the .filter method to return all the users older than 35
//       and registered after 2010
//--------------------------------------------------------------------------
$.getJSON('https://randomuser.me/api?results=100').then(function(){
	console.log("============ .filter() - TASK 2 =============")

})
