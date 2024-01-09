import React from "react";

function frontend1() {
  return (
    <div>
      <div class="mb-3">
        <label for="" class="form-label">
          Enter your Name here
        </label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          aria-describedby="helpId"
          placeholder="name"
        />
        <small id="helpId" class="form-text text-muted">
          Enter you good Name
        </small>
      </div>
    </div>
  );
}

module.exports = frontend1;
