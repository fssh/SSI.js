//author：fsh QQ：741691336 weixin：忘我之鱼
function SSI(url) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("post", url, false);
    xhr.send();
    console.log(xhr.readyState, xhr.status);
    if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 300 || xhr.status == 304) {
        document.write(xhr.responseText);
    }
}
