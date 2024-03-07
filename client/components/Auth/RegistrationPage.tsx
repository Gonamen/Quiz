import React, { useEffect, useState } from "react";
import { User } from "../../redux/reducers/types";
import { useAppDispatch } from "../../redux/store";
import "./styles/auth.scss";
import { useNavigate } from "react-router-dom";

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [rpassword, setRpasssword] = useState("");
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
    const res = await fetch("api/auth/sign-up", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        rpassword,
      }),
    });
    const data: { message: string; user: User } = (await res.json()) as {
      message: string;
      user: User;
    };
    console.log(data, 55);
    setMessage(data.message);
    dispatch({ type: "auth/sign-up", payload: data.user });
  };
  return (
    <div className="auth-container">
      <form className="auth" onSubmit={onHandleSubmit}>
        <div className="message">{message}</div>
        <input
          placeholder="name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
        <input
          placeholder="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
        />
        <input
          placeholder="password"
          className="input"
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          type="text"
          required
        />
        <input
          placeholder="rpassword"
          className="input"
          value={rpassword}
          onChange={(e) => setRpasssword(e.target.value)}
          type="text"
          required
        />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
