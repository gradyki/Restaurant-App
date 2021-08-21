import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import Search from "../../components/Search/Search";

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
        <Search
          setSearch={setSearch}
          handleSubmit={handleSubmit}
          search={search}
        />
      </div>
    </div>
  );
}
