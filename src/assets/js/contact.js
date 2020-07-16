
$(".share-toggle").click(function (event) {
    $(this).siblings().addClass('active');
});

$(document).click(function (e) {
    if (!$(e.target).is('.share-list, .share-list *, .share-toggle')) {
        $('.share-list').removeClass('active');
    }
});

