import React from 'react';
import { FormControl, Box, InputLabel, NativeSelect } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { styled } from '@mui/system';


const styles = (theme) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'transparent',
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.primary.main,
  },
});

const styledBox = {
  display: 'flex',
};

const StyledBox = styled(Box)(({ theme }) => styles(theme));

const Filter = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledBox sx={styledBox}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
        <FormControl>
            <DatePicker label="Basic date picker" />
        </FormControl>
      </StyledBox>
    </LocalizationProvider>
  );
};

export default Filter;
