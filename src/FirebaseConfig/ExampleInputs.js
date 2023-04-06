import { useState } from "react";
import {
  adds,
  deletes,
  updateDocs,
  unsubbed,
  getLeader,
} from "/home/marv/react-projects/workout-app/src/FirebaseConfig/FirebaseConfig.js";
import ExampleEmail from "./ExampleEmail";

function ExampleInputs() {
  const [lists, setLists] = useState([]);

  const [toSend, setToSend] = useState({
    title: "",
    author: "",
  });

  const [toDelt, setToDelt] = useState({
    id: "",
  });

  const [toUpdate, setToUpdate] = useState({
    id: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleDeleteChange = (e) => {
    setToDelt({ ...toDelt, [e.target.name]: e.target.value });
  };

  const handleUpdateChange = (e) => {
    setToUpdate({ ...toUpdate, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   getLeader(setLists)
  // }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    //firebaseConfig add function
    adds(toSend);
    getLeader(setLists);
    setToSend({
      title: "",
      author: "",
    });
  };

  //firebaseConfig delete function
  const onDelete = (e) => {
    e.preventDefault();

    deletes(toDelt);

    setToDelt({
      id: "",
    });
  };

  //firebaseConfig update function
  function onUpdate(e) {
    e.preventDefault();

    updateDocs(toUpdate);

    setToUpdate({
      id: "",
    });
  }

  // unsubscribe
  const unsub = (e) => {
    e.preventDefault();
    unsubbed();
  };

  return (
    <div className="input-boxes">
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          placeholder="title"
          title="Please enter title"
          name="title"
          pattern="[A-Za-z ]{1,32}"
          type="text"
          value={toSend.title}
          onChange={handleChange}
          required
        />
        <input
          id="author"
          placeholder="author"
          title="Please enter author"
          type="text"
          name="author"
          pattern="[A-Za-z ]{1,32}"
          value={toSend.author}
          onChange={handleChange}
          required
        />

        <div className="wrapper">
          <button type="submit">
            <span>add</span>
          </button>
        </div>
      </form>

      <form onSubmit={onDelete}>
        <input
          id="id"
          placeholder="id"
          title="Please enter id"
          type="text"
          name="id"
          value={toDelt.id}
          onChange={handleDeleteChange}
        />
        <div>
          <button type="submit">delete</button>
        </div>
      </form>

      <form onSubmit={onUpdate}>
        <input
          id="update"
          placeholder="update"
          title="Please enter id"
          type="text"
          name="id"
          value={toUpdate.id}
          onChange={handleUpdateChange}
          required
        />
        <div>
          <button type="submit">update</button>
        </div>
      </form>
      <ExampleEmail />

      <div>
        <button onClick={unsub}>Unsubscribe</button>
      </div>

      {lists &&
        lists.map((list) => (
          <div key={list.id}>
            <p>
              <span>Name: </span>
              {list.data.author}
              {/* {list.id} */}
            </p>
          </div>
        ))}
    </div>
  );
}

export default ExampleInputs;
