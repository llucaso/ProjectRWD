$(function() {

  $('#btn-1').mouseenter(function() {
    //createElement();
    showVideo('1');
  });

  $('#btn-1').mouseleave(function() {
    //deleteElement();
    showVideo('2');
  });

  function showVideo(videoId){
    $('.Video').css('display', 'none');
    $('#video-'+videoId).css('display', 'block');  
};



  });