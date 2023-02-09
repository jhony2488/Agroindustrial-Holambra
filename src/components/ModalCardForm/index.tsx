import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import api from '../../services/api';
import {
  Modal, Box
} from '@mui/material';
import { PropsModal } from './types'
import { TextFieldInput } from '../Forms/TextFieldInput';
import Button from '../Button'

import {
  Container,
  Wrapper,
} from './styles';

const ModalCard = ({
  show,
  onRequestClose,
  id,
  valuesDefault
}: PropsModal) => {
  const [valuesGet, setGetValues] = useState(valuesDefault);
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' });

  const updateProspects = useCallback(async (id: number | string, values) => {
    await api.put(`/prospects/${id}`, values);
  }, []);

  return (

    <Modal open={show}
      onClose={onRequestClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Wrapper isMobile={isMobile}>
          <Box
            sx={{
              display: 'grid',
              justifyContent: 'center',
            }}
          >
            <TextFieldInput name='name' placeholder="Jhony Araujo" label="Nome" onChange={(value) => {
              console.log(value)
            }} value={valuesGet.name}/>
            <TextFieldInput name='document' placeholder="055.440.524.56" label="Documento" />
            <TextFieldInput name='email' placeholder="jhony.araujo2488@gmail.com" label="Email" />
            <TextFieldInput name='phone' placeholder="99 9 9999-9999" label="Telefone" />
            <TextFieldInput name='adderess' placeholder="RUa da prosperidade number 12" label="Endereço" />
            <div className='button-submit'>
              <Button type="submit" onPress={() => updateProspects(id, valuesGet)} text="Enviar" />
            </div>
          </Box>
        </Wrapper>

      </Container>
    </Modal>

  );
};

export default ModalCard;
