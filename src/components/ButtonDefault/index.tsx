import { ButtonDefaultProps } from './interface'
import { Button } from './styles'

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({ text, disabled = false  }: ButtonDefaultProps) => {

  return (
    <Button type='submit' disabled={disabled} >{text}</Button>
  )
}
