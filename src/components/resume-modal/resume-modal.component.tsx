import React, { FC } from 'react'
import ReactModal from 'react-modal'
import { useRecoilState } from 'recoil'
import { modalOpenState } from '../../recoil/modal/modal.atom'
import Button from '../button/button.component'
import * as Styled from './resume-modal.styles'
import { ModalStyle } from './resume-modal.styles'

const ResumeModal: FC = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState)

  const onCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <ReactModal
        isOpen={modalOpen}
        contentLabel="Minimal Modal"
        style={ModalStyle}
      >
        <Styled.CloseButton onClick={onCloseModal}>Close</Styled.CloseButton>
        <Styled.ResumeReader
          title="resume"
          src={require('../../resources/Patrick Randell - CV.pdf')}
        />
      </ReactModal>
    </div>
  )
}

export default ResumeModal
