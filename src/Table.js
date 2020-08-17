import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from './data';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1000
  },
});


export default function DenseTable() {
  const classes = useStyles();


  let rows=[];
  data.map((v,k)=>{
    v['id']=k;
    v['parent']=0;
    rows.push(v);
    if(v.category.length>0){
      v.category.map((vv,kk)=>{
        vv['id']=k+"-"+kk;
        vv['parent']=1;
        rows.push(vv);
      });
    }
  });



  return (
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Feature</TableCell>
            <TableCell align="right">Sample Size (SMN) No.</TableCell>
            <TableCell align="right">SMN Formed, %</TableCell>
            <TableCell align="right">No SMN Formed, %</TableCell>
            <TableCell align="right">P-value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((v)=>{
              return(
                <TableRow key={v.id}>
                  <TableCell component="th" scope="row" style={v.parent==0?{fontWeight: 'bold'}:{paddingLeft:30}}>
                    {v.name&&v.name!==''?v.name:''}
                  </TableCell>
                  <TableCell align="right">{v.sampleSize&&v.sampleSize!==''?v.sampleSize.toLocaleString():''} {v.SMN&&v.SMN!==''?' ('+v.SMN.toLocaleString()+')':''}</TableCell>
                  <TableCell align="right">{v.pSMN&&v.pSMN!==''?v.pSMN:''}</TableCell>
                  <TableCell align="right">{v.pNoSMN&&v.pNoSMN!==''?v.pNoSMN:''}</TableCell>
                  <TableCell align="right">{v.p&&v.p!==''?v.p:''}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
  );
}
