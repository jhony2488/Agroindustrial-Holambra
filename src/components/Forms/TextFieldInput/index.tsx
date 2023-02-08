import { PropsTextField } from './interface';
import { Container, ErrorMessage, Input, Label } from './styles';
import { Icons } from '../icons';
import { MaskTypes } from '../masks';

export const TextFieldInput: React.FC<PropsTextField> = ({ icon, label, name, mask, width = '19.5rem', error, disabled,  ...rest }: PropsTextField) => {
  const currentIcon = Icons[icon];
  const maskInput = mask ? MaskTypes[mask] : false;

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Container width={width} error={error} disabled={disabled}>
        {currentIcon}
        <Input mask={maskInput} id={name} name={name} disabled={disabled} {...rest}/>
      </Container>
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </div>
  );
};
