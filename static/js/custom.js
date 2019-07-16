
/*!
  * Custom Javascript
  */

function setFooterDate(target) {
    var today = new Date();
    var yr = today.getFullYear();
    $(target).html(yr);
}


function toggleInfo(target) {
    var loc = $.trim(target.substring(5,20));
    var tgtID = '#info-'+loc;
    alert(tgtID);
    var chk = document.getElementById(target).hasAttribute("hidden");
    if(chk){
      $(tgtID).removeAttr('hidden');
    }
    else {
      $(tgtID).attr('hidden','hidden');
    }

}