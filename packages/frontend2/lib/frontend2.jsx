import React from "react";

function frontend2() {
  return (
    <div>
      <div class="mb-3">
        <label for="" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          name="name"
          id="name"
          aria-describedby="helpId"
          placeholder="name"
        />
        <small id="helpId" class="form-text text-muted">
          Help text
        </small>
      </div>
    </div>
  );
}

module.exports = frontend2;
