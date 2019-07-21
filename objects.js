var playlist = {
  Cher: "Turn back time"
  Oasis: "Live forever"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
