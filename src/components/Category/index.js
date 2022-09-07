import React from "react";
import { Link } from "wouter";
import "./Category.css";

export default function Category({ name, options = [], ...props }) {
  return (
    <section>
      <h3 className="Category-Title">{name}</h3>
      <ul>{options.map((singleOption) => (
        <li key={singleOption}>
          <Link className="Category-Link" to={`/search/${singleOption}`}>
            {singleOption}
          </Link>
        </li>
      ))}
      </ul>
    </section>
  );
}