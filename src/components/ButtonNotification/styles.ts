import styled from 'styled-components'
import { Bell } from 'phosphor-react'
import { NotificationProps } from './interfaces'

export const Container = styled.div`
  position: relative;
  width: 23px;
  height: 23px;
`
export const BulletNotification = styled.div<NotificationProps>`
  width: 6px;
  height: 6px;
  border-radius: 100px;

  position: absolute;
  top: 2.5px;
  right: 1px;

  opacity: ${({ containsNotification }) => (containsNotification ? 1 : 0)};
  background-color: #E00707;
`
export const IconBell = styled(Bell).attrs(({ theme }) => ({
  size: 26,
  weight: 'regular',
  color: theme?.palette?.grey['700'] || '#373942',
}))``
