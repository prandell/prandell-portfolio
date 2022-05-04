import styled from 'styled-components'
import ReactModal from 'react-modal'
import Button from '../button/button.component'

export const ModalStyle: ReactModal.Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '10px'
  },

  content: {
    position: 'absolute',
    margin: '0px',
    border: '1px solid var(--accent-colour-3)',
    background: '#181818',
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px'
  }
}

export const ResumeReader = styled.iframe`
  width: 100%;
  height: 100%;
`

export const CloseButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 0px 15px;
  cursor: pointer;
  margin-left: 10px;
  font-family: 'Russo One', sans serif;
  font-size: 18px;
`
