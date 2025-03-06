<?
$android='远昔科技.apk'; //本地APP文件
$ios='远昔科技.mobileconfig';
$android_lanzou='https://yuanxiapi.lanzouh.com/iS4CO062wugh'; //远程蓝奏云文件
$ios_lanzou='https://yuanxiapi.lanzouh.com/ioxO5z1b8di'; 


$siteurl=((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://").$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

?>

<html lang="en">
<head>
    <html lang="zh-cn">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,maximum-scale=1">
        <title>远昔下载APP</title>
        <link href="assets/css/download.css" rel="stylesheet">
		
			<link rel="stylesheet" href="./assets/layui/css/layui.css">
      <link rel="stylesheet" href="./assets/css/main.css">
		
        <style type="text/css">.wechat_tip,.wechat_tip>i{position:absolute;right:10px}
.wechat_tip{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#3ab2a7;color:#fff;font-size:14px;font-weight:500;width:135px;height:60px;border-radius:10px;top:15px}
.wechat_tip>i{top:-10px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:12px solid #3ab2a7}
.mask img{max-width:100%;height:auto}
</style>
    </head>
<body>
<span class="pattern left"><img src="assets/images/left.png"></span>
<span class="pattern right"><img src="assets/images/right.png"></span>
<div class="out-container">
    <div class="main">
        <header>
            <div class="table-container">
                <div class="cell-container">
                    <div class="app-brief">
                        <div class="icon-container wrapper">
                            <i class="icon-icon_path bg-path"></i>
<span class="icon"><img src="./assets/images/logo.jpg"></span>
<span class="qrcode"><div><img src="https://yuanxiapi.cn/api/QRcode/?size=120n&url=<?=$siteurl?>" width="100" height="100"></canvas></div></span>
                        </div>
<h1 class="name wrapper"><span class="icon-warp" style="margin-left:0px"><i class="layui-icon layui-icon-auz" style="font-weight: 400;font-variant: normal;text-transform: none;line-height: 1;
    -webkit-font-smoothing: antialiased;"></i>
远昔APP</span>
                        </h1>
<p class="scan-tips" style="margin-left:170px">扫描二维码下载<br>或用手机浏览器输入这个网址：
<span class="text-black"><?=$siteurl?></span>
                        </p>
                        <div class="release-info">
                            <!--                                <p>1.0（Build 1）</p>-->
                            <p>更新于：2024-07-06 22:56:20</p>
                        </div>
                    </div>
                    
<div class="actions"><button type="button" onclick="android_download()"><i class="icon-ios"></i> Android下载</button></div>
<div class="actions"><button type="button" onclick="ios_download()"><i class="icon-ios"></i> ISO 下 载</button></div>

                </div>
            </div>
        </header>
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