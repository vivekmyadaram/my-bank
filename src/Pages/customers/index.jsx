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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerEdit } from "../../Store/accountHolderSlice";

const columns = [
  { id: "_id", name: "Id" },
  { id: "name", name: "Name" },
  { id: "username", name: "Username" },
  { id: "accountType", name: "Account Type " },
  { id: "branchName", name: "Branch Name" },
  { id: "viewUser", name: "User Info" },
  { id: "editUser", name: "Edit User" },
  { id: "deleteUser", name: "Delete User" },
];

function BankCustomers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bankUsersList, editedUser } = useSelector((state) => state.bankUsers);

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };
  const [rows, rowchange] = useState(bankUsersList);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("http://localhost:8080/customers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        rowchange(data);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    })();
  }, []);
  const deleteCustomerFromDb = async (cust) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:8080/customers/${cust?._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            /* specify the data to delete here */
          }),
        }
      );
      toast.success("customer deleted succussfully");
      if (!deleteResponse.ok) {
        throw new Error("Delete request failed");
      }
    } catch (error) {
      console.error("Error fetching or deleting data: ", error.message);
    }
  };
  const editCustomer = (cust) => {
    dispatch(customerEdit(cust));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Paper sx={{ width: "90%", marginLeft: "5%" }}>
        <TableContainer sx={{ maxHeight: 450 }}>
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
                  .map((row, i) => {
                    return (
                      <TableRow key={row?.id}>
                        {columns &&
                          columns.map((column, i) => {
                            let value = row[column.id];
                            {
                              if (column.id === "viewUser") {
                                return (
                                  <TableCell key={value}>
                                    <Button
                                      variant="outlined"
                                      color="primary"
                                      onClick={() =>
                                        alert(JSON.stringify(rows1[row.id]))
                                      }
                                    >
                                      View
                                    </Button>
                                  </TableCell>
                                );
                              } else if (column.id === "editUser") {
                                return (
                                  <TableCell key={value}>
                                    <Button
                                      variant="outlined"
                                      color="warning"
                                      onClick={() => {
                                        navigate("/edit-user");
                                        editCustomer(row);
                                      }}
                                    >
                                      Edit
                                    </Button>
                                  </TableCell>
                                );
                              } else if (column.id === "deleteUser") {
                                return (
                                  <TableCell key={value}>
                                    <Button
                                      variant="outlined"
                                      color="error"
                                      onClick={() =>
                                        confirm("Are You Sure?") &&
                                        // dispatch(deleteCustomer(row))
                                        deleteCustomerFromDb(row)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </TableCell>
                                );
                              }
                              {
                                return (
                                  <TableCell key={value}>
                                    {/* {column.id === "_id"
                                      ? value.slice(-3)
                                      : value} */}
                                    {value}
                                  </TableCell>
                                );
                              }
                            }
                          })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowperpage}
          page={page}
          count={rows.length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </Paper>
    </div>
  );
}

export default BankCustomers;
