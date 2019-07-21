var playlist = {
  "Phil Ochs": "Slowdive"
}

var updatePlaylist = function(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
