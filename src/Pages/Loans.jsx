import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "name", name: "Name" },
  { id: "accountNumber", name: "Account Number" },
  { id: "loanAmount", name: "Loan Amount" },
  { id: "loanDuration", name: "Loan Duration" },
  { id: "viewUser", name: "Loan Info" },
];

const accountNumber = "123456789";

function Loans() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bankUsersList, editedUser } = useSelector((state) => state.bankUsers);
  const [rows, rowchange] = useState(bankUsersList);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  const handleViewUser = (user) => {
    navigate(`/customer-profile/${user?.accountNumber}`);
  };

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:8080/loans");
      rowchange(response?.data);
    })();
  }, []);

  return (
    <div style={{ textAlign: "center", width: "100%", overflow: "auto" }}>
      <Paper sx={{ m: 2 }}>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                    key={column.id}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows
                  .slice(page * rowperpage, page * rowperpage + rowperpage)
                  .map((row) => (
                    <TableRow key={row?._id}>
                      {columns &&
                        columns.map((column) => {
                          let value = row[column.id];
                          if (column.id === "viewUser") {
                            return (
                              <TableCell key={column.id}>
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  onClick={() => handleViewUser(row)}
                                >
                                  View
                                </Button>
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell key={column.id}>{value}</TableCell>
                            );
                          }
                        })}
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowperpage}
          page={page}
          count={rows.length}
          component="div"
          onPageChange={(event, newpage) => pagechange(newpage)}
          onRowsPerPageChange={(event) => {
            rowperpagechange(+event.target.value);
            pagechange(0);
          }}
        />
      </Paper>
    </div>
  );
}

export default Loans;
