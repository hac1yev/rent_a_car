import React from 'react';
import { FormControl, Box, InputLabel, NativeSelect } from '@mui/material';
import { styled } from '@mui/system';

const styles = (theme) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: 'red',
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.primary.main,
  },
});

const fff = {
    display: 'flex'
}

const StyledBox = styled(Box)(({ theme }) => styles(theme));

const Filter = () => {
  return (
    <StyledBox sx={fff}>
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
    </StyledBox>
  );
};

export default Filter;
