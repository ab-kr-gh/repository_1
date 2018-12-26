var istopper

var marksObtained = window.prompt('Please enter the marks obtained')

if (marksObtained==undefined || marksObtained==null || marksObtained==''){
	alert('Invalid Input')
}
else if(marksObtained<0 || marksObtained>100){
alert('Please enter value between 0 to 100')
}
else{
	marksObtained=Number(marksObtained)
	var totalMarks=100
	var percentageOfMarksObtained=(marksObtained/totalMarks)*100
	if (percentageOfMarksObtained>90)
	{
		istopper=true
	}
	else{
		istopper=false
	}
	alert(istopper)
}