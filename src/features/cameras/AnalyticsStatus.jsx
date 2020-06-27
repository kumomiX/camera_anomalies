import React from 'react'
import { Avatar, Tooltip } from '@material-ui/core'
import {
  UilSmileBeam,
  UilExclamationCircle,
  UilMinusCircle,
} from '@iconscout/react-unicons'

export default function AnalyticsStatus({ active, anomaly = true, ...props }) {
  const Icon = active
    ? !anomaly
      ? UilSmileBeam
      : UilExclamationCircle
    : UilMinusCircle
  return (
    <Tooltip
      title={
        active
          ? !anomaly
            ? 'Проблем не обнаружено'
            : 'Мы обнаружили проблему!'
          : 'Аналитика отключена'
      }
    >
      <Avatar
        style={{
          color: `var(--color-${!anomaly ? 'success' : 'error'})`,
          background: `var(--color-${
            !anomaly ? 'success' : 'error'
          }-background)`,
          transition: 'all 200ms ease-in',
        }}
      >
        <Icon />
      </Avatar>
    </Tooltip>
  )
}
