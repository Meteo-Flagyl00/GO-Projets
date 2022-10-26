import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "./Table.css";

export default function BasicTable() {
  //get data from api 'axios'

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="table">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0 13px 20px 0 #00808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">#ID</TableCell>
              <TableCell align="left">FirstName</TableCell>
              <TableCell align="left">LastName</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Nationality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{user.id}</TableCell>
                <TableCell align="left">{user.first_name}</TableCell>
                <TableCell align="left">{user.last_name}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.nationality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
