import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 0;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  border-radius: var(--br-l);
  /* box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2); */
  /* max-width: 50%; */
  background: var(--color-subtle-background);
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-subtle-background);
`

export default function VideoPlayer({ src, ...props }) {
  return (
    <Wrapper>
      <Iframe
        title={'camera-stream'}
        src={src}
        frameBorder="0"
        autoPlay={false}
      />
    </Wrapper>
  )
}
