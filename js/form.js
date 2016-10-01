$(function() {
    var input = $('input');
    var button = $('.button');

    input.hover(
        function() {
            $(this).parent().find('.tooltip').addClass('animate');
        }, (function() {
            $(this).parent().find('.tooltip').removeClass('animate');
        }));

    button.click(function() {
        var title = $('.tooltip');
        $(title).toggleClass('animate');
    });
});





//Первая попытка - через title. Не всегда отрабатывал текст подсказки
// $(document).ready(function() {
//     $('input').hover(function openTooltip() {
//         var title = $(this).attr('title');
//         $(this).data('tipText', title).removeAttr('title');
//         $('<p class="tooltip"></p>')
//             .text(title)
//             .appendTo('body')
//             .fadeIn('slow')
//             // .css({ top: $(this).offset().top + 0, left: $(this).offset().left + 135 + 'px' });
//     }, function() {
//         $(this).attr('title', $(this).data('tipText'));
//         $('.tooltip').remove();
//         }).mousemove(function(e) {
//             $('.tooltip')
//                 .css({ top: $(this).offset().top + 0, left: $(this).offset().left + 135 + 'px' })
//         });
//         $('button').click(function() {
//             var input = $(':input');
//             for (i = 0; i < 3; i++) {
//                 var title = $(input[i]).attr('title');
//                 $(input[i]).data('tipText', title).removeAttr('title');
//                 $('<p class="tooltip"></p>')
//                     .text(title)
//                     .appendTo('body')
//                     .fadeIn('slow')
//                     .css({ top: $(input[i]).offset().top + 0, left: $(input[i]).offset().left + 135 + 'px' });
//             }
//     });
// });


