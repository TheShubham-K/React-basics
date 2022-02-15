import React from "react";

const Book = (props) => {
  const { img, title, author, children } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world");
  };

  const moreComplex = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(img);
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <br />
      <button type="button" onClick={() => moreComplex(author)}>
        more complex
      </button>
      {children}
    </article>
  );
};

/* const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
}; */

/* const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
}; */

/* const Book = () => {
  return (
    <article className="book">
      <Image />
      <br />
      <Title />
      <Author />
    </article>
  );
}; */

/* const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt=""
    />
  );
};
 */

/* const Title = () => {
  return <h2>I love you till the moon and back.</h2>;
};
 */

/* const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      Amebila Mehila
    </h4>
  );
};
 */
/* const Greeting = () => {
  return React.createElement('div', {}, React.createElement(
    'h1', {}, "Hello World!"
  ));
}; */

export default Book;
