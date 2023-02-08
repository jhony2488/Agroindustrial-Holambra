import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import api from '../../services/api';
import { Wrap } from './styles';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/NavBar'
import { listNav, listNavBar } from '../../utils/nav/list';

// import { Container } from './styles';

const Home: React.FC = () => {
  const [listOS, setListOS] = useState< []>([]);

  const getProspects = useCallback(async () => {

    const { data } = await api.get(`/prospects`);
    setListOS(data);
  }, []);

  useEffect(() => {
    getProspects();
  }, [getProspects]);

  return (
    <Wrap>
      <NavBar nameUser={'jhonhy'} listNav={listNavBar} imageProfile='https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' />
      <Grid className='content' container spacing={4}>
        <Grid item xs={2.5}>
          <Sidebar listNav={listNav} />
        </Grid>
        <Grid item xs={8.9}>
          <></>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default Home;
