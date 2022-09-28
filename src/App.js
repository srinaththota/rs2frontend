import Login from './components/Login';
import { useSelector } from 'react-redux'
import './App.css';
import Home from './pages/home/Home';
import Header from './ui/Header';
import { ThemeProvider,StylesProvider } from '@mui/styles'
import theme from './ui/Theme';
function App() {
  const token = useSelector(state=>state.login.token)
  return(
  <ThemeProvider theme={theme}>
  <Header/>
  {!token && <Login/>}
  {token && <Home/>}
  </ThemeProvider>
)  
}

export default App;
