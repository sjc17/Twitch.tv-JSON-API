$(document).ready(function() {
  var streamerList = ["freecodecamp", "bobross", "maximilian_dood", "ESL_SC2"];
  var online = false;
  for (i=0; i<streamerList.length; i++) { 
    getChannelStatus(streamerList[i]);
  }
});

function getChannelStatus(channelName) {
  var onlineStatus = true;
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+channelName+'?callback=?', function(data) {
    if (data.stream === null) {
      onlineStatus = false;
    }
    createChannelBlock(data._links.channel.substr(38), onlineStatus);
  });
}

function createChannelBlock(channelName, onlineStatus) {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+channelName+'?callback=?', function(data) {
    var html = '<div class="streamer container">';
    html += '<img src="' + data.logo + '" ';
    html += 'alt="' + data.name + '" class="inline"\/>';
    html += '<a href="' + data.url + '" class="channel-name inline" target="_blank">';
    html += '<h4>' + data.display_name + '<\/h4>';
    html += '<\/a>';
    if (onlineStatus === true) {
      html += '<div class="channel-info container-fluid inline">' + data.status + '<\/div>';
    } else {
      html += '<div class="channel-info container-fluid inline"><em>Offline<\/em><\/div>';
    }
    html += '<\/div>';
    console.log(html);
    $(".overall").append(html);
  });
}
