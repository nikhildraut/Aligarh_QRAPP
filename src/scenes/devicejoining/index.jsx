import React,{ useContext,useState, useEffect } from 'react';
import { Box, Button, Icon, Typography, useTheme } from "@mui/material";
import { DataGrid , GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

import IconButton from '@mui/material/IconButton';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Collapse } from '@mui/material';
import { config } from '@fullcalendar/core';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

import { GridRenderCellParams } from "@mui/x-data-grid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
//import {Paper, SxProps } from "@mui/material";
//import { GridColDef, GridToolbarContainer, GridToolbarExport, GridRowProps, GridRowParams } from "@mui/x-data-grid";
import ShopContext from "../../context/shop-context";
import DeleteIcon from '@mui/icons-material/Delete';



const Devicejoining = props => {

  const context = useContext(ShopContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //const [clickedIndex, setClickedIndex] = React.useState(-1);
  
  //08.02.2023
  const [clickedRow, setClickedRow] = React.useState();

  const handleDelete = (e,row) => { 
    // e.stopPropagation();
    // setClickedRow(row);
    localStorage.removeItem('items');
  };

  //08.02.2023
 
  const columns = [
    // {
      // field: "deviceStatus",
      // headerName:"id",
      // renderCell: (cellValues: GridRenderCellParams<number>) => {
      //     return (<IconButton onClick={() => {clickedIndex === cellValues.value ? setClickedIndex(-1) : setClickedIndex(cellValues.value)}}>{cellValues.value === clickedIndex ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</IconButton>)
      // },
      // width: 5
    // },
    { field: "sourceMacAddress", headerName: "Mac Address",editable: false },
    {
      field: "poleNo",
      headerName: "Pole No.",
      flex: 1,
      cellClassName: "name-column--cell",
      editable: false
      
    },
    {
      field: "numberOfLights",
      headerName: "No. of Lights per Pole",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      // hide: false,
      editable: true
      
   
    },   
    {
      field: "lightSide",
      headerName: "Light Side",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      // hide: true,
      editable: false
    },
    {
      field: "latitude",
      headerName: "Latitude",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      // hide: false,
      editable: true
    },
    {
      field: "longitude",
      headerName: "Longitude",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
      // hide: true,
      editable: true
    },
    // {
    //   headerName: "Actions",
    //   field: "actions",
    //   width: 100,
    //   renderCell: (params) => (
    //     <IconButton
    //       onClick={(e) => handleDelete(e,params.row)}
    //       variant="contained"
    //     >
    //       <DeleteIcon />
    //     </IconButton>
    //   ),
    // },

  ];
  
  //useEffect(() => {

  //getDevices().then(result=> result.data == null ? alert(result.error) : setData(result.data));    
    //alert(context.cart.length);
    //setData(formdata)
  // },[]);  

  const [data, setData] = useState([]);



  //03-02-2023





  // function getStorageValue(key,defaultValue){

  //   const saved = localStorage.getItem(key);
  //   const initial = JSON.parse(saved);
  //   return initial || defaultValue;

  // }
  
  // const useLocalStorage = (key, defaultValues) => {

  //   const [value,setValue] = useState( () => {
      
  //     return getStorageValue(key,defaultValue);

  //   });



// const [userData, setUserData] = useState("");

  // useEffect(() => {
  //   function checkUserData() {
  //     const item = localStorage.getItem('')
      
  //     if (item) {
  //       setUserData(item);
        
  //     }
  //     else {
  //       //if does not exist.
  //     }
  //   }
  
    // window.addEventListener('storage', checkUserData)
  
    // return () => {
    //   window.removeEventListener('storage', checkUserData)
    // }
  // }, [])

  const [selectionModelItems, setSelectionModel] = React.useState([]);


  React.useEffect(() => {
    const parsedArrayFromLocalStorage = JSON.parse(localStorage?.getItem("items") || "[]");
    const mappedArray = parsedArrayFromLocalStorage.map(item => {
      return item;

    }, [selectionModelItems]);
    console.log("log", mappedArray);    
    setSelectionModel(mappedArray);
    

  }, []);
  console.log("selectionModelItems from outsource is : ", selectionModelItems);



  //03-02-2023
  
  

 

 


  
  return (
    <ShopContext.Consumer>
    {context => (
    <Box m="20px">
      <Header title="Saved List Data" subtitle="" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
        checkboxSelection
        //03-02-2023 rows={context.cart} 
        rows={selectionModelItems} 
        columns={columns}
        getRowId={(row) => row?.sourceMacAddress}
        components={{ Toolbar: GridToolbar }}
        
        />
        <IconButton variant="contained" onClick={(e) => handleDelete(e,selectionModelItems)}> Delete List Data <DeleteIcon/></IconButton>
      </Box>
      
      
      
    </Box>
    
         )}
    </ShopContext.Consumer>
  
  );

};

export default Devicejoining;

