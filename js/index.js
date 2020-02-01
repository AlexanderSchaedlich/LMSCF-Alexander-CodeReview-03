var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", calculateInsurance, false);
function calculateInsurance() {
	var name = document.getElementById("name").value;
	var country = document.getElementsByTagName("select")[0].value;
	var age = Number(document.getElementById("age").value);
	var horsePower = Number(document.getElementById("horsePower").value);
	var plus = 0;
	var result = (function calculateInsurancePerCountry(h, a, c) {
		if (name !== "" && a !== 0 && h !== 0) {
			switch (true) {
				case c === "Austria":
				h *= 100;
				plus = 50;
				break;
				case c === "Hungary":
				h *= 120;
				plus = 100;
				break;
				case c === "Greece":
				h *= 150;
				a += 3;
				plus = 50;
				break;
			}
			var insurance = Math.round(h / a + plus);
			var string = name + ", your insurance costs €" + insurance;
			return string;
		} 
		else {
			var string = "Please fill up all fields";
		}
		return string;
	}(horsePower, age, country));
	console.log(result)
	var message = document.getElementById("message");
	message.innerHTML = result;
	message.style.visibility = "visible";
	document.getElementById("name").value = "";
	document.getElementById("age").value = "";
	document.getElementById("horsePower").value = "";
}