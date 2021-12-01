import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function MostWantedNovelsMapper({ item, onClick }) {
  return (
    <div className="col-md-4 col-sm-6 most-wanted-books">
      <div className="mp-image-and-text-container">
        <img src={item.image} className="mp-book-image" />
        <p className="mp-book-status">{item.status} </p>
        <p className="mp-book-heading">{item.heading} </p>
      </div>
      <div className="book-details">
        <p className="mp-book-title">{item.title}</p>
        <p className="mp-book-category">
          <FontAwesomeIcon icon={faThLarge} /> {item.category}
        </p>
        <p className="mp-book-description">
          {item.description.length > 60
            ? `${item.description.substring(0, 60)}...`
            : item.description}
        </p>
        <p className="mp-book-chapters">
          <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
        </p>
      </div>
    </div>
  );
}

export default MostWantedNovelsMapper;
