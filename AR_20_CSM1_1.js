	let gpa = document.querySelector(".gpa");
	let gpa_result= document.querySelector(".gpa_result");
	let percentageDisplay = document.querySelector(".Percentage");
	function result(){
		gpa_result.style.display = "block";
				
	//subjects values or points 
		let e = document.getElementById("english").value*3;
		let m = document.getElementById("maths").value*3;
		let p = document.getElementById("physics").value*3;
		let pl = document.getElementById("physics-lab").value*4.5;
		let c = document.getElementById("chemistry").value*3;
		let cl = document.getElementById("chemistry-lab").value*1.5;
		let t = document.getElementById("telugu").value*1.5;

				
	//final calculations 
		let sum = e+m+p+pl+c+cl+t;
		let g = sum/19.5; 
		let percentage=(g-0.75)*10;
	//result 
		gpa.innerHTML = g;
		percentageDisplay.innerHTML = percentage;
	}