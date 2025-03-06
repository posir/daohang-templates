<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
<meta http-equiv="Cache-Control" content="no-transform" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<meta name="robots" content="max-image-preview:large" />
<meta name="keywords" content="我的小姐姐">
<meta name="description" content="我的小姐姐">
<meta name="applicable-device" content="pc,mobile">
<meta name="apple-mobile-web-app-title" content="我的小姐姐">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<title>我的小姐姐</title>
<link rel='stylesheet' id='_bootstrap-css' href='/css-js/bootstrap.min.css' type='text/css' media='all' />
<script type="text/javascript" src="/css-js/jquery.min.js" id="jquery-js"></script>
</head>
<body class="home blog white-theme nav-fixed site-layout-2">
	<div class="container fluid-widget">
	<div class="sidebar">
	<div class="mb20">
	<div class="box-body notop">
	<div class="title-theme">我的小姐姐<div class="pull-right em09 mt3"><a href="JavaScript:void(0)" class="muted-2-color"><span id="xiayg">换一位</span></a>
	</div>
	</div>
	</div>
	<div class="relative-h radius8 controller-hide">
	<div class="new-dplayer" video-url="http://www.yujn.cn/api/diaodai.php" video-type="auto" video-option='{"autoplay":true,"loop":true,"volume":0}'>
	<div class="graphic" style="padding-bottom:50%;"><div class="abs-center text-center"><i class="fa fa-play-circle fa-4x muted-3-color opacity5" aria-hidden="true"></i>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
<script type="text/javascript">
        window._win = {
            views: '',
            www: 'https://www.dkewl.com',
            uri: 'https://demo.zibll.com/wp-content/themes/zibll/',
            ver: 'dkewl.com',
            imgbox: '1',
            imgbox_type: 'group',
            imgbox_thumbs: '1',
            imgbox_zoom: '1',
            imgbox_full: '1',
            imgbox_play: '1',
            imgbox_down: '1',
            sign_type: 'modal',
            signin_url: '/',
            signup_url: '/',
            ajax_url: '/',
            ajaxpager: '1',
            ajax_trigger: '<i class="fa fa-angle-right"></i>加载更多...',
            ajax_nomore: '没有更多内容了',
            qj_loading: '1',
            highlight_kg: '1',
            highlight_hh: '',
            highlight_btn: '1',
            highlight_zt: 'enlighter',
            highlight_white_zt: 'enlighter',
            highlight_dark_zt: 'dracula',
            upload_img_size: '1',
            img_upload_multiple: '6',
            upload_video_size: '10',
            upload_file_size: '10',
            upload_ext: 'jpg|jpeg|jpe|gif|png|bmp|tiff|tif|webp|avif|ico|heic|asf|asx|wmv|wmx|wm|avi|divx|flv|mov|qt|mpeg|mpg|mpe|mp4|m4v|ogv|webm|mkv|3gp|3gpp|3g2|3gp2|txt|asc|c|cc|h|srt|csv|tsv|ics|rtx|css|vtt|dfxp|mp3|m4a|m4b|aac|ra|ram|wav|ogg|oga|flac|mid|midi|wma|wax|mka|rtf|pdf|class|tar|zip|gz|gzip|rar|7z|psd|xcf|doc|pot|pps|ppt|wri|xla|xls|xlt|xlw|mdb|mpp|docx|docm|dotx|dotm|xlsx|xlsm|xlsb|xltx|xltm|xlam|pptx|pptm|ppsx|ppsm|potx|potm|ppam|sldx|sldm|onetoc|onetoc2|onetmp|onepkg|oxps|xps|odt|odp|ods|odg|odc|odb|odf|wp|wpd|key|numbers|pages|jpg',
            user_upload_nonce: 'e872fb381b',
            is_split_upload: '1',
            split_minimum_size: '20',
            comment_upload_img: '1'
        }
		$(document).ready(function() {
    $('#xiayg').on('click', function() {
        var $videoElement = $('.dplayer-video-wrap .dplayer-video.dplayer-video-current');
        if ($videoElement.length) {
            $videoElement.attr('src', 'http://www.yujn.cn/api/diaodai.php');
            $videoElement[0].load();
            $videoElement[0].play();
        } else {
            console.error('找不到视频元素');
        }
    });
});
</script>
<script type="text/javascript" src="css-js/bootstrap.min.js" id="bootstrap-js"></script>
<script type="text/javascript" src="css-js/loader.js" id="_loader-js"></script>
</body>
</html>
