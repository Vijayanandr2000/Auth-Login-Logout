import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Register = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  //   const [conpas, setConpas] = useState("");
  const [hide, setHide] = useState("true");

  useEffect(() => {
    if (name.length > 0 && mail.length > 0 && pass.length > 0) setHide(false);
    else setHide(true);
  }, [name, mail, pass]);

  const submit = (e) => {
    e.preventDefault();
    var data = {
      name: name,
      mail: mail,
      password: pass,
    };
    fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.message == "Registered") window.location = "/login";
      });
    setName("");
    setMail("");
    setPass("");
    // console.log(message);
  };
  return (
    <form>
      <div className="title text-center mb-5">
        <h1>REGISTER</h1>
      </div>
      <div class="form-group col-md-12 col-lg-12 col-sm-12">
        <label for="inputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div class="form-group col-md-12 col-lg-12 col-sm-12">
        <label for="inputEmail4">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div class="form-groupcol-md-12 col-lg-12 col-sm-12">
        <label for="inputPassword4">Password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword4"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <div className="btn mt-5">
        <button
          type="submit"
          disabled={hide}
          class="btn btn-primary btn-center"
          onClick={submit}
        >
          Register
        </button>
      </div>

      {/* </div> */}
    </form>
  );
};
export default Register;
