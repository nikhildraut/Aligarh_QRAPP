import React, { useContext,useState,useEffect } from 'react';
// import { useGeolocated } from 'react-geolocated';
import { Box, Button, TextField, Modal} from "@mui/material";
import { Formik, withFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from '@mui/material/MenuItem';
import QrReader from 'react-qr-reader2';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
// import Modal from 'react-bootstrap/Modal';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import GridOnIcon from '@mui/icons-material/GridOn';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';
import swal from 'sweetalert';

// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
// import { AlertTitle } from '@mui/material';

import * as Yup from 'yup';
//import { QrReader } from 'react-qr-reader';
import ShopContext from "../../context/shop-context";


const Form = props => {

  const context = useContext(ShopContext);
  const isNonMobile = useMediaQuery("(min-width:600px)");

//24-01-2023
  const [latitude,setLatitude]= useState(null);
  const [longitude,setLongitude]= useState(null);
//29-01-2023
  const [result, setResult] = useState("");
  const [poleno, setPoleno] = useState(null)
  const [noperpole, setNoperpole] = useState(null)
  const [direction, setDirection] = useState(null)
  const [griddata, setGriddata] = useState(context.cart)

  //17-03-2023

  const regex = /^[0-9A-Fa-f]{4}-[0-9A-Fa-f]{16}$/gm;

  //17-03-2023
  //18-04-2023

  useEffect(()=> {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  },[]);

//24-01-2023


//25-01-2023
const style = {

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt:2,
  px:4,
  pb:3,

};

  const [open, setOpen]= React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

//25-01-2023

//29-01-2023
const handleScan = (data) => {
  if(data) {
    setResult(data);
    handleClose();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }
};

const handleError = (err) => {
  console.error(err);
};

//29-01-2023

  //ADDED FOR MODAL can be removed later
  const[show,setShow]= useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [scanResultWebCamParent, setScanResultWebCamParent] =  useState('');
  //till here


  const handleFormSubmit = e => {
    e.preventDefault()
    //console.log(values);
    // alert(poleno);
    // return;
    //alert(noperpole);
    //alert(direction);
    //alert(longitude);

    if(!result) {
      
      swal("MacAddress", "Cannot be empty", "error");
      

      // <Alert severity="error">
      // <AlertTitle>Error</AlertTitle>
      // This is an error alert — <strong>check it out!</strong>
      // </Alert>
 
   

      }    
    else if(!regex.test(result)){
        swal(" Invalid MacAddress", "Scan the correct QR code", "error");
        
  
      }
    else if(!poleno){
      swal("Pole No.", "Cannot be empty", "error");
      // alert("Pole No. cannot be empty");

    }
    else {
      let devR=result.trim().slice(5);
      let newItem ={
        "sourceMacAddress": devR,
        "poleNo": poleno,
        "numberOfLights": noperpole,
        "lightSide": direction,
        "latitude": longitude,
        "longitude": latitude
      }  
  
      const updatedCart = [...context.cart];
      const updatedItemIndex = updatedCart.findIndex(
        item => item.sourceMacAddress === newItem.sourceMacAddress
      );
  
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...newItem});
      } else {      
        updatedCart[updatedItemIndex] = newItem;
      }
  
      context.cart = updatedCart;
      //const[items,setItems]= useState(updatedCart);
  
      localStorage.setItem('items',JSON.stringify(context.cart));
      swal("Submitted", "Saved to List", "success");

    }


    
    
    //localStorage.getItem('')  

    // try{

    //   localStorage.setItem('items',JSON.stringify(context.cart));

    // }catch(err){
    //   if(isQuotaExceededError(err)){
    //     console.log(err);
    //   }else {
        
    //      // SHOUld Handle the case where the localStorage API is not supported.

    //   }
    // }
    
 
    


  
  };



  const LightperPole = [
    {
      value: '1',
      label: 'One',
    },
    {
      value: '2',
      label: 'Two',
    },
    {
      value: '3',
      label: 'Three',
    },
    {
      value: '4',
      label: 'Four',
    },
  ];


  const LightSide = [
    {
      value: 'NONE',
      label: 'None',
    },
    {
      value: 'LEFT',
      label: 'Left',
    },
    {
      value: 'RIGHT',
      label: 'Right',
    },
    {
      value: 'CENTER',
      label: 'Center',
    },
  ];

//02-02-2023
// const []
//02-02-2023
  



  return (
    <Box m="20px">
      <Header title="" subtitle="" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        // validationSchema={checkoutSchema}
        
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          onChange,          
          handleSubmit,
         
          
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? "span 2"  : "span 4" },
              }}
            >
              <TextField
                disabled
                name="macAddress"
                id="standard-disabled"
                label="Mac Address"
                defaultValue="Mac Address"
                value={result}
                variant="standard"
                error={!!touched.macAddress && !!errors.macAddress}
                helperText={touched.macAddress && errors.macAddress}
                //onChange={event => set(event.target.value)}
              />

            {/* Modal implementation 25-01-2023 */}
            <Box display="flex"  mt="30px">
            <Tooltip title="Scan QR">
            <Button variant="primary" color="secondary" onClick={handleOpen}   endIcon={<QrCodeScannerOutlinedIcon/>}>
            
            </Button>
            </Tooltip>
            </Box>

            <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            >
            <Box sx={{ ...style, width: 300 }}>
            <h2 id="child-modal-title">{<QrCodeScannerIcon/>}   Scan Lens</h2>
            <p id="child-modal-description">           
            </p>


            {/* <div> */}
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
              />
              <p id="simple-modal-description">{result}</p>
              {/* <p>{this.state.result}</p> */}
            {/* </div> */}


            {/* <DeviceList></DeviceList> */}
            <IconButton onClick={handleClose}>
            <CloseIcon/>
            </IconButton>
            Cancel
            
            </Box>
            </Modal>
            
            


            {/* Modal implementation 25-01-2023 */}




            {/* Added for Modal implementation from here */}

            {/* <> */}
            {/* <Button variant="primary" color="secondary" onClick={handleShow} startIcon={<QrCodeScannerOutlinedIcon />} endIcon={<CameraAltIcon />}>
            Qr Scanner
            </Button> */}
            
          {/* <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
        <Modal.Title>QR Scanner <DeviceList></DeviceList></Modal.Title>
        </Modal.Header>
        <Modal.Body>QR Scanner should be shown here in the center.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal> */}

            {/* </> */}
  


            {/* <Box display="flex" justifyContent="end" mt="20px"> */}
              {/* <Button type="submit" color="secondary" variant="contained" startIcon={<QrCodeScannerOutlinedIcon />}>
                Qr Scanner
              </Button> */}
  
            {/* </Box> */}
              {/* <Button type="submit" color="secondary" variant="contained" startIcon={<QrReader/>}>
                Qr
              </Button> */}

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pole No."
                onBlur={handleBlur} 
                onChange={event => setPoleno(event.target.value)}               
                //value={values.poleNo}
                name="poleNo"
                error={!!touched.poleNo && !!errors.poleNo}
                helperText={touched.poleNo && errors.poleNo}
                sx={{ gridColumn: "span 1" }}
                
              />

              <TextField
                id="outlined-select-Lightsperpole"
                name= "numberOfLights"
                select
                label="No. of Lights per Pole"
                defaultValue="one"
                helperText="Please select your no. of Lights"
                onChange={event => setNoperpole(event.target.value)}  
                sx={{ gridColumn: "span 1" }}                
              >
                {LightperPole.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                id="outlined-select-Lightside"
                select
                label="Lights Side"
                defaultValue="one"
                helperText="Direction of Light"
                onChange={event => setDirection(event.target.value)}               
              >
                {LightSide.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

            <TextField
              type="text"
              name="latitude"
              placeholder="Latitude"
              label="Latitude"
              value={latitude || ''}
              sx={{ gridColumn: "span 1" }}
              disabled
            />
            <TextField
              type="text"
              name="latitude"
              placeholder="Latitude"
              label="Longitude"
              value={longitude || ''}
              sx={{ gridColumn: "span 1" }}
              disabled
            />
            </Box>
            <Box display="flex"  mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit} startIcon={<SendIcon/>} endIcon={<GridOnIcon/>}>
                Save to List
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    
    
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;




//Submiting the form implemented later



      //   Geolocation.getCurrentPosition(
      //     (position) => {
      //         console.warn("Position " + position.coords.latitude + " " + position.coords.longitude);
      //     },
      //     (error) => {
      //         // See error code charts below.
      //         console.warn("Error " + error.code, error.message);
      //     },
      //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, }
      // );


//Implemented till here


// const checkoutSchema = yup.object().shape({
//   // qrResult: Yup.string().required('QR result is required'),
//   // macAddress: yup.number().required("required pole no."),
//   macAddress: Yup.string()
//     .matches(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/, 'Invalid MAC address')
//     .required('Mac address is required'),
//   poleNo: yup.string().required("required pole no."),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });

const initialValues = {

  macAddress: "",
  poleNo: "",
  numberOfLights: "",
  lightSide: "",
  latitude: "",
  longitude: "",

};

export default Form;
