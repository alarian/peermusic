const React = require('react')

class CopyableInput extends React.Component {
  copy () {
    let element = document.createElement('textarea')

    // Prevent flickering
    element.style.position = 'fixed'
    element.style.top = 0
    element.style.left = 0
    element.style.width = '2em'
    element.style.height = '2em'
    element.style.padding = 0
    element.style.border = 'none'
    element.style.outline = 'none'
    element.style.boxShadow = 'none'
    element.style.background = 'transparent'

    element.value = this.props.value
    document.body.appendChild(element)
    element.select()
    document.execCommand('copy')
    document.body.removeChild(element)
  }

  render () {
    return (
      <div className='copyable-input'>
        <input type='text' value={this.props.value} readOnly onFocus={e => e.target.select()}/>
        <a className='copy-button' onClick={() => this.copy()}><i className='fa fa-copy'/></a>
      </div>
    )
  }
}

CopyableInput.propTypes = {
  value: React.PropTypes.string
}

module.exports = CopyableInput
