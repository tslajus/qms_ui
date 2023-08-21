import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts";
import { wakeUpServer } from "./utils";

import {
  HomePage,
  PublicDashboard,
  SpecialistDashboard,
  DisplayBoard,
} from "@/pages";
import { Loader } from "./components";

function App() {
  const [serverAwake, setServerAwake] = useState(false);

  useEffect(() => {
    const checkServerStatus = async () => {
      const isServerAwake = await wakeUpServer();
      setServerAwake(isServerAwake);
    };

    checkServerStatus();
  }, []);

  if (!serverAwake) {
    return <Loader />;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/public" element={<PublicDashboard />} />
          <Route path="/specialist" element={<SpecialistDashboard />} />
          <Route path="/display-board" element={<DisplayBoard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
