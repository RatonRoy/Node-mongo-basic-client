/*******
 * 1. First create a object which you want to insert to the database.
 * ----------------------------------------------------
 * 1.1. create a user object like this const user = { name, email };
 * 
 * ---------------------------------------
 * 2. Using the fetch method for send the data to the server side 
 *------------------------------------------------------
 * 2.1. fetch('insert a url which is related to the back end server post path ' give a comma, add an object have different properties and values respectively method, headers, body {
	  method: 'POST', 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
  })
  here user is the object that you want to insert
  Method name is for insert is POST 
  ---------------------------------
  * 3. convert the data into json formate and send to sever side 
 ------------------------------------------------------------
 * 3.1  .then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
			})
	
	-------------------------------------------------
	4. The full code given below 
	---------------------------------------------------
	// make a user object here.
		const user = { name, email };
		// For post method 
		fetch('http://localhost:5000/user', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
			})
 * ******** */