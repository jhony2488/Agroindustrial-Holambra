import React, { useCallback, useState } from 'react';
import { NotePencil, TrashSimple } from 'phosphor-react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import api from '../../services/api';
import { ActionButton, ActionButtons } from './styles'
import { Props } from './interfaces'

const BasicTable = ({ tableHead, TableContent, openModal }: Props) => {
  const [content, setContent] = useState(TableContent)

  const deleteProspects = useCallback(async (id: number | string) => {
    const result = content.map((item) => {
      if (item.id == id) {
        return;
      }
      return item;
    })
    setContent(result)

    await api.delete(`/prospects/${id}`);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((item: string, index) => {
              if (index > 0) {
                return <TableCell key={index} align="center">{item}</TableCell>
              }
              return <TableCell key={index}>{item}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {TableContent.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.document}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center" scope="row">{row.address}</TableCell>
              <TableCell align="center" scope="row">
                <ActionButtons>
                  <ActionButton>
                    <NotePencil size={28} onClick={() => openModal()} />
                  </ActionButton>
                  <ActionButton>
                    <TrashSimple size={28} onClick={() => deleteProspects(row.id)} color="red" />
                  </ActionButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
