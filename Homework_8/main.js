function showMail() {
    alert("bradybaldwin97@gmail.com")
}

window.onscroll = function() {progShow()};

function progShow() {
    var scrollPos = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var postScroll = (scrollPos / height) * 100;
    document.getElementById("thisBar").style.width = postScroll + "%";
}