var aa="123";
console.log(aa);

window.onload=function(){
	var button=document.getElementsByClassName("button");[0];
    console.log(button);
    button[0].onclick=function(){
	// alert("这是一个按钮");
	var city=document.getElementsByClassName("city");
	console.log(city);
	city[0].style.display="none";
    } 
    var pos=document.getElementsByClassName("pos")[0];
    pos.onclick=function(){
	   var city=document.getElementsByClassName("city");
	   console.log(city);
	   city[0].style.display="block";
    } 
}

//js
//1.当整个页面加载完成时，才可以对元素进行操作；
//2.获取元素：document.getElementsByClassName("")[0];
//3.添加事件函数
//4.进行样式操作
