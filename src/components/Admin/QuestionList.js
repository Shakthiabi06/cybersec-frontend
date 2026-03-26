import { useEffect, useState } from "react";
import API from "../../services/api";
import "../../styles/QuestionList.css";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    API.get("/api/admin/questions")
      .then((res) => setQuestions(res.data))
      .catch(() => alert("Error fetching"));
  }, []);

  return (
    <div>
      <h3>All Questions</h3>
      {questions.map((q) => (
        <div key={q._id}>
          <h4>{q.title}</h4>
          <p>{q.description.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;