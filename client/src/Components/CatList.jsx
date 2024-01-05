import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CatList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="col-lg-3">
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item active bg-danger border-0"
            aria-current="true"
          >
            Categories (See All)
          </li>
          {data.slice(0, 10).map((e) => (
            <>
              <Link to={`/cat/${e}`}>
                <li className="list-group-item text-uppercase">{e}</li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CatList;
