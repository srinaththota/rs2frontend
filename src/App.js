import Login from './components/Login';
import { useSelector } from 'react-redux'
import './App.css';
import Home from './pages/home/Home';
import Header from './ui/Header';
import { ThemeProvider } from '@mui/styles'
import theme from './ui/Theme';
import AppRoutes from './pages/home/routes';

function App() {
  return(
  <ThemeProvider theme={theme}>
  <Header/>
  <AppRoutes/>
  
  </ThemeProvider>
)  
}

export default App;
