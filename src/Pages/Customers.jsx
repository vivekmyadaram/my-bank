import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { customerEdit } from "../Store/accountHolderSlice";
import axios from "axios";

const columns = [
  { id: "name", name: "Name" },
  { id: "username", name: "Username" },
  { id: "accountNumber", name: "Account Number" },
  { id: "accountType", name: "Account Type" },
  { id: "branchName", name: "Branch Name" },
  { id: "viewUser", name: "User Info" },
  { id: "editUser", name: "Edit User" },
  { id: "deleteUser", name: "Delete User" },
];

const accountNumber = "123456789";

function BankCustomers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bankUsersList, editedUser } = useSelector((state) => state.bankUsers);
  const [rows, rowchange] = useState(bankUsersList);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  const handleViewUser = (user) => {
    navigate(`/user/${user?.accountNumber}`);
  };

  const deleteCustomerFromDb = async (cust) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/user/${cust?.accountNumber}`
      );
      console.log(response);
      toast.success(
        `user AccNO:${response?.data?.accountNumber} deleted succussfully!`
      );
    } catch (error) {
      console.error("Error fetching or deleting data: ", error.message);
    }
  };

  const editCustomer = async (cust) => {
    dispatch(customerEdit(cust));
    navigate(`/edit-user/${cust?.accountNumber}`);
  };

  useEffect(() => {
    (async function () {
      const response = await axios.get("http://localhost:8080/users");
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
                          } else if (column.id === "editUser") {
                            return (
                              <TableCell key={column.id}>
                                <Button
                                  variant="outlined"
                                  color="warning"
                                  onClick={() => editCustomer(row)}
                                >
                                  Edit
                                </Button>
                              </TableCell>
                            );
                          } else if (column.id === "deleteUser") {
                            return (
                              <TableCell key={column.id}>
                                <Button
                                  variant="outlined"
                                  color="error"
                                  onClick={() =>
                                    confirm("Are You Sure?") &&
                                    deleteCustomerFromDb(row)
                                  }
                                >
                                  Delete
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

export default BankCustomers;
