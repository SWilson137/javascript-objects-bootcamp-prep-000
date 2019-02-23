var playlist = { "Kehlani": "Distraction", "Mac_Ayres": "Easy"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.Ella_Mai = "Anymore"
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Mac_Ayres
  return playlist
}