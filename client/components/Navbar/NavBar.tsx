import React from "react";
import "./styles/navbar.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async (): Promise<void> => {
    const res = await fetch("/api/auth/logout");
    const data: { message: string } = (await res.json()) as { message: string };
    if (data.message === "success") {
      dispatch({ type: "auth/logout" });
      navigate("/");
    }
  };
  return (
    <>
      <div className="container-Navbar">
        <ul className="nav__container">
          {user && user.name ? (
            <>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28TCNIUTlz0gisSgfnvA9ygRYvll22k21T5YbX2EKQ&s"
                alt="alt"
                className="container-Navbar"
              />
              <div className="nav__list">
                <li className="hello">Hello, {user.name}!</li>
                <li className="hello">У тебя: {user.score} очков!</li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/">
                    Главная
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/game">
                    Game
                  </NavLink>
                </li>
                <li onClick={handleLogout} className="nav__item">
                  <NavLink className="nav__link" to="/logout">
                    Выйти
                  </NavLink>
                </li>
              </div>
            </>
          ) : (
            <>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC28TCNIUTlz0gisSgfnvA9ygRYvll22k21T5YbX2EKQ&s"
                alt="alt"
                className="container-Navbar"
              />
              <div className="nav__list">
                <li className="nav__item">
                  <NavLink className="nav__link" to="/sign-in">
                    Войти
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__link" to="/sign-up">
                    Регистрация
                  </NavLink>
                </li>
              </div>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
