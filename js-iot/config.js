/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#F0F0F0',
    lineColor: '#F0F0F0'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});