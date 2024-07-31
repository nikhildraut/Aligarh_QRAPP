import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Devicejoining from "./scenes/devicejoining";
import Form from "./scenes/form";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from './scenes/Login/LoginPage';
import useToken from './scenes/Login/usetoken';



function App() {

  const { token, setToken } = useToken();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Form />} />
              
              <Route path="/devicejoining" element={<Devicejoining />} />
              
    
              <Route path="/form" element={<Form />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
