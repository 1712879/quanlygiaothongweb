import React, { useEffect } from "react";
//import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";

import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  IDBanGhi,
  LoaiXe,
  BienSo,
  TenChuXe,
  NgayTao,
  NgayCapNhat,
  TrangThai
) {
  return {
    IDBanGhi,
    LoaiXe,
    BienSo,
    TenChuXe,
    NgayTao,
    NgayCapNhat,
    TrangThai,
  };
}

const rows = [
  createData(
    "1",
    "Exciter 150",
    "NULL",
    "Nguyễn Văn An",
    "2020/07/15 10:10:10 AM",
    "2020/07/15 10:10:10 AM",
    "Chưa"
  ),
  createData(
    "2",
    "Airblade 150",
    "NULL",
    "Phạm Văn B",
    "2020/07/15 10:10:10 AM",
    "2020/07/15 10:10:10 AM",
    "Duyệt"
  ),
  createData(
    "3",
    "Airblade 150",
    "NULL",
    "Phạm Văn B",
    "2020/07/15 10:10:10 AM",
    "2020/07/15 10:10:10 AM",
    "Duyệt"
  ),
];

const LuuTruXe = () => {
  const classes = useStyles();

  const XuLyGuiXoa = (ID) => {
    console.log(ID);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ XuLy: "XoaBanGhi", IDBanGhi: ID }),
    };
    fetch(
      "https://jsonplaceholder.typicode.com/posts",
      requestOptions
    ).then((response) => response.json());
    //then();
  };

  return (
    <Grid container spacing={3}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID bản ghi</TableCell>
              <TableCell align="center">Loại Xe</TableCell>
              <TableCell align="center">Biển Số</TableCell>
              <TableCell align="center">Tên chủ xe</TableCell>
              <TableCell align="center">Ngày Tạo</TableCell>
              <TableCell align="center">Ngày Cập Nhật</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Xử lý</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">
                  <Badge badgeContent={row.IDBanGhi} color="primary"></Badge>
                </TableCell>
                <TableCell align="center">{row.LoaiXe}</TableCell>
                <TableCell align="center">{row.BienSo}</TableCell>
                <TableCell align="center">{row.TenChuXe}</TableCell>
                <TableCell align="center">{row.NgayTao}</TableCell>
                <TableCell align="center">{row.NgayCapNhat}</TableCell>
                {row.TrangThai == "Duyệt" ? (
                  <TableCell align="center">
                    <Badge badgeContent={row.TrangThai} color="primary"></Badge>
                  </TableCell>
                ) : (
                  <TableCell align="center">
                    <Badge badgeContent={row.TrangThai} color="error"></Badge>
                  </TableCell>
                )}
                <TableCell style={{ display: "inline-flex" }}>
                  <Button
                    onClick={() => XuLyGuiXoa(row.IDBanGhi)}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  ></Button>
                  <Link to={`/admin/CapNhatBanGhi/${row.IDBanGhi}`}>
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                    ></Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Grid item xs={6}>
            </Grid>
            <Grid item xs>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >

                </Button>
            </Grid>
            <Grid item xs>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                >

                </Button>
            </Grid>
            <Grid item xs>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                >
                </Button>
            </Grid> */}
    </Grid>
  );
};

export default LuuTruXe;
