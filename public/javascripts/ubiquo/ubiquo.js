document.observe("dom:loaded", function() {
  //content corners
  if ($('content')){
	$('content').insert({bottom: '<span class="corner_tl"></span><span class="corner_tr"></span><span class="corner_bl"></span><span class="corner_br"></span>'});
  }
  //form_box corners
  if ($$('.form_box').first()) {
	$$('.form_box').each(function(f) {
      f.insert({bottom: '<span class="corner_tl"></span><span class="corner_tr"></span><span class="corner_bl"></span><span class="corner_br"></span>'});
    });
  }
  //version box corners
  if ($$('#sidebar .version, #sidebar .version_selected').first()) {
    $$('#sidebar .version, #sidebar .version_selected').each(function(f) {
      f.insert({bottom: '<span class="se"></span><span class="sd"></span><span class="ie"></span><span class="id"></span>'});
    });
  }
  //ubiquo_authentication
  if($('send_confirm_creation') && $("welcome_message_block")) {
    $('send_confirm_creation').observe("change", function() {
      if ($('send_confirm_creation').checked) {
        Effect.BlindDown("welcome_message_block");
      } else {
        Effect.BlindUp("welcome_message_block");
      }
    });
    if($('send_confirm_creation').checked) {
      $("welcome_message_block").show();
    } else {
      $("welcome_message_block").hide();
    }
  }
  //ubiquo_i18n
  if($('locale_selector') != undefined) {
    var locale_selector = $('locale_selector');
    locale_selector.observe(
      "change",
      function(){
        this.up('form').submit();
      }
    );
  }
});

function send_as_form(div_id, url, method) {
  var fo = $(div_id);
  var ie = navigator.appVersion.indexOf("MSIE") != -1;
  var f;
  if(ie) {
    f = $(document.createElement('<form enctype="multipart/form-data">'));
  } else {
    f = document.createElement('form');
    f.enctype= 'multipart/form-data';
  }
  f.action = url;
  f.target = 'upload_frame';
  f.method = method;
  f.setAttribute('style', 'display = "hidden"');
  document.getElementsByTagName('body')[0].appendChild(f);
  f.appendChild(fo);
  f.submit();
  f.remove();
}

function killeditor(reference) {
  reference = reference || 'visual_editor';
  var first = true;
  $$("."+reference+", #"+reference).each(function(v) {
    if(first) {
      tinyMCE.triggerSave(true,true);
      first = false;
    }
    tinyMCE.execCommand('mceRemoveControl', true, $(v).id);
  });
}

function reviveEditor(reference) {
  reference = reference || 'visual_editor';
  $$("."+reference+", #"+reference).each(function(v) {
    tinyMCE.execCommand('mceAddControl', true, $(v).id);
  });
}

function blind_toggle(desired_elem, brother) {
  if($(desired_elem).visible()) {
    new Effect.BlindUp($(desired_elem));
  } else {
    new Effect.BlindUp($(brother));
    new Effect.BlindDown($(desired_elem));
  }
}
