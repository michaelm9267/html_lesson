import React from "react";

const Page2 = () => {
  return (
    <div>
      <div className="page2-cont">
        <h2 className="page2-title">Common HTML Tags</h2>
        <table className="HTML-tag-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Tag Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;h1&gt; - &lt;h6&gt;</td>
              <td>Heading Tags</td>
              <td>
                These tags are used to define headings in HTML. <code>&lt;h1&gt;</code> represents the main heading, while <code>&lt;h6&gt;</code> is the smallest heading. Headings help structure the content and improve accessibility.
              </td>
            </tr>
            <tr>
              <td>&lt;p&gt;</td>
              <td>Paragraph Tag</td>
              <td>
                This tag is used to define a paragraph of text. It creates a block of text with some margin and padding around it for readability.
              </td>
            </tr>
            <tr>
              <td>&lt;a&gt;</td>
              <td>Anchor Tag</td>
              <td>
                This tag is used to create hyperlinks, which can link to other web pages, files, or locations within the same page. The <code>href</code> attribute specifies the URL of the page the link goes to.
              </td>
            </tr>
            <tr>
              <td>&lt;em&gt;</td>
              <td>Emphasis Tag</td>
              <td>
                This tag is used to emphasize text, usually by displaying it in italics. It conveys that the text has stress emphasis, which can be important for accessibility.
              </td>
            </tr>
            <tr>
              <td>&lt;strong&gt;</td>
              <td>Strong Tag</td>
              <td>
                This tag is used to give text strong importance, usually by displaying it in bold. It indicates that the enclosed text is of high importance.
              </td>
            </tr>
            <tr>
              <td>&lt;img&gt;</td>
              <td>Image Tag</td>
              <td>
                This tag is used to embed images in a web page. The <code>src</code> attribute specifies the path to the image file, and the <code>alt</code> attribute provides alternative text for accessibility.
              </td>
            </tr>
            <tr>
              <td>&lt;ul&gt;</td>
              <td>Unordered List Tag</td>
              <td>
                This tag is used to create an unordered list, where items are typically displayed with bullet points. It’s useful for listing items where the order doesn’t matter.
              </td>
            </tr>
            <tr>
              <td>&lt;ol&gt;</td>
              <td>Ordered List Tag</td>
              <td>
                This tag is used to create an ordered list, where items are displayed with numbers or letters. It’s useful for listing items that follow a sequence or hierarchy.
              </td>
            </tr>
            <tr>
              <td>&lt;li&gt;</td>
              <td>List Item Tag</td>
              <td>
                This tag is used within <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> tags to define each list item. It represents an individual item in a list.
              </td>
            </tr>
            <tr>
              <td>&lt;table&gt;</td>
              <td>Table Tag</td>
              <td>
                This tag is used to create a table. Tables are structured by using <code>&lt;tr&gt;</code> (table row), <code>&lt;th&gt;</code> (table header), and <code>&lt;td&gt;</code> (table data) tags to organize and display data in a grid format.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page2;
