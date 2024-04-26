import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard/dashboard';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container sx={{ height: '100vh' }}>
    <Grid item xs={12} sm={1} md={0.75} >
      <Sidebar />
    </Grid>
    <Grid item xs={12} sm={11} md={11.25}  sx={{ backgroundColor: '#f5f5f5' }}>
      <Grid container direction="column" height="100%" sx={{ overflowY: 'auto' }}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <Dashboard />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
}

export default App;
