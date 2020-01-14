
// Below Function Executes On Form Submit
function ValidationEvent() {
// Storing Field Values In Variables
var fname = document.getElementById("firstname").value;
var mname = document.getElementById("middlename").value;
var lname = document.getElementById("lastname").value;
var email = document.getElementById("semail").value;
var contact = document.getElementById("mobileno").value;
// Regular Expression For Email
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
// Conditions
if (fname != '' && email != '' && contact != ''&&mname!='' &&lname!='')
	{
if (email.match(emailReg))
	{
if (contact.length == 10)
	{
alert("All type of validation has done on OnSubmit event.");

return true;
} 
else {
alert("The Contact No. must be at least 10 digit long!");
return false;
}

} 
else {
	
alert("Invalid Email Address...!!!");
return false;
}

} 

else {
	
alert("All fields are required.....!");
return false;
}
}