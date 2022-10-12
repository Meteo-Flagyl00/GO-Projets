import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, lastName,email, age, sexe) {
  return {name, lastName, email, age, sexe};
}

const rows = [
  createData('Frozen', 'Salim', 'frozen.mail@gmail.com', 35,'Male' ),
  createData('Sandwich', 'Hamid', 'hamid.san00@gmail.com', 22, 'Male'),
  createData('Eclair', 'Karim', 'karim.wez33@gmail.com', 33,'Male'),
  createData('Cupcake', 'Sanae', 'sand.cup77@gmail.com', 25, 'Female'),
];

export default function BasicTable() {

  return (
    <div className="table">
      
    <TableContainer component={Paper}
    style={{boxShadow:'0 13px 20px 0 #00808029'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">LastName</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Sexe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.sexe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
