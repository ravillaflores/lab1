
/*!
  * Custom Javascript
  */

function setFooterDate(target) {
    var today = new Date();
    var yr = today.getFullYear();
    $(target).html(yr);
}


function toggleInfo(target) {
    var loc = target.substring(5,10);
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