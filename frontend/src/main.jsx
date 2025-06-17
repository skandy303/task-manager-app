import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1565c0', // dark blue
      contrastText: '#fff', // ensure text is readable
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff', // ensure button text is readable
        },
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
