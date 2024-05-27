import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { useSelector } from "react-redux";
import UpdateForm from "./components/UpdateForm";

function App() {
  const updater = useSelector((state) => state.update.updateWindow);

  return (
    <>
      <div className="main">
        {!updater ? <UserForm /> : <UpdateForm />}
        <UserTable />
      </div>
    </>
  );
}

export default App;
