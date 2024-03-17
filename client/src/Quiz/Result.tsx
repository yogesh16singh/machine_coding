const Result = ({ questions, correctAnswers }: any) => {
  return (
    <div className=" border-2 p-2">
      {questions.map((curquestion: any, index: number) => {
        return (
          <h1
            className={`text-2xl p-2 border-black border-2 m-1 ${
              correctAnswers[index] == "true" ? "bg-green-300" : "bg-red-300"
            }`}
          >
            {curquestion.question}
          </h1>
        );
      })}
    </div>
  );
};
export default Result;
