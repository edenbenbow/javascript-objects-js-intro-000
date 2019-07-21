var playlist = {
  Oasis: "Live forever"
}

var updatePlaylist = function(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
