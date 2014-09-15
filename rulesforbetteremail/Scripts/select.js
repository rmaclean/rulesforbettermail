/// <reference path="jquery-2.1.1.js" />

$(function () {
    $("#sig").click(function () {
        var signatureBlock = $(this);
        signatureBlock.focus();
        signatureBlock.select();
    });
});


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-2477039-8', 'auto');
ga('send', 'pageview');

var switchTo5x=true;
stLight.options({publisher: "6e331d38-b4e0-406c-904a-be8407614a4d", doNotHash: false, doNotCopy: false, hashAddressBar: false});