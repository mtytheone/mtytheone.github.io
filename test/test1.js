var $box = '.box';
var $count = '.count';
var count = 1;

$box.on('transitionend', function(e){
  if (e.originalEvent.propertyName === 'width') {
    $count.text(count++);
  }
});