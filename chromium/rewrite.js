$('.playlist a[href^="videos/"]:not([href$="#comments"])').attr('href', function() {
    return $(this).attr('href') + '?size=hd';
});