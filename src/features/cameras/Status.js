import React, { useEffect, useRef, useState } from 'react'
// import Lottie from 'react-lottie-with-segments'
import animationData from 'assets/lottie/online-offline.json'
import lottie from 'lottie-web'
import { Avatar } from '@material-ui/core'

// const onlineViewBox = '93 125 34 50'
// const inactiveViewBox = '177 110 45 80'
// const offlineViewBox = '272 110 38 80'

const idle = [66, 67]
const offlineToOnlineSeg = [0, 66]
const onlineToOfflineSeg = [66, 198]

// export default function Status({ isOnline = false, isActive = false }) {
export default function Status({ isOnline = false, isActive = false }) {
  // const [isOnline, setIsOnline] = useState(true)
  // const [isActive, setIsActive] = useState(false)

  const container = useRef()
  const [animation, setAnimation] = useState()

  useEffect(() => {
    if (animation)
      switch (isOnline) {
        case false:
          animation.playSegments([onlineToOfflineSeg], true)
          break
        case true:
          animation.playSegments([offlineToOnlineSeg], true)
          break
        default:
          break
      }
    // eslint-disable-next-line
  }, [isOnline, isActive, animation])

  useEffect(() => {
    if (!animation) {
      setAnimation(
        lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData,
          rendererSettings: {
            progressiveLoad: true,
          },
        }),
      )
    }
  }, [animation])

  return (
    <Avatar
      style={{
        color: `var(--color-${isOnline ? 'success' : 'error'})`,
        background: `var(--color-${isOnline ? 'success' : 'error'}-background)`,
        transition: 'all 200ms ease-in',
      }}
    >
      <div
        style={{ height: 24, width: 24, margin: '0 auto' }}
        ref={container}
        // onClick={() => setIsOnline(!isOnline)}
      />
    </Avatar>
  )
}
