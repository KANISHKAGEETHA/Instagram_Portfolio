// Tap any photo slot to preview your own photo in it (stays on this device only).
document.querySelectorAll('.ph').forEach(function(slot){
  var inp=document.createElement('input');inp.type='file';inp.accept='image/*';slot.appendChild(inp);
  slot.addEventListener('click',function(){inp.click()});
  inp.addEventListener('click',function(e){e.stopPropagation()});
  inp.addEventListener('change',function(){
    var f=inp.files&&inp.files[0];if(!f)return;
    var r=new FileReader();
    r.onload=function(){
      var old=slot.querySelector('img');if(old)old.remove();
      var im=document.createElement('img');im.src=r.result;im.alt='';slot.appendChild(im);slot.classList.add('has');
    };
    r.readAsDataURL(f);
  });
});
