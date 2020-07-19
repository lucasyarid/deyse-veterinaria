import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <form
            name="contact"
            action="/success"
            method="POST"
            netlify
          >
            <div>
              <label>
                Nome: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Mensagem: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
