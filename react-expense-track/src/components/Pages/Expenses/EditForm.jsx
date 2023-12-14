import React, { useState }  from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editExpense } from "./ExpenseRequests";

const EditForm = ({ item }) => {
  const [show, setShow] = useState(false);
    const [data, setData] = useState(item);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      editExpense(data.id, data, dispatch)
      handleClose()
    document.getElementById("EditForm").reset();
  };
  return (
    <div>
      <button className=" btn btn-secondary" onClick={handleShow}>
        EDIT
      </button>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton>
          <Modal.Title>Edit EXPENSE </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="EditForm" className=" text-center">
            <input
              className=" form-control"
              type="number"
              placeholder="Amount"
              name="Amount"
              onChange={handleChange}
              defaultValue={item.Amount}
              required
            />
            <textarea
              className=" form-control mt-2"
              type="text"
              placeholder="Description"
              name="Description"
              onChange={handleChange}
              style={{ height: 250 }}
              defaultValue={item.Description}
              required
            />

            <select
              className="form-control mt-2"
              onChange={handleChange}
              name="Category"
              defaultValue={item.Category}
              required
            >
              <option>Food</option>
              <option>Smoke</option>
              <option>Gas</option>
              <option>Cloths</option>
            </select>

            <button onClick={handleSubmit} className="btn mt-3 btn-primary">
              EDIT EXPENSE
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditForm;
