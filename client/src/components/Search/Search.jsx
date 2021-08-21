import React from "react";

export default function Search(props) {
  const { handleSubmit, setSearch, search } = props;
  return (
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
  );
}
