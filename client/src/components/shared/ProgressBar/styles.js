import styled, { css, keyframes } from 'styled-components';

const lightGreen = '#44E336';

const pulse = props => keyframes`
  0% {
    width: ${(props.progress - props.progressStep) * props.width / 100}px;
  }
  100% {
    width: ${props.progress * props.width / 100}px;
  }
`

const animation = props =>
  css`
    ${pulse} ${props.animationLength} forwards;
  `

export const ProgressBar = styled.div`
  animation: ${animation};
  animation-duration: 2s;
  height: 35px;
  background: ${props => props.color ? props.color : lightGreen};
  display: inline-block;
  border-radius: 20px;
`

export const ProgressBarContainer = styled.div`
  width: ${props => props.width};
  height: 35px;
  border: 1px solid #DFDAFD;
  border-radius: 20px;
`