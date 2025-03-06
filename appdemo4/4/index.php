<?
$android='远昔科技.apk'; //本地APP文件
$ios='远昔科技.mobileconfig';
$android_lanzou='https://yuanxiapi.lanzouh.com/iS4CO062wugh'; //远程蓝奏云文件
$ios_lanzou='https://yuanxiapi.lanzouh.com/ioxO5z1b8di'; 

$siteurl=((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://").$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,maximum-scale=1">
<title>远昔科技APP - 远昔官方APP,远昔科技APP官网,远昔科技APP在线下载官网</title>
<meta name="keywords" content="远昔科技APP,远昔科技APP下载,远昔科技APP官网,远昔科技APP在线下载官网" />
<meta name="description" content="贵州远昔科技有限公司(www.yuanxiapp.cn)官方APP在线自助下载官网，下载APP 使用更方便快捷哦！">

<link href="Static/css/index.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="Static/layui/css/layui.css">

<link rel="stylesheet" href="Static/css/main.css" />
</head>
<body>

    
	<div class="body">
	    
	<div class="cont d-flex d-column">
	<div class="logo"><img src="logo.png" alt=""/></div>
	<h1>远昔科技官方APP</h1>
	<p></p>
	<div class="foot">
		<a class="btn" href="javascript:android_download()"><i class="layui-icon layui-icon-android"></i> 安卓下载</a>
		<!--a class="btn" onclick="app()"><i class="layui-icon layui-icon-home"></i> 进入官网</a-->
		<a class="btn" href="javascript:ios_download()"><i class="layui-icon layui-icon-ios"></i> IOS下载</a>

		</div>
		
	<footer class="erx-start-footer"><br>
<a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index" id="icp">加载中</a>
<script>document.write('<script src="https://www.yuanxiapi.cn/api/qqbeian/?type=js&url='+window.location.host+'"><\/script>');
window.onload=function(){ document.getElementById("icp").innerHTML=icp["ICPSerial"]; } </script></footer>	
		
	</div>

			

		<div class="intro_weChatTip" id="ios_browserTip">
			<div class="qui_mask qw_mask" id="browserTipMask"></div>
			<span class="qw_icon qw_icon_ShareArrow"></span>
			<div class="intro_weChatTip_cnt">
<i class="layui-icon layui-icon-ios"></i>请点击右上角 “···”<br />
				选择“在 Safari 中打开”
			</div>
		</div>

		<div class="intro_weChatTip" id="androidBrowserTip">
			<div class="qui_mask qw_mask"></div>
			<span class="qw_icon qw_icon_ShareArrow"></span>
			<div class="intro_weChatTip_cnt">
<i class="layui-icon layui-icon-android"></i>请点击右上角 “···”<br />
				选择“在浏览器中打开” 或 “浏览器”
			</div>
		</div>

<script type="text/javascript" src="Static/js/jquery.min.js"></script> 
<script type="text/javascript" src="Static/layer/layer.js"></script>
<script>var browser = {
				versions: function() {
					var u = navigator.userAgent,
						app = navigator.appVersion;
					return { //移动终端浏览器版本信息
						trident: u.indexOf('Trident') > -1, //IE内核
						presto: u.indexOf('Presto') > -1, //opera内核
						webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
						gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
						mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(
							/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
						), //是否为移动终端
						ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
						android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
						iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
						iPad: u.indexOf('iPad') > -1, //是否iPad
						webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
					};
				}(),
language: (navigator.browserLanguage || navigator.language).toLowerCase() }

			function isSafari() {
				return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/MQQBrowser/.test(navigator
					.userAgent);
			}

			function IsPC() {
				var userAgentInfo = navigator.userAgent;
				var Agents = ["Android", "iPhone",
					"SymbianOS", "Windows Phone",
					"iPad", "iPod"
				];
				var flag = true;
				for (var v = 0; v < Agents.length; v++) {
					if (userAgentInfo.indexOf(Agents[v]) > 0) {
						flag = false;
						break;
					}
				}
				return flag;
			}

			function is_weixn_qq() {
				var ua = navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger\/[0-9]/i)) {
					return "weixin";
				}
				if (ua.match(/QQ\/[0-9]/i)) {
					return "QQ";
				}
				return false;
			}
			
				function android_download() {
				if (!IsPC()) {
					if (is_weixn_qq()) {
						document.getElementById("androidBrowserTip").style.display = "block";
					} else { xiazai('android'); }
				}else{ xiazai('android'); }
			}


function ios_download(){
if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
if (isSafari()) {

  layer.confirm("1.请使用苹果自带浏览器Safari<img src=//yuanxiapi.cn/api/fhurl/iphone.png width=6% style=max-width:100%;border-radius:50%;>,再进入本网站下载APP<hr>2.下载完成后,退出浏览器，打开设置-打开通用-打开描述文件(或者设备管理)<hr>3.最后进行安装，返回桌面即可看见", {title:"苹果app安装下载教程",type:1,icon:3,time:900000000,btn:"知道了，立即下载安装APP",success:function(layero){layero.find(".layui-layer-btn").css("text-align", "center");},yes: function(index,layero){ xiazai('ios');
    setTimeout(function(){
if(confirm){ location.href = "tiao.mobileprovision";}},2000);
} });
					} else {
						if (is_weixn_qq()) {
						document.getElementById("ios_browserTip").style.display = "block";  return; }
layer.msg('<i class="layui-icon layui-icon-ios"></i>请用IOS系统自带浏览器[Safari]<img src=//yuanxiapi.cn/api/fhurl/iphone.png width=6% style=max-width:100%;border-radius:50%;>打开本页面');   return;
					}
				}else{
		layer.msg('<i class="layui-icon layui-icon-ios"></i>检测到您可能非苹果手机无法下载！'); return; } }

function xiazai(name,pwd) {
var ii = layer.load(3, { shade: [0.3, '#000'],success: function (layero) {
layero.find('.layui-layer-content').after('<div class="layer-load"><h4><font color=blue><i class="fa fa-spinner"></i>正在为您跳转下载...</font></h4></div>');
  	layero.find('.layer-load').css({ transform: 'translateX(-50%) translateY(10px)',position: 'absolute',
  	 width: 'max-content',left: '50%', }); } });

if(name=='ios'){ var appurl='<?=$ios_lanzou?>'; var appurl2='<?=$ios?>';}
if(name=='android'){ var appurl='<?=$android_lanzou?>'; var appurl2='<?=$android?>'; }
layer.msg("正在为您跳转下载...请稍等");
  $.ajax({
		type : "GET",
		url : "https://www.yuanxiapi.cn/api/lanzou/",
      data : {url:appurl,pwd:pwd}, 
		dataType : "json",
		success : function(data) {  layer.close(ii);
if(data.code == 200){
window.location.href=data.download; 
}else{
window.location.href=appurl2;
//layer.alert(data.msg,{icon:2},function(){ window.location.reload(); }); 
}  }
,error:function(data){  window.location.href=appurl2;  }
//,error:function(data){  layer.alert("请稍后重试，"+data.msg);  return false;  }
});
}
			
</script>

</body>
</html>