import React from "react";

const Page1 = () => {
  return (
    <div>
      <div className="page1-cont">
        <h1 className="page1-title">What is HTML?</h1>
        <ul className="HTML-list-def">
            <li><strong>Definition:</strong><p>HTML, or Hypertext Markup Language, is a coding language that's used to structure and format the content of a web page. It's made up of a series of elements, or tags, that are inserted into a file to tell web browsers how to display the content.</p></li>
            <li><strong>Purpose: </strong><p>The purpose of HTML (HyperText Markup Language) is to structure web pages and their content.</p></li>
            <li><strong>Structure: </strong><p>HTML uses a system of tags to define the structure of web pages, including elements such as headings, paragraphs, links, images, and lists. Each tag provides specific instructions on how the content should be displayed by the web browser.</p></li>
            <li><strong>Role: </strong><p>HTML is the foundational language used in web development and works alongside CSS (Cascading Style Sheets) and JavaScript to create fully functional and visually appealing websites. While HTML structures the content, CSS styles it, and JavaScript adds interactivity.</p></li>
            
        </ul>
      </div>
    </div>
  );
};

export default Page1;
