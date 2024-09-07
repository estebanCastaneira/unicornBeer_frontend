import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Button, Form, Modal } from "react-bootstrap";
import { toggleModal } from "./verifyAgeSlice";
import unicornLogo from "../../../assets/icons/Unicorn-black-logo.png";

function Verify() {
  const show = useSelector((state) => state.verify);
  const dispatch = useDispatch();
  const [underAge, setUnderAge] = useState(false)
  return (
    <Modal show={show} size="md" centered backdrop="static" className="unicornModal">
      <Modal.Header className="border-0 d-flex flex-column justify-content-center">
        <img
          src={unicornLogo}
          alt="Unicorn Logo"
          className="w-50 pt-3"
        />
        <Modal.Title>
          <h3 className="mt-4 text-center">Please, tell us: Are you old enough to drink?</h3>
          {underAge && (
            <small className="oops">
              Oops! We're sorry, but you have to be an adult to get into this site
            </small>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="d-flex justify-content-center gap-5 mt-5">
              <Button
                className="enterBtnYes"
                type="submit"
                value="Yes"
                onClick={()=> dispatch(toggleModal(false))}
              >Yes
              </Button>
               <Button
                className="enterBtnNo"
                type="submit"
                value="No"
                onClick={()=> {
                  setUnderAge(true);
                  dispatch(toggleModal(true));
                }
                }
              >
              No
              </Button>
          </div>

      </Modal.Body>
    </Modal>
  );
}

export default Verify;
