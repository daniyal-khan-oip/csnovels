import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

function CompletedNovels({ item, onClick }) {
  return (
    <div className="col-md-2 col-sm-4 completed-books">
      <div className="completed-image-and-text-container">
        <img src={item.image} className="completed-book-image" />
        <p className="completed-book-status">{item.status} </p>
        <p className="completed-book-heading">{item.heading} </p>
      </div>
      <p className="completed-book-title">
        {item.title.length > 40
          ? `${item.title.substring(0, 40)}...`
          : item.title}
      </p>
      <p className="completed-book-chapters">
        <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
      </p>
    </div>
  );
}

export default CompletedNovels;