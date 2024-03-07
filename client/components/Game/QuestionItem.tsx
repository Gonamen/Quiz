import "bootstrap/dist/css/bootstrap.min.css";
import type { Questions } from "./type";
import { useState } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
export const QuestionItem = ({ questions }: { questions: Questions }) => {
  const [model, setModel] = useState(false);
  const [tr, setTR] = useState(true);
  const [answer, setAnswer] = useState("");

  const user = useSelector((store: RootState) => store.auth.auth);
  const dispatch = useAppDispatch();

  const proverka: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    fetch("/api/theme/seting", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        questions,
        answer,
        user,
      }),
    })
      .then((data) => data.json())
      .then((data) => dispatch({ type: "auth/sign-in", payload: data.user }));
    setModel(false);
    setTR(false);
  };

  return (
    <>
      {tr ? (
        <>
          <button
            type="submit"
            className="container-questionitem"
            onClick={() => setModel(true)}
          >
            {questions.points}
          </button>
        </>
      ) : (
        <>
          <button type="submit" className="container-questionitem">
            ✔
          </button>
        </>
      )}

      {model && (
        <div className="modelka">
          <form className="modelka-form" onSubmit={proverka}>
            <img
              src={questions.img}
              style={{ maxWidth: "800px", borderRadius: "20px" }}
            />

            <p>{questions.text}</p>
            {answer === questions.answer && <div>Правильно</div>}
            <br />
            <input
              value={answer}
              type="text"
              onChange={(e) => setAnswer(e.target.value)}
            />
            <br />
            <button type="submit"> Ответить</button>
          </form>
        </div>
      )}
    </>
  );
};
