var city;
var tianqi;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		 city=obj.data;
		 console.log(city);
	}
})
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		 tianqi=obj.data;
		console.log(tianqi);
	}
})
// 页面加载数据
window.onload=function(){
	update();
	var pos=document.getElementsByClassName("pos")[0];
	var cityBox=document.getElementsByClassName("city")[0];
	pos.onclick=function(){
		cityBox.style.display="block";
    }
    var BOX=$(".city .citys .con .box");
    // console.log(BOX);
    for(let i in BOX){
    	BOX[i].onclick=function(){
    	var chengshi=this.innerHTML;
    	console.log(chengshi);
    	AJAX(chengshi);
    	// update();
    	// var city2=$
    }
    // BOX.onclick=function(){
    // 	var chengshi=this.innerHTML;
    // 	console.log(chengshi);
    // }
}
// 搜索部分
  var searchbox=document.getElementsByClassName("searchBox")[0];
  console.log(searchbox);
  var button=document.getElementsByClassName("button")[0];
  var text;
  console.log(button);
  searchbox.onfocus=function(){
  	button.innerHTML="确认";
  	text=searchbox.value;
  	// console.log(text);
  	// for(let i in city){
  	// 	for(let j in city[i]){
  	

  		}
  		// var neirong=button.innerHTML;
  		// console.log(neirong);
  		button.onclick=function(){
  		var neirong=button.innerHTML;
  		if(neirong=="取消"){
  			var city3=document.getElementsByClassName("city")[0];
  			city3.style.display="none";
  		}else{
  			// console.log(1);
  			for(let i in city){
  				for(let j in city[i]){
  					if(text==j){
  						AJXS(text);
  						return;
  					}else{
  						alert("没有此城市的天气情况");
  						return;
  					}

  				}
  			}
  		}
  		}
  	

  }

function AJAX(str){
	$.ajax({
	url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		 tianqi=obj.data;
		 update();
		 var city2=$(".city")[0];
		 city2.style.display="none";
     }
          })
}

//获取数据的函数
  function update(){
	// 当前天气
     var pos=document.getElementsByClassName("pos")[0];
     console.log(pos);
     pos.innerHTML=tianqi.city;

     // 当前空气质量
     var quality_level=document.getElementsByTagName("h5")[0];
     console.log(quality_level);
     quality_level.innerHTML=tianqi.weather.quality_level;

     // 当前温度
     var current_temperature=document.getElementsByClassName("title1")[0];
     console.log(current_temperature);
     current_temperature.innerHTML=tianqi.weather.current_temperature+"°";

     // 当前天气状况
     var current_condition=document.getElementsByClassName("title2")[0];
     console.log(current_condition);
     current_condition.innerHTML=tianqi.weather.current_condition;

    // 当前风向
     var wind_direction=document.getElementsByClassName("wind_der")[0];
     console.log(wind_direction);
     wind_direction.innerHTML=tianqi.weather.wind_direction;

    // 当前风级
     var wind_level=document.getElementsByClassName("wind_level")[0];
     console.log(wind_level);
     wind_level.innerHTML=tianqi.weather.wind_level+"级";

    // 今天天气情况
    var dat_condition=document.getElementsByClassName("con")[0];
    console.log(dat_condition);
    dat_condition.innerHTML=tianqi.weather.dat_condition;
    
    // 今天最高温度
    var dat_high_temperature=document.getElementsByClassName("heigher")[0];
    console.log(dat_high_temperature);
    dat_high_temperature.innerHTML=tianqi.weather.dat_high_temperature;
    
    // 今天最低温度
    var dat_low_temperature=document.getElementsByClassName("lower")[0];
    console.log(dat_low_temperature);
    dat_low_temperature.innerHTML=tianqi.weather.dat_low_temperature="℃";

    // 今天天气情况图片显示
    var today_icon=document.getElementsByClassName("conPic")[0];
    console.log(today_icon);
    today_icon.style=`background-image:url("img/${tianqi.weather.dat_weather_icon_id}.png")`;

    // 明天天气情况
    var tomorrow_condition=document.getElementsByClassName("tomorrow_con")[0];
    console.log(tomorrow_condition);
    tomorrow_condition.innerHTML=tianqi.weather.tomorrow_condition;

    // 明天最高温度
    var tomorrow_high_temperature=document.getElementsByClassName("tomorrow_high")[0];
    console.log(tomorrow_high_temperature);
    tomorrow_high_temperature.innerHTML=tianqi.weather.tomorrow_high_temperature;

    // 明天最低温度
    var tomorrow_low_temperature=document.getElementsByClassName("tomorrow_low")[0];
    console.log(tomorrow_low_temperature);
    tomorrow_low_temperature.innerHTML=tianqi.weather.tomorrow_low_temperature+"℃";
    
    // 明天天气情况图片显示
    var tomorrow_icon=document.getElementsByClassName("tomorrow_icon")[0];
    console.log(tomorrow_icon);
    tomorrow_icon.style=`background-image:url("img/${tianqi.weather.tomorrow_weather_icon_id}.png")`;

    



    // 每小时
    var hourlyArr=tianqi.weather.hourly_forecast;
    var wrap=document.getElementsByClassName("wrap")[0];
    for(let i in hourlyArr){
    	var box1=document.createElement("div");
        box1.className="box";
        
        var time=document.createElement("div");
        time.className="time";
        box1.appendChild(time);
        time.innerHTML=hourlyArr[i].hour+":00";

        var icon=document.createElement("div");
        icon.className="icon";
        box1.appendChild(icon);
        icon.style=`background-image:url("img/${hourlyArr[i].weather_icon_id}.png")`;
       
        var timeTem=document.createElement("div");
        timeTem.className="timeTem";
        box1.appendChild(timeTem);
        timeTem.innerHTML=hourlyArr[i].temperature+"°";

        wrap.appendChild(box1);
    }
    
    // 未来15天的天气情况
    var dayArr=tianqi.weather.forecast_list;
	var wrap1=document.getElementsByClassName("wrap1")[0];

	for(let i in dayArr){
	var box2=document.createElement("div");
	box2.className="box";

	 var time=document.createElement("div");
		time.className="day";
		box2.appendChild(time);
		time.innerHTML=dayArr[i].date;

		var wea=document.createElement("div");
		wea.className="air1";
		box2.appendChild(wea);
		wea.innerHTML=dayArr[i].condition;
		
		var icon=document.createElement("div");
		icon.className="icon";
		box2.appendChild(icon);
		icon.style=`background-image:url("img/${dayArr[i].weather_icon_id}.png")`;
		
        var timeTem1=document.createElement("div");
		timeTem1.className="tem1";
		box2.appendChild(timeTem1);
		timeTem1.innerHTML=dayArr[i].high_temperature+"°";
		
		var timeTem2=document.createElement("div");
		timeTem2.className="tem2";
		box2.appendChild(timeTem2);
		timeTem2.innerHTML=dayArr[i].low_temperature+"°";

		var wind=document.createElement("div");
		wind.className="wind1";
		box2.appendChild(wind);
		wind.innerHTML=dayArr[i].wind_direction;

		var windId=document.createElement("div");
		windId.className="wind2";
		box2.appendChild(windId);
		windId.innerHTML=dayArr[i].wind_level;


		wrap1.appendChild(box2);
	}


    // 关于城市的信息
    var city1=document.getElementsByClassName("city")[0];
    for(let i in city){
    	var citys=document.createElement("div");
    	citys.className="citys";

    	var title=document.createElement("div");
    	title.className="title";
    	title.innerHTML=i;
    	citys.appendChild(title);


    	var con=document.createElement("div");
    	con.className="con";

    	for(let j in city[i]){
    		var box=document.createElement("div");
    		box.className="box";
    		box.innerHTML=j;
    		con.appendChild(box);

    	}
        citys.appendChild(con);
        city1.appendChild(citys);
}
}