import React from 'react'
import { BulletNotification, Container, IconBell } from './styles'
import { NotificationProps } from './interfaces'

const ButtonNotification=({
  containsNotification = false,
  onPress,
}: NotificationProps)=> {
  return (
    <Container onClick={onPress}>
      <IconBell />
      <BulletNotification containsNotification={containsNotification} />
    </Container>
  )
}

export default ButtonNotification
