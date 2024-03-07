import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import MainPage from "../MainPage/MainPage";
import GamePage from "../Game/Game";
import RegistrationPage from "../Auth/RegistrationPage";
import AuthorizationPage from "../Auth/AuthorizationPage";
import "./App.css";
import { useAppDispatch } from "../../redux/store";
import { Theme, User } from "../Game/type";

function App(): JSX.Element {
  const dispatchR = useAppDispatch();

  const loadTheme = async (): Promise<void> => {
    const res = await fetch("api/theme");
    const data: { theme: Theme[] } = (await res.json()) as { theme: Theme[] };
    dispatchR({ type: "theme/load", payload: data.theme });
  };

  const checkUser = async (): Promise<void> => {
    const res = await fetch("/api/auth/check");
    const data: { user: User } = (await res.json()) as { user: User };
    dispatchR({ type: "auth/sign-in", payload: data.user });
  };

  useEffect(() => {
    checkUser().catch(console.log);
    loadTheme().catch(console.log);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/sign-in" element={<AuthorizationPage />} />

          <Route
            path="*"
            element={
              <h1>
                <img
                  src="https://www.bbitrix.ru/upload/medialibrary/1d4/1d4bc838a0107b1b52418ce53e6715e8.png"
                  alt="img"
                  className="error"
                />
              </h1>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
