import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



function LoanApplicationForm() {

  const [identityNumber, setIdentityNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [monthlyIncome, setMontlyInCome] = useState();
  const [collateralIdentityno, setCollateralIdentityno] = useState();
  const [collateralValue, setCollateralValue] = useState();

  const [loan, setLoan] = useState({
    loanResult: false, loanLimit: 0, errorMessage: "", identityNumber: "", fullName: "",
    monthlyIncome: null, collateralIdentityno: null, collateralValue: null, birthDate: null, phoneNumber: null
  });

  const [state, setState] = useState(0);

  const [birthDate, setBirthDate] = useState(dayjs('2023-01-01T21:11:54'));

  const handleChange = (newValue) => {
    setBirthDate(newValue);
  };


  const saveLoanApplicationForm = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      identityNumber: identityNumber,
      fullName: fullName,
      phoneNumber: phoneNumber,
      monthlyIncome: monthlyIncome,
      birthDate: birthDate,
      collateralIdentityno: collateralIdentityno,
      collateralValue: collateralValue
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("/api/v1/forms", requestOptions)
      .then(response => response.json())
      .then((result) => {
        setLoan(result);
        console.log(result);
        console.log(state)
      })
      .then(
        (error) => {
        }
      )
      .catch(error => console.log('error', error));

  }

  const handleSubmit = () => {
    setState(1);
    saveLoanApplicationForm();
  }

  const handleIdentityNumber = (value) => {
    setIdentityNumber(value);
  }

  const handleFullName = (value) => {
    setFullName(value);
  }

  const handleMontlyInCome = (value) => {
    setMontlyInCome(value);
  }
  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  }

  const handleCollateralIdentityno = (value) => {
    setCollateralIdentityno(value);
  }
  const handleCollateralValue = (value) => {
    setCollateralValue(value);
  }

  return (
    <Container maxWidth="sm" >
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
          bgcolor: '#cfe8fc',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <h1>Loan Application Form</h1>
          <Typography>
          </Typography>
          <TextField
            required
            id="outlined-required"
            label="Identity Number"
            inputProps={{ maxLength: 11 }}
            onChange={(i) => handleIdentityNumber(i.target.value)}
          />
            {loan.identityNumber !== null && state > 0 ? <Typography variant="body2" color="text.secondary"> {loan.identityNumber}</Typography> : <></>}
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            inputProps={{ maxLength: 30 }}
            onChange={(i) => handleFullName(i.target.value)}
          />
           {loan.fullName !== null && state > 0 ? <Typography variant="body2" color="text.secondary"> {loan.fullName}</Typography> : <></>}
          <TextField
            required
            id="outlined-required"
            label="Montly In Come"
            inputProps={{ maxLength: 10 }}
            onChange={(i) => handleMontlyInCome(i.target.value)}
          />
           {loan.monthlyIncome !== null && state > 0 ? <Typography variant="body2" color="text.secondary">{loan.monthlyIncome}</Typography> : <></>}
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            inputProps={{ maxLength: 10 }}
            onChange={(i) => handlePhoneNumber(i.target.value)}
          />
           {loan.phoneNumber !== null && state > 0 ? <Typography variant="body2" color="text.secondary">{loan.phoneNumber}</Typography> : <></>}
          <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DesktopDatePicker
              label="Birth Date"
              inputFormat="MM/DD/YYYY"
              value={birthDate}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />

          </LocalizationProvider>
          <TextField
            id="outlined-required"
            label="Collateral Idenity No"
            inputProps={{ maxLength: 10 }}
            onChange={(i) => handleCollateralIdentityno(i.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Collateral Value"
            inputProps={{ maxLength: 20 }}
            onChange={(i) => handleCollateralValue(i.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} variant="contained">APPLY
        </Button>

        {loan.loanResult === true && state > 0 ? <Typography variant="body2" color="text.secondary">Loan Application Result : Your application has been accepted. Your Loan Limit : {loan.loanLimit}</Typography> : <></>}
        {loan.loanResult === false && state > 0 ? <Typography variant="body2" color="text.secondary">Loan Application Result : Your application has not been accepted.</Typography> : <></>}
        {loan.errorMessage !== null && state > 0 ? <Typography variant="body2" color="text.secondary">{loan.errorMessage}</Typography> : <></>}
      
      </Box>
    </Container>
  );
}

export default LoanApplicationForm;