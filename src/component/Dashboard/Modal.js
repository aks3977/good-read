import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Modal(props) {
  const history = useHistory();

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                <p className="modal-paragraph">{props.modalData.title}</p>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-paragraph">
                Author Name: {props.modalData.author_name}
              </p>
              <p className="modal-paragraph">
                ISBN: {props.modalData.isbn && props.modalData.isbn[0]}
              </p>
              <p className="modal-paragraph">
                Published Year: {props.modalData.first_publish_year}
              </p>
              <p className="modal-paragraph">
                languages: {props.modalData.language?.slice(0, 5).join(", ")}
              </p>

              <p>
                <a
                  href="#"
                  data-dismiss="modal"
                  onClick={() => history.push({
                      pathname:"/details",
                      state:{
                          selectedTitle:props.modalData.title,
                          selectedKey:props.modalData.key,
                          selectedIsbn:props.modalData.isbn && props.modalData.isbn[0],
                          selectedAuthor:props.modalData.author_name
                        }
                  })}
                >
                  see more...
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
