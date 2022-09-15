
import './App.css';
import Button from '@mui/material/Button';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import Feed from './component/Feed/Feed';
import Rightbar from './component/RightBar/Rightbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'

function App() {


  return (
    <>

      <Navbar />
      <Stack direction="row" spacing={2}>

        <Sidebar />
        <Feed />
        {/* <Rightbar /> */}
      </Stack>


    </>


  );
}
export default App;
