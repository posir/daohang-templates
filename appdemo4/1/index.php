<?
$android='远昔科技.apk'; //本地APP文件
$ios='远昔科技.mobileconfig';
$android_lanzou='https://yuanxiapi.lanzouh.com/iS4CO062wugh'; //远程蓝奏云文件
$ios_lanzou='https://yuanxiapi.lanzouh.com/ioxO5z1b8di'; ?>


<!DOCTYPE html>
<html lang="zh-cmn">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Type" content="text/html">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta content="no-siteapp" http-equiv="Cache-Control">
		<title>APP简洁下载页1</title>
		<meta name="keywords" content=" ">
		<meta name="description" content=" ">
		<link rel="stylesheet" href="./assets/css/main.css">
		<link rel="stylesheet" href="./assets/css/layer.css">
	</head>
	<body class="frame_wrap">
		<div class="intro_banner">
			<div class="intro_banner_info">
				<div class="intro_banner_info_inner">

					
<div class="qw_icon qw_icon_BannerLogo" style="border-radius: 20%; background-size: cover; background-repeat: no-repeat; background-image: url(./assets/images/logo.jpg);"></div>
					
<div class="qw_icon qw_icon_BannerMobileLogo" style="border-radius: 20%; background-size: cover; background-repeat: no-repeat; background-image: url(./assets/images/logo.jpg);"></div>
					

					
					<div class="intro_banner_info_title">
					</div>
					
					<div class="intro_banner_info_downloadBtnWrap">
<a id="downloadInMobile" class="intro_banner_info_downloadBtn intro_banner_info_downloadBtn_ForMobile" href="javascript:ios_download();">
<span class="qw_icon qw_icon_AppStore"></span>IOS下载</a>
						
<a id="downIos" class="intro_banner_info_downloadBtn intro_banner_info_downloadBtn_ForDesktop" href="javascript:ios_download();">
<span class="intro_banner_info_downloadBtn_origin"><span class="qw_icon qw_icon_AppStore">
</span>IOS下载</span></a></div>

<a id="btn_bug" class="intro_banner_info_downloadBtn intro_banner_info_githubBtn" href="javascript:android_download();">
<span class="intro_banner_info_downloadBtn_origin"><span class="qw_icon qw_icon_Andr"></span>安卓下载</span></a>

					
					<div class="intro_banner_info_version">V1.0.1 (Build 1) - 4.37 MB</div>
					
					<div class="intro_banner_info_version">
						最后更新:2024-01-02 10:09:34
					</div>
				</div>
			</div>
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

<script type="text/javascript" src="assets/js/jquery.min.js"></script> 
<script type="text/javascript" src="assets/layer/layer.js"></script>
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