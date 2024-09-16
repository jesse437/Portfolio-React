import { useState } from "react";
import "../../styles/Contact.css";

export default function form() {
  const emailInputId = useId();
  return (
    <>
      <label>
        Name:
        <input name="Name" />
      </label>
      <hr />
      <label htmlFor={emailInputId}>Email:</label>
      <input id={emailInputId} name="email" type="text" />
      <label>
        Message:
        <textarea name="postContent" rows={4} cols={40} />
      </label>

      <input type="submit" value="Submit" />
    </>
  );
}
