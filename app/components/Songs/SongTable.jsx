const React = require('react')
const { connect } = require('react-redux')
const SongRow = require('./SongRow.jsx')

var defaultColumns = {
  track: false,
  play: true,
  title: true,
  artist: true,
  album: true,
  added: true,
  length: true,
  queue: true,
  favorite: true,
  remove: false
}

function SongTable ({ songs, currentSong, columns }) {
  columns = Object.assign({}, defaultColumns, columns)

  return (
      <table className='song-table'>
        <tbody>
        <tr>
          {columns.track && <th className='number'>#</th>}
          {columns.play && <th/>}
          {columns.title && <th>Title</th>}
          {columns.artist && <th>Artist</th>}
          {columns.album && <th>Album</th>}
          {columns.added && <th className='creation-date'>Added</th>}
          {columns.length && <th className='song-time'>Length</th>}
          {columns.queue && <th/>}
          {columns.favorite && <th/>}
          {columns.remove && <th/>}
        </tr>
        {songs.map((song) => {
          var playing = song.id === currentSong
          return <SongRow key={song.id} song={song} playing={playing} columns={columns}/>
        })}
        </tbody>
      </table>
  )
}

module.exports = connect(
    (state) => ({
      currentSong: state.player.songId
    })
)(SongTable)
