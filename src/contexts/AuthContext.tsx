import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { fetchPatients, fetchSpecialists } from "@/api";
import { constants } from "@/utils";

interface AuthContextType {
  isLoggedIn: boolean;
  specialistName: string;
  specialistId: string;
  token: string;
  assignedVisits: Visit[];
  allSpecialists: Specialist[];
  login: (token: string, specialistName: string, specialistId: string) => void;
  logout: () => void;
  refetchAssignedVisits: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [specialistName, setSpecialistName] = useState<string>("");
  const [specialistId, setSpecialistId] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [assignedVisits, setAssignedVisits] = useState<Visit[]>([]);
  const [allSpecialists, setAllSpecialists] = useState<Specialist[]>([]);

  const login = async (token: string, name: string, id: string) => {
    localStorage.setItem("token", token);
    setSpecialistName(name);
    setSpecialistId(id);
    setIsLoggedIn(true);
    setToken(token);

    try {
      const response = await fetchPatients(id, token);
      setAssignedVisits(response.patients);
    } catch (error) {
      console.error("Error fetching assigned visits:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setSpecialistName("");
    setSpecialistId("");
    setIsLoggedIn(false);
    setToken("");
    setAssignedVisits([]);
  };

  const fetchAssignedVisits = async () => {
    if (isLoggedIn) {
      try {
        const response = await fetchPatients(specialistId, token);
        setAssignedVisits(response.patients);
      } catch (error) {
        console.error("Error fetching assigned visits:", error);
      }
    }
  };

  const refetchAssignedVisits = async () => {
    fetchAssignedVisits();
  };

  useEffect(() => {
    const { FETCH_INTERVAL } = constants;
    const intervalId = setInterval(fetchAssignedVisits, FETCH_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [specialistId, token]);

  useEffect(() => {
    const fetchSpecialistsData = async () => {
      try {
        const response = await fetchSpecialists();
        setAllSpecialists(response.specialists);
      } catch (error) {
        console.error("Error fetching specialists:", error);
      }
    };

    fetchSpecialistsData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        specialistName,
        specialistId,
        login,
        logout,
        token,
        assignedVisits,
        allSpecialists,
        refetchAssignedVisits,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
