$('#share').sharrre({
  share: {
    googlePlus: true,
    facebook: true,
    twitter: true,
    linkedin: true
  },
  url: 'http://www.mojwebdizajn.net/'
});


 $('#facebook').sharrre({
   share: { facebook: true },
   enableHover: false,
   enableTracking: true,
   template: '<a class="box" href=""><div class="share"><span></span></div><div class="count">{total}</div></a>',
   click: function(api, options){
    api.simulateClick();
    api.openPopup('facebook');
  }
 });

 $('#google').sharrre({
  share: {
    googlePlus: true
  },
  urlCurl: 'sharrre.php',
  template: '<a class="box" href=""><div class="share"><span></span></div><div class="count">{total}</div></a>',
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('googlePlus');
  }
});

$('#twitter').sharrre({
   share: { twitter: true },
   enableHover: false,
   enableTracking: true,
   template: '<a class="box" href=""><div class="share"><span></span></div><div class="count">{total}</div></a>',
   buttons: { twitter: {via: 'Mihovil'}},
   click: function(api, options){
    api.simulateClick();
    api.openPopup('twitter');
  }
 });
 
  $('#linkedin').sharrre({
  share: {
    linkedin: true
  },
  template: '<a class="box" href=""><div class="share"><span></span></div><div class="count">{total}</div></a>',
  enableHover: false,
  enableTracking: true,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('linkedin');
  }
});