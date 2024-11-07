import React from 'react';

const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Contact;
