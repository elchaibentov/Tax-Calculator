//Elchai Bentov
//Here we define the tax brackets and the percentages of the reduction
	var step = [];
	step[1]=74640;
	step[2]=32388;
	step[3]=64788;
	step[4]=66948;
	step[5]=258108;
	step[6]=143064;
	var rate = [];
	rate[1]=0.1;
	rate[2]=0.14;
	rate[3]=0.2;
	rate[4]=0.31;
	rate[5]=0.35;
	rate[6]=0.47;
	rate[7]=0.5;
	//bonus point
	var BP=2580;
//--------------------------------------------------------------------------------------------	
var radioState = false;
function test(element){
    if(radioState == false) {
		check();
        radioState = true;
    }
	else
	{
		uncheck();
        radioState = false;
    }
}
//--------------------------------------------------------------------------------------------	
function check() {
    document.getElementById("radioBtn").checked = true;
	unreveal();
}
//--------------------------------------------------------------------------------------------	
function uncheck() {
    document.getElementById("radioBtn").checked = false;
	toReveal();
}
//--------------------------------------------------------------------------------------------	
function unreveal()
	{
		$("document").ready(function() {
			$("#rmv").css("display", "none");
		});
}
//--------------------------------------------------------------------------------------------	
function toReveal	()
{
	$("document").ready(function() {
		$("#rmv").css("display", "block");
	});		
}
//--------------------------------------------------------------------------------------------	
function calculate(element){
	if(document.getElementById("radioBtn").checked == true)
	{
		totalTax(parseInt(document.getElementById("BS").value)*12);
	}
	else 
	{
		var arr = document.getElementsByName('M');
		var tot=0;
		for(var i=0;i<arr.length;i++){
			$("document").ready(function() {
				if(($.isNumeric(arr[i].value)&&parseInt(arr[i].value)>-1))
				{
					tot += parseInt(arr[i].value);
				}
				else if (arr[i].value!="")
				{
					alert("Data must be real and positive number1");
				}
			});
		}
		totalTax(tot);
	}
}
//--------------------------------------------------------------------------------------------	
function totalTax(tot)
{
	tax=0;
	var i=1;
	while(tot>0)
	{
		if(i==7)
		{
			tax+=0.5*tot;
			tot=0;
		}
		if (tot<step[i]&&tot>0)
		{
			tax=tax+tot*rate[i];
			tot-=step[i];
		}
		else if(tot>0)
		{
			tax=tax+step[i]*rate[i];
			tot-=step[i];

		}
		i++;
	}
	var bp = $("#BP").val();
	if(bp==''||$.isNumeric($("#BP").val())&&bp>-1)
	{
		tax=tax- bp*BP;
	}
	else
	{
		alert("Data must be real and positive number1");
	}
	if(tax<0||isNaN(tax))
	{
		tax=0;
	}
	document.getElementById('total').innerHTML ="Total Tax is: ";
	var text = document.createTextNode(tax);
	var paragraph = document.getElementById("total");
	paragraph.appendChild(text);
	document.getElementById('total').style.visibility='visible';
}
//--------------------------------------------------------------------------------------------	
var loadPage = function() {
    document.getElementById("cmdCalc").addEventListener("calculate", clickListener, false);
};

