$('.playlist a[href^="videos/"]:not([href$="#comments"])').attr('href', function(i, href) {
    return href + '?size=hd';
});