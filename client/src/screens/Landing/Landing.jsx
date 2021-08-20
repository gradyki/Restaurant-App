import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";

export default function Landing(props) {
  const [search, setSearch] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/zipcode/${search}`);
  };

  return (
    <div>
      <div>Landing page</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
