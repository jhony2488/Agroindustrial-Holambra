import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Wrap } from './styles';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button'
import { TextFieldInput } from '../../components/Forms/TextFieldInput';
import { listNav2, listNavBar } from '../../utils/nav/list';

// import { Container } from './styles';

const NewProspect: React.FC = () => {

  return (
    <Wrap>
      <NavBar nameUser={`jhony`} listNav={listNavBar} imageProfile='https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' />
      <Grid className='content' container spacing={4}>
        <Grid item xs={2.5}>
          <Sidebar listNav={listNav2} />
        </Grid>
        <Grid item xs={8.9}>
          <Box
            sx={{
              display: 'grid',
              justifyContent: 'center',
            }}
          >
            <TextFieldInput name='name' placeholder="Jhony Araujo" label="Nome" />
            <TextFieldInput name='document' placeholder="055.440.524.56" label="Documento" />
            <TextFieldInput name='email' placeholder="jhony.araujo2488@gmail.com" label="Email" />
            <TextFieldInput name='phone' placeholder="99 9 9999-9999" label="Telefone" />
            <TextFieldInput name='adderess' placeholder="RUa da prosperidade number 12" label="Endereço" />
            <div className='button-submit'>
            <Button type="submit" onPress={()=>null }  text="Enviar"/>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default NewProspect;
