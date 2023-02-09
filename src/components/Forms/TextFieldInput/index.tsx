import { PropsTextField } from './interface';
import { Container, ErrorMessage, Input, Label } from './styles';
import { MaskTypes } from '../masks';

export const TextFieldInput: React.FC<PropsTextField> = ({ label, name, mask, width = '19.5rem', error, disabled, ...rest }: PropsTextField) => {
  const maskInput = mask ? MaskTypes[mask] : false;

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Container width={width} error={error} disabled={disabled}>
        <Input mask={maskInput} id={name} name={name} disabled={disabled} {...rest} />
      </Container>
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </div>
  );
};
