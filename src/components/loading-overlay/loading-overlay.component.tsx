import React, { FC } from 'react'
import * as Styled from './loading-overlay.styles'

const LoadingOverlay: FC = () => {
  return (
    <Styled.LoaderOverlay>
      <Styled.LogoLoader alt={'Pat Randell'} src={'PR.png'} />
    </Styled.LoaderOverlay>
  )
}

export default LoadingOverlay
