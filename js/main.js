var t = null;
t = setTimeout(time, 1000); //開始运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours(); //获取时
    var m = dt.getMinutes(); //获取分
    var s = dt.getSeconds(); //获取秒
    if (parseInt(h) < 10) {
        if (parseInt(m) < 10) {

            if (parseInt(s) < 10) {
                document.querySelector(".showTime").innerHTML =
                    "0" + h +
                    ":0" +
                    m +
                    ":0" +
                    s;
            }
            else {
                document.querySelector(".showTime").innerHTML =
                    "0" + h +
                    ":0" +
                    m +
                    ":" +
                    s;
            }
        }
        else{

            if (parseInt(s) < 10) {
                document.querySelector(".showTime").innerHTML =
                    "0" + h +
                    ":" +
                    m +
                    ":0" +
                    s;
            }
            else {
                document.querySelector(".showTime").innerHTML =
                    "0" + h +
                    ":" +
                    m +
                    ":" +
                    s;
            }
        }
    }
    else {
        if (parseInt(m) < 10) {

            if (parseInt(s) < 10) {
                document.querySelector(".showTime").innerHTML =
                    h +
                    ":0" +
                    m +
                    ":0" +
                    s;
            }
            else {
                document.querySelector(".showTime").innerHTML =
                    h +
                    ":0" +
                    m +
                    ":" +
                    s;
            }
        }
        else {

            if (parseInt(s) < 10) {
                document.querySelector(".showTime").innerHTML =
                    h +
                    ":" +
                    m +
                    ":0" +
                    s;
            }
            else {
                document.querySelector(".showTime").innerHTML =
                    h +
                    ":" +
                    m +
                    ":" +
                    s;
            }
        }

    }
    t = setTimeout(time, 1000); //设定定时器，循环运行
}
