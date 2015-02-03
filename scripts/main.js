console.log('The Iron Yard Rocks');

var markLib = {

//example I pulled from previous homework	
	max: function (x,y){
	    if (x > y){
	        console.log(x, ' is the largest');
	    }
	    else if (y > x){
	        console.log(y, ' is the largest');
	    }
	    else {
	        console.log('numbers are the same')
	    }
	    //...
	},//end of max function


//simple loop
	loop: function(a){
		for(i = 0; i < a; i++){
			console.log('this loop has run ' + (i+1) + ' times.');
		}
	},



	
//Not working yet
	allNumbers: function(inputField)
	{
		var justNumbers = /^[0-9]+$/;
		console.log(justNumbers);
			if(inputField.value.match(justNumbers))
			{
				alert('You have entered all numbers');
				return true;
			}
			else
			{
				alert('Please enter numbers only');
				return false;
			}
	},

// input needs to be in string form.
	fieldNotEmpty: function(argument) {
			var inputText = "" + argument;
			console.log(inputText);
		if(inputText === ""){
			console.log(inputText);
			alert('Please do not leave field blank');
		}
	},
// takes to numbers and gives area of square
	areaOfSquare: function(height,width){
		var area = height * width;
		console.log('The area of that square is: ' + area);
	},

// takes height and base of triangle and returns area
	areaOfTriangle: function(height,base){
		var area = (height * base)/2;
		console.log('The area of that triangle is: ' + area);
	},

	//takes radius of a circle and returns area
	areaOfCircle: function(radius){
		var area = radius * radius * 3.14;
		console.log('The area of that circle is: ' + area);
	},

	//takes radius and height and returns area of a cylinder.  radius needs to be first argument
	areaOfCylinder: function(radius,height){
		var area = (2*3.14*radius*height) + (2*3.14*radius*radius);
		console.log('The area of that cylider is: ' + area);
	},

//takes radius and height and returns area of a cylinder.  radius needs to be first argument
	areaOfTrapezoid: function(baseA,baseB,height){
		var area = ((baseA+baseB)/2*height);
		console.log('The area of that trapezoid is: ' + area);
	},

	volumeOfCube: function(side){
		var volume = side*side*side;
		console.log('The volume of that cube is: ' + volume);
	},

	volumeOfSphere: function(radius){
		var volume = 4/3 * 3.14 *radius*radius*radius;
		console.log('The volume of that sphere is: ' + volume);
	},

	volumeOfCylinder: function(radius,height){
		var volume = 3.14 * radius * radius * height;
		console.log('The volume of that cylider is: ' + volume);
	},

	volumeOfCone: function(radius,height){
		var volume = 3.14 * radius * radius * height / 3;
		console.log('The volume of that cone is: ' + volume);
	},

	volumeOfPyramid: function(length,width,height){
		var volume = length * width * height / 3;
		console.log('The volume of that pyramid is: ' + volume);
	},






	
};//end of library