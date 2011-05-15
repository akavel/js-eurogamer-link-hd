
$('.playlist a[href^="videos/"]').attr('href', function() {
    return $(this).attr('href') + '?size=hd';
});
