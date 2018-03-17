$(document).ready(function() {
  var streamerList = ["freecodecamp", "bobross", "maximilian_dood", "ESL_SC2"];
  for (i=0; i<streamerList.length; i++) {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+streamerList[i]+'?callback=?', function(data) { 
      console.log(data);
      createStreamerBlock(data);
    });
  }
});

function createStreamerBlock(data) {
  var html = '<div class="streamer container">';
  html += '<img src="' + data.logo + '" ';
  html += 'alt="' + data.name + '" class="inline"\/>';
  html += '<a href="' + data.url + '" class="channel-name inline" target="_blank">';
  html += '<h4>' + data.display_name + '<\/h4>';
  html += '<\/a>';
  html += '<div class="channel-info container-fluid inline">' + data.status + '<\/div>';
  html += '<\/div>';
  console.log(html);
  $(".overall").append( html );
}

function createOfflineBlock(data) {
  var html = '<div class="streamer container">';
  html += '<img src="' + data.logo + '" ';
  html += 'alt="' + data.name + '" class="inline"\/>';
  html += '<a href="' + data.url + '" class="channel-name inline" target="_blank">';
  html += '<h4>' + data.display_name + '<\/h4>';
  html += '<\/a>';
  html += '<div class="channel-info container-fluid inline">' + data.status + '<\/div>';
  html += '<\/div>';
  console.log(html);
  $(".overall").append( html );
}
