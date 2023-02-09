import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import api from '../../services/api';
import { Wrap } from './styles';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/NavBar';
import Table from '../../components/Table'
import ModalForm from '../../components/ModalCardForm'
import { listNav, listNavBar } from '../../utils/nav/list';

// import { Container } from './styles';

const Home: React.FC = () => {
  const [listProspects, setListProspects] = useState< []>([]);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [id, setId] = useState<number | string>();
  const [valuesGet, setGetValues] = useState<number | string>();

  const headTable=['Nome', 'Documento', 'Email', 'Phone', 'Endereço', 'Ações']

  const getProspects = useCallback(async () => {
    const { data } = await api.get(`/prospects`);
    setListProspects(data);
  }, []);

  useEffect(() => {
    getProspects();
  }, [getProspects]);

  useEffect(() => {
    getProspects();
  }, []);

  return (
    <Wrap>
      <NavBar nameUser={'jhonhy'} listNav={listNavBar} imageProfile='https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg' />
      <ModalForm show={openModalEdit} id={id}  onRequestClose={()=>setOpenModalEdit(true)}/>
      <Grid className='content' container spacing={4}>
        <Grid item xs={2.5}>
          <Sidebar listNav={listNav} />
        </Grid>
        <Grid item xs={8.9}>
          <Table TableContent={listProspects} openModal={()=>setOpenModalEdit(true)} setValueGet={setGetValues} tableHead={headTable}/>
        </Grid>
      </Grid>
    </Wrap>
  );
};

export default Home;
