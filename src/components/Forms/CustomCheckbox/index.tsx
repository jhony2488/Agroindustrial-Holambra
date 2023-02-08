import React, { useState } from 'react';
import { CheckboxProps } from './interface';
import { CheckContainer, Container, ErrorMessage, Wrap } from './styles';
import { Check } from 'phosphor-react';

// import { Container } from './styles';

const CustomCheckbox: React.FC<CheckboxProps> = ({ label, name, onChange, error }) => {
  const [ checked, setChecked ] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)
    onChange()
  }

  return (
    <div>
      <Wrap>
        <Container>
          <CheckContainer checked={checked}  onClick={() => handleChecked()}>
            <Check color='white' weight='bold' size={15}/>
          </CheckContainer>
        </Container>
        <span>{label}</span>
      </Wrap>
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </div>
  );
};

export default CustomCheckbox;
