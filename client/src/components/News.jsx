import React from "react";
import "./News.scss";
const News = () => {
  return (
    <div className="news">
      <div className="news__top">
        <h2>LATEST NEWS</h2>
        <div id="line"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
        </p>
      </div>
      <div className="news__bottom">
        <div className="news__bottom__card">
          <div className="news__bottom__card__img">
            <img
              src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-1.jpg"
              alt=""
            />
          </div>
          <div className="news__bottom__card__text">
            <h2>Professional Website Hosting</h2>
            <p>
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </div>
        </div>
        <div className="news__bottom__card">
          <div className="news__bottom__card__img">
            <img
              src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-2.jpg"
              alt=""
            />
          </div>
          <div className="news__bottom__card__text">
            <h2>Professional Website Hosting</h2>
            <p>
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </div>
        </div>
        <div className="news__bottom__card">
          <div className="news__bottom__card__img">
            <img
              src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-3.jpg"
              alt=""
            />
          </div>
          <div className="news__bottom__card__text">
            <h2>Professional Website Hosting</h2>
            <p>
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
