import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Wrap } from './styles';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/NavBar'
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
          <></>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default NewProspect;
