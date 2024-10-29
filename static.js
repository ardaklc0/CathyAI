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
    }
});
