import {Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoice from "./scenes/invoice";
// import Contact from "./scenes/contact";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";






function App() {
    const [theme, colorMode] = useMode();


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            {/*<Route path="/contact" element={<Contact />} />*/}
                            {/*<Route path="/invoice" element={<Invoice />} />*/}
                            {/*<Route path="/bar" element={<Bar />} />*/}
                            {/*<Route path="/from" element={<Form />} />*/}
                            {/*<Route path="/line" element={<Line />} />*/}
                            {/*<Route path="/pie" element={<Pie />} />*/}
                            {/*<Route path="/faq" element={<FAQ />} />*/}
                            {/*<Route path="/geography" element={<Geography />} />*/}
                            {/*<Route path="/calendar" element={<Calendar />} />*/}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
