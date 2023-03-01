import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// named imports
import {books} from './books'

// default import
import Book from './Book'

// Stateless functional components
// always return single rule
// JSX rules
// use camelCase for HTML
// formatting
// className instead of class
// div / section/ article or Fragment
// css

// function Greeting() {
//   return (
//     <div className=''>
//       <h2>some to returned and I'm shubham</h2>
//       <ul>
//         <li>
//           <a href="#">
//             some thing
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

/* Components Applications */

/* function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>Shubham Kumar</h2>;
};

const Message = () => {
  return <p>This is Message</p>;
}; 
*/

/* Nested Applications */
// css
// setup variables

/* 
const author = "Amebila Mehila";
const title = "I love you till the moon and back.";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
 */

// array operations

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

/* function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          aliquid quidem. Fugiat placeat omnis aperiam natus! Impedit eius quis
          corrupti dolor consequatur est voluptate? Tempore a reiciendis sequi
          minima repudiandae.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
} */


// ReactDom.render(<Greeting />, document.getElementById("root"));

ReactDom.render(<BookList />, document.getElementById("root"));
