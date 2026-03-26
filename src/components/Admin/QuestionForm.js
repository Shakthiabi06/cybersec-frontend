import { useState } from "react";
import API from "../../services/api";
import "../../styles/QuestionForm.css";

function QuestionForm() {
  const [round, setRound] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([""]);
  const [answers, setAnswers] = useState([""]);
  const [base_point, setBasePoint] = useState(100);

  const handleSubmit = async () => {
    try {
      await API.post("/api/admin/questions", {
        round,
        title,
        description,
        answers,
        base_point,
      });
      alert("Question uploaded");
    } catch {
      alert("Error uploading");
    }
  };

  return (
    <div>
      <h3>Upload Question</h3>

      <select onChange={(e) => setRound(Number(e.target.value))}>
        <option value={1}>Round 1</option>
        <option value={2}>Round 2</option>
        <option value={3}>Round 3</option>
        <option value={4}>Round 4</option>
      </select>

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription([e.target.value])}
      />

      <input
        placeholder="Answer"
        onChange={(e) => setAnswers([e.target.value])}
      />

      <input
        type="number"
        placeholder="Base Points"
        onChange={(e) => setBasePoint(Number(e.target.value))}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuestionForm;