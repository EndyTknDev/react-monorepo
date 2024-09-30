'use client';
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ToastContainer } from 'react-toastify';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; // Importa o locale em português

dayjs.locale('pt-br');

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={{}}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ToastContainer hideProgressBar />
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
