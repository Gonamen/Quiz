import React, { useEffect, useState } from "react";
import type { User } from "../../redux/reducers/types";
import { useAppDispatch } from "../../redux/store";
import "./styles/auth.scss";
import { useNavigate } from "react-router-dom";

const AuthorizationPage = (): JSX.Element => {
  const [name, setName] = useState("");
  const [password, setPasssword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message === "success") {
      navigate("/");
    }
  }, [message]);

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();
    const res = await fetch("api/auth/sign-in", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };

    setMessage(data.message);
    dispatch({ type: "auth/sign-in", payload: data.user });
  };
  return (
    <div className="auth-container">
      <form className="auth" onSubmit={onHandleSubmit}>
        <div className="message">{message}</div>
        <div>
          <input
            placeholder="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </div>
        <div>
          <input
            placeholder="password"
            className="input"
            value={password}
            onChange={(e) => setPasssword(e.target.value)}
            type="text"
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;
