const React = require('react')
const { connect } = require('react-redux')
const classNames = require('classnames')
const { REMOVE_FRIEND } = require('../../actions')

function IssuedInvitesTable ({ issuedInvitesList }) {
  return (
      <table className='song-table'>
        <tbody>
        <tr>
          <th className='number'>#</th>
          <th>Description</th>
          <th>Invite URI</th>
          <th className='remove-button'/>
        </tr>
        {issuedInvitesList.map((invite, i) => {
          var descriptionClass = classNames({inactive: !invite.description})
          return (
            <tr key={i}>
              <td className='number'>{i + 1}</td>
              <td className={descriptionClass}>{invite.description || '—'}</td>
              <td className={descriptionClass}>
                <input type='text' value={invite.uri || '—'} readOnly/>
              </td>
              <td className='remove-button'><a onClick={() => REMOVE_FRIEND(i)}><i className='fa fa-trash'/></a></td>
            </tr>
          )
        })}
        </tbody>
      </table>
  )
}

module.exports = connect(null, {REMOVE_FRIEND})(IssuedInvitesTable)
