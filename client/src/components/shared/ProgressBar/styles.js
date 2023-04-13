import styled, { css, keyframes } from 'styled-components';

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
  height: 20px;
  background: ${props => props.color ? props.color : '#58cc02'};
  display: inline-block;
`

export const ProgressBarContainer = styled.div`
  width: ${props => props.width};
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`