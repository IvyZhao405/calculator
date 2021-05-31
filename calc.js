function init(){
	var num=document.getElementById("num");
	num.value=0;
	num.disabled="disabled";
	// var n1=document.getElementById("n1");
	// n1.onclick=function(){
	// 	alert("123");
	// }
	var oButton=document.getElementsByTagName("input");
	var btn_num1;
	var sign;
	for (var i = 0; i < oButton.length; i++) {
		oButton[i].onclick=function(){
			if(isNumber(this.value)){
				if(isNull(num.value)){
					num.value=this.value;
				}else{
					num.value+=this.value;
				}
			}else{
				var btn_num=this.value;
				switch(btn_num){
					case "+":
						btn_num1=enterOperation();
						sign="+";
						break;
					case "-":
						btn_num1=enterOperation();
						sign="-";
						break;
					case "*":
						btn_num1=enterOperation();
						sign="*";
						break;
					case "/":
						btn_num1=enterOperation();
						sign="/"
						break;
					case ".":
						num.value=dec_number(num.value);
						break;
					case "←":
						num.value=back(num.value);
						break;
					case "C":
						num.value="0";
						break;
					case "+/-":
						num.value=convertSign(num.value);
						break;
					case "=":
					    switch(sign){
					    	case "+":
						    	num.value=btn_num1+Number(num.value);
								//console.log(tbn_num1);
								break;
							case "-":
								num.value=btn_num1-Number(num.value);
								break;
							case "*":
								num.value=btn_num1*Number(num.value);
								break;
							case "/":
								if(Number(num.value)==0){
									num.value=0;
								}else{
									num.value=btn_num1/Number(num.value);

								}
								break;
					    }
					break;
				}
			}
		}
	}
}
/* +/- */

function convertSign(n){
	// if(n.indexOf("-")==-1){
	// 	n="-"+n;
	// }else{
	// 	n=n.substring(1,n.length);
	// }
	n=Number(n)*-1
	return n;
}

/* <- back */
function back(n){
	n=n.substr(0,n.length-1);
	if(isNull(n)){
		n=0;
	}
	return n;
}
/*decimal point*/
function dec_number(n){
	if(n.indexOf(".")==-1){
       n=n+".";
	}
	return n;
}
function enterOperation(){
	var num=document.getElementById("num");
	var old=Number(num.value);
	num.value=0
	return old;
}
/*check if text field is null or 0*/
function isNull(n) {
	if (n*1==0 || n.length==0){
		return true;
	}else{
		return false;
	}
}

function isNumber(n){
	return !isNaN(n);
}