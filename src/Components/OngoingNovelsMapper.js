import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

function OngoingNovelsMapper({ item, onClick }) {
  return (
    <div className="col-md-2 col-sm-4 og-books">
      <div className="og-image-and-text-container">
        <img src={item.image} className="og-book-image" />
        <p className="og-book-status">{item.status} </p>
        <p className="og-book-heading">{item.heading} </p>
      </div>
      <p className="og-book-title">
        {item.title.length > 40
          ? `${item.title.substring(0, 40)}...`
          : item.title}
      </p>
      <p className="og-book-chapters">
        <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
      </p>
    </div>
  );
}

export default OngoingNovelsMapper;
