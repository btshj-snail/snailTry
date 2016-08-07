var globalConfig = {
	isOpenLog:true, //是否开启控制台日志
}

var snailUtils = function(window,_sg){
	/*
		日志输出
		可以通过全局的配置isOpenLog来达到控制是否在控制台输出日志。
	*/
	var _log = function(msg){
		if(!!window.console && !!window.console.log && !!_sg.isOpenLog){
			console.log(msg);
		}
	}
	/*
		日志输出
		可以通过全局的配置isOpenLog来达到控制是否在控制台输出日志。
		该方法模拟的是sl4j 中traceLog 方式
		即：
			snailUtils.log("{},你好!这是{}","jack","china")
	*/
	var __log = function() {
		var message = "";
		if (arguments.length == 1) {
			message = arguments[0];
		}else if (arguments.length > 1) {
			var template = arguments[0],
				i = 0;
			!(function(param) {
				message = template.replace(/({\})/gi, function(a, a1) {
					return param[++i];
				});
			})(arguments)
		} 
		_log(message);
	}



	return {
		log:__log
	}
}(window,globalConfig);


