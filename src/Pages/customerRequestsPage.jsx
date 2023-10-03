import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

function CustomersRequestsPage() {
  const [rows, rowchange] = useState(mockData); // Use mockData as initial data
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);

  // ... (useEffect fetching data logic remains unchanged)

  return (
    <div style={{ textAlign: "center" }}>
      <Paper sx={{ width: "90%", marginLeft: "5%", mt: 2 }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  Account Number
                </TableCell>
                <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  Account Holder Name
                </TableCell>
                <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  Customer Request
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows
                  .slice(page * rowperpage, page * rowperpage + rowperpage)
                  .map((row, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell>{row.accountNumber}</TableCell>
                        <TableCell>{row.accountHolderName}</TableCell>
                        <TableCell>{row.accountHolderRequest}</TableCell>
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

export default CustomersRequestsPage;

let mockData = [
  {
    accountNumber: 123456789,
    accountHolderName: "vivek",
    accountHolderRequest: "mobilenumber change",
  },
  // Add more mock data objects if needed
];
