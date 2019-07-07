
/*!
  * Custom Javascript
  */

function setFooterDate(target) {
    var today = new Date();
    var yr = today.getFullYear();
    $(target).html(yr);
}


function toggleInfo(target) {
    var id = $(this).attr('id');
    var loc = id.substring(5,10);
    var tgtID = '#info-'+loc;

    if($(tgtID).hasClass('hidden')){
      $(tgtID).removeClass('hidden')
    }
    else {
      $(tgtID).addClass('hidden')
    }

}