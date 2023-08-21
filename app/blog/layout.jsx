import React from "react";

function BlogLayout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>seguros</li>
          <li>accidentes</li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default BlogLayout;
