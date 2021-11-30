import React from "react";
import Header from "../Components/Header";
import { useState } from "react";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import BOOK_CARD from "../Assets/Images/book-card.png";
import MostWantedNovelsMapper from "../Components/MostWantedNovelsMapper";
import OngoingNovelsMapper from "../Components/OngoingNovelsMapper";
import Top10Mapper from "../Components/Top10Mapper";
import SliderComp from "../Components/SliderComp";
import BOOK1 from "../Assets/Images/top10/1.png";
import BOOK2 from "../Assets/Images/top10/2.png";
import BOOK3 from "../Assets/Images/top10/3.png";
import BOOK4 from "../Assets/Images/top10/4.png";
import BOOK5 from "../Assets/Images/top10/5.png";
import BOOK6 from "../Assets/Images/top10/6.png";
import BOOK7 from "../Assets/Images/top10/7.png";
import BOOK8 from "../Assets/Images/top10/8.png";
import BOOK9 from "../Assets/Images/top10/9.png";
import BOOK10 from "../Assets/Images/top10/10.png";
import BOOK11 from "../Assets/Images/top10/11.png";
import BOOK12 from "../Assets/Images/top10/12.png";
import URBAN from "../Assets/Images/urban.png";
import SCIFI from "../Assets/Images/scifi.png";
import FANTASY from "../Assets/Images/fantasy.png";
import Countdown from 'react-countdown';
import SLIDE_IMAGE_1 from "../Assets/Images/slide-image.png";
import SLIDE_IMAGE_2 from "../Assets/Images/slide-image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import CompletedNovels from "../Components/CompletedNovels";

function HomePage() {
  const freeBookOfWeek = {
    _id: 1,
    title: "Book Title Goes Here On Two Lines Even Test Test Test",
    category: "urban",
    heading: "great marshal",
    chapters: 3471,
    status: "completed",
    image: BOOK_CARD,
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  };

  const [mostPopular, setMostPopular] = useState([
    {
      _id: 1,
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      heading: "great marshal",
      chapters: 3471,
      status: "completed",
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 2,
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      heading: "great marshal",
      status: "completed",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
  ]);

  const [ongoing, setOngoing] = useState([
    {
      _id: 1,
      status: "completed",
      heading: "great marshal",
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 2,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 3,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 4,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 5,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 6,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On Two Lines Even Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
  ]);

  const [completed, setCompleted] = useState([
    {
      _id: 1,
      status: "completed",
      heading: "great marshal",
      title: "Book Title Goes Here On",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 2,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 3,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 4,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 5,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      _id: 6,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here On Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
  ]);

  const [top10, setTop10] = useState([
    {
      _id: 1,
      name: "my vampie system",
      genre: "fantasy",
      rating: 4.6,
      image: BOOK1,
    },
    {
      _id: 2,
      name: "supreme magus",
      genre: "fantasy",
      rating: 4.8,
      image: BOOK2,
    },
    {
      _id: 3,
      name: "cultivation online",
      genre: "video games",
      rating: 4.6,
      image: BOOK3,
    },
    {
      _id: 4,
      name: "my three wives are beautiful",
      genre: "fantasy",
      rating: 4.9,
      image: BOOK4,
    },
    {
      _id: 5,
      name: "my maids are all antagonis",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK5,
    },
    {
      _id: 6,
      name: "blood warlock: succubus panetric",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK6,
    },
    {
      _id: 7,
      name: "my three wives are beautiful",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK7,
    },
    {
      _id: 8,
      name: "complete martial arts attribution",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK7,
    },
    {
      _id: 9,
      name: "top tier proviene, secrtely",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK8,
    },
    {
      _id: 10,
      name: "my girlfriend from turquios",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK9,
    },
  ]);

  const [recent, setRecent] = useState([
    {
      _id: 1,
      name: "birth of the demonic sword",
      genre: "fantasy",
      rating: 4.6,
      image: BOOK10,
    },
    {
      _id: 2,
      name: "my vampie system",
      genre: "fantasy",
      rating: 4.6,
      image: BOOK1,
    },
    {
      _id: 3,
      name: "dual cultivation",
      genre: "video games",
      rating: 4.6,
      image: BOOK11,
    },
    {
      _id: 4,
      name: "my three wives are beautiful",
      genre: "fantasy",
      rating: 4.9,
      image: BOOK4,
    },
    {
      _id: 5,
      name: "farming inside the dungeon",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK12,
    },
  ]);
  const [chapterUpdates, setChapterUpdates] = useState([
    {
      _id: 1,
      name: "the amazing son in law",
      chapters: 2504,
      date: new Date(),
    },
    { _id: 2, name: "No. 1 supreme warrior", chapters: 4335, date: new Date() },
    {
      _id: 3,
      name: "the amazing son in law",
      chapters: 2212,
      date: new Date(),
    },
    { _id: 4, name: "No. 1 supreme warrior", chapters: 3422, date: new Date() },
  ]);

  const [images, setImages] = useState([
    {
      _id: 1,
      image: SLIDE_IMAGE_1,
    },
    {
      _id: 2,
      image: SLIDE_IMAGE_1,
    },
    {
        _id: 3,
        image: SLIDE_IMAGE_1,
      },
  ]);
  return (
    <>
      {/* <div className="App"> */}
      <Header />
      {/* Slider  */}
      <SliderComp images={images} />
      <div className="container">
        {/* Most Popular  */}
        <div className="section-div">
          <p className="section-heading">MOST POPULAR</p>
          {/* </div> */}
          <div className="row">
            {mostPopular.map((item, idx) => (
              <MostWantedNovelsMapper
                item={item}
                onClick={() => console.log("Book Card")}
              />
            ))}
          </div>
        </div>

        {/* Ongoing Novels  */}
        <div className="section-div">
          <p className="section-heading">ONGOING NOVELS</p>
          {/* </div> */}
          <div className="row">
            {ongoing.map((item, idx) => (
              <OngoingNovelsMapper
                item={item}
                onClick={() => console.log("Book Card")}
              />
            ))}
          </div>
        </div>

        {/* Top Ranking */}
        <div className="section-div">
          <p className="section-heading">TOP 10 RANKING</p>
          <hr style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.02)" }} />

          {/* Top 10 & Recent Arrivals  */}
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <p className="section-heading-inner">TOP 10.</p>
              <div className="books-container">
                {top10.map((ele, idx) => (
                  <Top10Mapper
                    item={ele}
                    index={idx}
                    onClick={() => console.log("Top 10")}
                  />
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <p className="section-heading-inner">RECENT ARRIVALS</p>
              <div className="recent-books-container">
                {recent.map((ele, idx) => (
                  <Top10Mapper
                    item={ele}
                    index={idx}
                    onClick={() => console.log("Top 10")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Free Book  */}
        <div className="free-book-section" style={{ position: "relative" }}>
          <p className="free-book-label">Free Book of The Week</p>
          <div className="free-book-rectangle grounded-radiants">
            <div className="timer-and-free-book-details">
              {/* Timer  */}
              <div className="timer-div">
                <p className="count-label">00</p>
                <p className="day-label">D</p>
                <p className="count-label">00</p>
                <p className="day-label">H</p>
                <p className="count-label">00</p>
                <p className="day-label">M</p>
              </div>
              {/* Book details  */}
              <div className="d-flex flex-row">
                <span className="gradient-blue" />
                <div
                  style={{
                    backgroundImage: `url(${freeBookOfWeek.image})`,
                  }}
                  className="free-book-image"
                >
                  <p className="free-book-status">{freeBookOfWeek.status} </p>
                  <p className="free-book-heading">{freeBookOfWeek.heading} </p>
                </div>
                {/* <img src={freeBookOfWeek.image} className="free-book-image" /> */}

                <div className="free-book-details">
                  <p className="free-book-title">{freeBookOfWeek.title}</p>
                  <p className="free-book-category">
                    <FontAwesomeIcon icon={faThLarge} />{" "}
                    {freeBookOfWeek.category}
                  </p>
                  <p className="free-book-description">
                    {freeBookOfWeek.description.length > 70
                      ? freeBookOfWeek.description.substring(0, 70)
                      : freeBookOfWeek.description}
                  </p>
                  <p className="free-book-chapters">
                    <FontAwesomeIcon icon={faBook} />{" "}
                    {`${freeBookOfWeek.chapters} Chapters`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories  */}
        <div className="book-categories-section">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div
                style={{
                  backgroundImage: `url(${URBAN})`,
                }}
                className="book-category-image"
              >
                <p className="book-category-label">urban</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div
                style={{
                  backgroundImage: `url(${SCIFI})`,
                }}
                className="book-category-image"
              >
                <p className="book-category-label">Sci-Fi</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                style={{
                  backgroundImage: `url(${FANTASY})`,
                }}
                className="book-category-image"
              >
                <p className="book-category-label">Fantasy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Novels  */}
        <div className="section-div">
          <p className="section-heading">COMPLETED NOVELS</p>
          {/* </div> */}
          <div className="row">
            {completed.map((item, idx) => (
              <CompletedNovels
                item={item}
                onClick={() => console.log("Book Card")}
              />
            ))}
          </div>
        </div>

        {/* Recent Chapter Updates  */}
        <p className="recent-updates-label">Recent Chapter Updates</p>

        <div className="books-table mt-3 mb-5">
          <table class="table recent-update-table">
            <thead class="table-header">
              <tr>
                <th scope="col" className="pl-4 border-0">
                  Book
                </th>
                <th scope="col" className="border-0">
                  Chapter
                </th>
                <th scope="col" className="border-0">
                  Time
                </th>
                <th scope="col" className="border-0"></th>
              </tr>
            </thead>
            <tbody>
              {chapterUpdates.map((item, idx) => (
                <tr>
                  <td className="border-0">
                    <p className="table-labels pl-4">{item.name} </p>
                  </td>
                  <td className="border-0">
                    {" "}
                    <p className="table-labels">{item.chapters} </p>
                  </td>
                  <td className="border-0">
                    <p className="table-labels">
                      {moment(item.date).fromNow()}{" "}
                    </p>
                  </td>
                  <td className="border-0 read-div">
                    <p className="text-center read-p">READ</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      {/* </div> */}
    </>
  );
}

export default HomePage;
