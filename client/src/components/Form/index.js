import React from "react";

export function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        {/* <label htmlFor="Query">
          <strong>Book</strong>
        </label> */}
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Search Term (i.e. Title or Author)"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}



