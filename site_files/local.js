/* by substack and rfa for t@l */

$(document).ready(function () {
;(function () {

  jQuery("link[href*='local.css']").attr('id','localcss');
  
  //var nightMode=window.matchMedia('(prefers-color-scheme: dark)').matches;

  var theme = ( function(){
    var theme="light";   
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            var theme = "dark";
        }
    } else if(!window.matchMedia) {
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        var theme = "dark";
    }
    return theme;
  } ) ();

  var nightMode=(theme==='dark')?true:false;
  nightMode ? setNightMode() : setDayMode()

  b=document.createElement('button');
  b.innerHTML=nightMode?'&#127751;':'&#127747;';
  b.id='lightdarkmode';
  b.style.padding='0px';
  b.style.borderWidth='0px';
  b.setAttribute('class','fa fa-fw');
  b.onclick = function(ev) {
    nightMode=!nightMode;
    b.innerHTML=nightMode?'&#127751;':'&#127747;';
    a.setAttribute('title',nightMode?'Day Mode':'Night Mode');
    nightMode ? setNightMode() : setDayMode()
    if(nightMode){
        jQuery("head").find("#localcss").prop('disabled', false);
        jQuery("body").addClass('darkmode');
    } else {
        jQuery("head").find("#localcss").prop('disabled', true);
        jQuery("body").removeClass('darkmode');
    }
  };
  var li=document.createElement('li');
  var a=document.createElement('a');
  a.appendChild(b);
  li.appendChild(a);
  setLabels();
  document.querySelector('#amw-top-nav-right-menu').appendChild(li);

  function setLabels() {
    if (nightMode) {
      a.setAttribute('title','Day Mode');
      b.innerHTML='&#127751;'
    } else {
      a.setAttribute('title','Night Mode');
      b.innerHTML='&#127747;';
    }
  }
  function setNightMode() {
    jQuery("head").find("#localcss").prop('disabled', false);
    jQuery("body").addClass('darkmode');
    localStorage.setItem('theme', 'dark');
  }
  function setDayMode() {
    jQuery("head").find("#localcss").prop('disabled', true);
    jQuery("body").removeClass('darkmode');
    localStorage.setItem('theme', 'light');
  }
})()
});
