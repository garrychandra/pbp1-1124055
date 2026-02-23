import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.tsx'
import { BrowserRouter} from 'react-router'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AppRoutes } from './config/AppRoutes'
import { Layout } from './components/Layout'

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 3
      }
    },
    MuiCard: {
      defaultProps: {
        variant: 'outlined'
      }
    },
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
        </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

