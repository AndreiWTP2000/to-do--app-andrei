import TickIcon from "./TickIcon";
import Progressbar from "./ProgressBar";
import { useState } from "react";
import Modal from "./Modal";

const Listitem = ({ task, getData }) => {
  const [showModal, setShowmodal] = useState(false);
  const deleteItem = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <Progressbar progress={task.progress} />
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowmodal(true)}>
          EDIT
        </button>
        <button className="delete" onClick={() => deleteItem()}>
          DELETE
        </button>
      </div>
      {showModal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowmodal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  );
};

export default Listitem;
