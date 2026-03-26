import QuestionList from "../components/Admin/QuestionList";
import QuestionForm from "../components/Admin/QuestionForm";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <QuestionForm />
      <QuestionList />
    </div>
  );
}

export default AdminDashboard;