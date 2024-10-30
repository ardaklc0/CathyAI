// if the size of device is smaller than 768px then use the png image 'smallsizephone.png' instead of phone_1_yeni.jpg and phone_2_yeni.jpg. Code it
// in the static.js file.
$(document).ready(function() {
    console.log('ready');
    console.log($(window).width());
    if ($(window).width() <= 768) {
        console.log('small');
        $('#right_phone').attr('src', 'assets/smallsizephone.png');
        $('#right_phone').css('padding', '0%');
        $('#right_phone').css('width', '100%');
        //hide second phone
        $('#left_phone').hide();
    } else {
        $('#phone-contactus-textfield').addClass('ps-1');
        $('#phone-join-textfield').addClass('ps-1');
    }
    // var docWidth = document.documentElement.offsetWidth;
    // [].forEach.call(
    // document.querySelectorAll('*'),
    // function(el) {
    //     if (el.offsetWidth > docWidth) {
    //     console.log(el);
    //     }
    // }
    // );
    $('#joinModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });
    $('#join').on('click', function() {
        $('#joinModal').modal('show');
    });
    $('#close-join').on('click', function() {
        $('#joinModal').modal('hide');
    });
    $('#submit-join').on('click', function() {
        $('#joinModal').modal('hide');
    });
    $('#contactusModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });
    $('#contactus').on('click', function() {
        $('#contactusModal').modal('show');
    });
    $('#close-contactus').on('click', function() {
        $('#contactusModal').modal('hide');
    });
    $('#submit-contactus').on('click', function() {
        $('#contactusModal').modal('hide');
    });
});

$('#about').click(function() {
    $('html, body').animate({
        scrollTop: $('.reminder-section').offset().top
    }, 100);

});

$('#pricing').click(function() {
    $('html, body').animate({
        scrollTop: $('.payment-section').offset().top
    }, 100);
});

