const Question = ({ question, answerClicked }: any) => {
  return (
    <div className="w-2/3">
      <h1 className="bg-slate-300 m-2 p-2 font-bold text-2xl">
        {question.question}
      </h1>
      <ul className="m-2 grid grid-cols-2 gap-2">
        {question.answerOptions.map((curanswer: any) => {
          return (
            <li
              className="m-2 p-4 text-xl bg-slate-200 hover:bg-blue-400 text-center"
              onClick={() => answerClicked(curanswer.isCorrect)}
            >
              {curanswer.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Question;
