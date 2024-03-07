import { QuestionItem } from './QuestionItem';
import { Theme } from './type';

export const Themeitem = ({
  them,
}: {
  them: Theme;
}): JSX.Element => {
  return (
    <div className="container-Theme">
      <div className="Theme">{them.title}</div>
      {them.Questions.map((questions) => (
        <QuestionItem
          key={questions.id}
          questions={questions}
   
        />
      ))}
    </div>
  );
};
