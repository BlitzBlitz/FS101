import { useState } from "react";
import "./Footer.css";
export default function Footer() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "business",
    },
    {
      id: 2,
      title: "culture",
    },
    {
      id: 3,
      title: "tech",
    },
    {
      id: 4,
      title: "science",
    },
  ]);
  const [subCategories, setSubCategories] = useState([
    {
      id: 1,
      title: "crypto",
    },
    {
      id: 2,
      title: "books",
    },
    {
      id: 3,
      title: "phyichs",
    },
    {
      id: 4,
      title: "math",
    },
    {
      id: 5,
      title: "javascript",
    },
    {
      id: 6,
      title: "cooking",
    },
  ]);
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <img src="./assets/images/Wired.png"></img>
          <p>
            WIRED is where tomorrow is realized. It is the essential source of
            information and ideas that make sense of a world in constant
            transformation. The WIRED conversation illuminates how technology is
            changing every aspect of our lives—from culture to business, science
            to design. The breakthroughs and innovations that we uncover lead to
            new ways of thinking, new connections, and new industries.
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-facebook fa-2x"></i>
            <i className="fa-brands fa-facebook fa-2x"></i>
            <i className="fa-brands fa-facebook fa-2x"></i>
            <i className="fa-brands fa-facebook fa-2x"></i>
          </div>
        </div>
        <div className="footer-column">
          <h2>MORE FROM WIRED</h2>
          <ul id="footer-menu-categories">
            {categories.map((category) => (
              <li key={category.id}>
                <a href="#">
                  {category.title.charAt(0).toUpperCase() +
                    category.title.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h2>MORE SUB CATEGORIES</h2>

          <ul id="footer-sub-categories">
            {subCategories.map((subCategory) => (
              <li key={subCategory.id}>
                <a href="#">
                  {subCategory.title.charAt(0).toUpperCase() +
                    subCategory.title.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-row">
        <p>
          © 2023 Condé Nast. All rights reserved. Use of this site constitutes
          acceptance of our User Agreement and Privacy Policy and Cookie
          Statement and Your California Privacy Rights. WIRED may earn a portion
          of sales from products that are purchased through our site as part of
          our Affiliate Partnerships with retailers. The material on this site
          may not be reproduced, distributed, transmitted, cached or otherwise
          used, except with the prior written permission of Condé Nast. Ad
          Choices
        </p>
      </div>
    </div>
  );
}
