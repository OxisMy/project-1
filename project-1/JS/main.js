
// $('.form').css('background', 'darkblue');
// $('.nav a').css('color', 'black');
$('.cancel').click( function() 
{
    $('.pop-up').fadeOut(500)
});
$('.ask-us-button').click( function()
{
    $('.pop-up').css('display', 'flex')
});
$('.faq-item-question').click(function(){
    $(this).parre().slideToggle(700);
    // $('.faq-item-anwers').slideToggle(700);
});

$('.nav a').click( function() {
    let href = $(this).attr('href');
    console.log(href);

    let scroll = $(href).offset().top;
    console.log(scroll);


    $('body, html').animate({
        scrollTop : scroll - 100
    }, 500);
});



// let  name = prompt('КаК тебя зовут');

// if (name == 'Саша') {
//     $('h1').text(`Привет, ${name}, тебя зовут так же как и меня!`);
// }   else if (name == 'Катя') {
//     $('h1').text(`Привет, ${name}, тебя зовут так же как и мою сестру`);
// }   else {
//     $('h1').text('Такого имени в списке нет =(');
// }



// 5 - number - числовое
// 'alexander' - string - строковые

// let a = prompt('какое кол-во человек вы хотите забронировать');
// let num = a % 10;
// let lastTuNumbers = num % 100;

//     if( lastTuNumbers >= 10 && lastTuNumbers >= 14) {
//     console.log(`Вы забронировали ${a} мест`);
// }    else if  (a == 1 ) {
//     console.log(`Вы забронировали ${a} место`);
// }   else if (a >= 2 && a <= 4) {
//     console.log(`Вы забронировали ${a} места`);
// }   else {
//     console.log(`Вы забронировали ${a} мест`);
// }


// && - и
// || - или
