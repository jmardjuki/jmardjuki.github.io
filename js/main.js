"use strict"

$(function(){
  $("#myTitle").typed({
    strings: ["Code Connoisseur 😎", "Mille Crêpe Enthusiast 🍰", "Crafting Digital Dreams ✨"],
    typeSpeed: 40,
    loop: true,
  });
});

/* PagePiling */
$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: '#menu',
    direction: 'vertical',
    verticalCentered: true,
    anchors: ['home', 'about', 'resume', 'contact'],
    sectionsColor: ['black', '#071d2c', '#222d39', '#1e4256', 'rgb(75, 102, 132)' ],
    navigation: {
      'textColor': 'white',
      'bulletsColor': 'white',
      'position': 'right',
      'tooltips': ['Home↑', 'About Me', 'Resume', 'Contact Me']
    },
  });
});

/* Colorbox */
$(document).ready(function() {
  $(".inline").colorbox({inline:true, width:"50%"});
});

/* ToolTipJS */
$(document).ready(function() {
  var popup = $('#popup');
  var ref = $('.box');
  var popper = new Popper(ref,popup,{
    placement: 'right'
  });
  popup.hide();
  ref.hover(function(){
    popup.show();
  });

  var close =$('.close-txt');
  close.click(function(){
    popup.hide();
  });

});

/* Others */
$(document).ready(function() {
  // TOP Page
  setInterval(function(){
    var noticeColour = $('#notice_me').css("color");
    if ( noticeColour == "rgb(255, 0, 0)") {
      $('#notice_me').css("color", "white");
    }
    else{
      $('#notice_me').css("color", "red");
    }
  }, 1500);

  $('.logo_icon').hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(800);
    var valueText = this.id;
    valueText = '<span id="logo_hoverText">' + valueText + '</span>';
    $('#logo_hoverText').replaceWith( $(valueText) );
  }, function() {
    var valueText = '<span id="logo_hoverText">_______</span>';
    ('#logo_hoverText').replaceWith( $(valueText) );
  }
  );

  // Projects Page
  $('#project_sel_2015').css("color", "rgb(200, 78, 25)");  // Default

  var clicked = false;

  var oriColour; // Original colour of project select
  $('.project_select').hover(
    function() {
      oriColour = $(this).css("color");
      if ( oriColour != "rgb(200, 78, 25)" ) {
        $(this).css("color", "rgb(200, 78, 25)");
      }
      },function() {
        if ( oriColour != "rgb(200, 78, 25)" ) {
          if (!clicked) {
            $( this ).css("color", "green");
          }
          else {
            clicked = false;
          }
        }
      }
    );

    $('.project_select').click(function() {
      var projectIdArray;
      var projectId = this.id;
      var yearSelected;

      $('.project_select').css("color", "green");
      projectIdArray = projectId.split('_');
      yearSelected =  projectIdArray[2];
      if ( yearSelected == 2015) {
        $('#project_content_2015').show();
        $('#project_content_2014').hide();
        $('#project_content_2013').hide();
      }
      else if ( yearSelected == 2014) {
        $('#project_content_2015').hide();
        $('#project_content_2014').show();
        $('#project_content_2013').hide();
      }
      // Else do nothing

      clicked = true;
      $(this).css("color", "rgb(200, 78, 25)")
    });

    // Contact me Page
    // -> Totally not being paranoid
    $('#woDeEmail').click(function() {
        this.remove();
        var numb = "-9646";
        var domainNeemu = "jmardjuki.com";
        var mid = "518"
        var zhiString = '<span>hi' + '@' + domainNeemu + '</span>';
        var anotherDomain = "jmardjuki.com"
        var datStr = "(604) " + mid + numb;
        zhiString = datStr + ' / ' + zhiString;
        $('#contact_me').append(zhiString);

    });

});
