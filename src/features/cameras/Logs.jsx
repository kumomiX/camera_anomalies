import React from 'react'
import { Typography } from '@material-ui/core'
import empty from 'assets/img/empty.png'

export default function CameraLogs() {
  return (
    <div>
      <Typography variant="h5" color="primary" gutterBottom>
        Логи
      </Typography>

      <img src={empty} style={{ maxWidth: '220px' }} alt="" />
      <Typography variant="h6" color="textSecondary">
        Тут пока ничего нет
      </Typography>
    </div>
  )
}
