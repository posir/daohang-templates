<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charSet="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Cache-Control" content="no-transform" /> 
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <meta name="referrer" content="never">
    <meta name="renderer" content="webkit" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>随机小姐姐视频</title>
<style>
* {
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body {
    background: #FFF;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}


#main {
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
}

#player {
    width: 100%;
    height: auto;
    max-height: 100%;
}

#buttons {
    height: 60px;
    padding: 10px;
}

#switch,
#next {
    background: #FFF;
    background: linear-gradient(to bottom, #FF2,#FB0);
    color: #AF2E08;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    padding: 0px 20px;
    margin: 0px 5px;
    border-radius: 20px;
}

#down{
    background: #FFF;
    background: linear-gradient(to bottom, #FF2,#FB0);
    color: #AF2E08;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    padding: 10px 20px;
    margin: 0px 5px;
    border-radius: 20px;
}

#down a{
    color: #AF2E08;
    text-decoration: none;
}

#down a:visited{
    color: #AF2E08;
}
</style>
</head>
<body>
    <section id="main">
        <video id="player" src="http://v.nrzj.vip/video.php" controls webkit-playsinline playsinline></video>
    </section>
    <section id="buttons">
        <button id="switch">连续: 开</button>
        <button id="next">换一个</button>
    </section>
    <script>
    (function (window, document) {
        if (top != self) {
            window.top.location.replace(self.location.href);
        }
        var get = function (id) {
            return document.getElementById(id);
        }
        var bind = function (element, event, callback) {
            return element.addEventListener(event, callback);
        }
        var auto = true;
        var player = get('player');
        var randomm = function () {
            player.src = 'http://v.nrzj.vip/video.php?_t=' + Math.random();
            player.play();
        }
        bind(get('next'), 'click', randomm);
        bind(player, 'error', function () {
            randomm();
        });
        bind(get('switch'), 'click', function () {
            auto = !auto;
            this.innerText = '连续: ' + (auto ? '开' : '关');
        });
        bind(player, 'ended', function () {
            if (auto) randomm();
        });
        
        // 点击国外版按钮，触发提示信息
        bind(get('download-link'), 'click', function (event) {
            event.preventDefault(); // 阻止默认的链接跳转行为
            if (confirm('国外版的视频，国内网络无法播放，您确定要跳转吗？')) {
                window.location.href = this.href; // 跳转到链接
            }
        });
        
    })(window, document);
    </script>
</body>
</html>