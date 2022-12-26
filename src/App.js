import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [fname, setFame] = useState("");
  const [lname, setLame] = useState("");
  const [uname, setUame] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [expfrom, setExpfrom] = useState();
  const [expto, setExpto] = useState();
  const [desc, setDesc] = useState("");
  const [skill, setSkill] = useState("");
  var exp;

  const subfname = (e) => {
    setFame(e.target.value);
  };
  const sublname = (e) => {
    setLame(e.target.value);
  };
  const subuname = (e) => {
    setUame(e.target.value);
  };
  const subphone = (e) => {
    setPhone(e.target.value);
  };
  const subemail = (e) => {
    setEmail(e.target.value);
  };
  const subexp1 = (e) => {
    setExpfrom(e.target.value);
  };
  const subexp2 = (e) => {
    setExpto(e.target.value);
  };
  const subdesc = (e) => {
    setDesc(e.target.value);
  };
  const subskill = (e) => {
    setSkill(e.target.value);
  };

  const submit = () => {
    var date1 = new Date(expfrom);
    var date2 = new Date(expto);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    exp = Math.floor(Difference_In_Days / 30);
    var data = document.getElementById("data");
    data.innerHTML = `<td id="name"></td>`;
    data.innerHTML = data.innerHTML + `<td id="user" ></td>`;
    data.innerHTML = data.innerHTML + `<td id="phone"></td>`;
    data.innerHTML = data.innerHTML + `<td id="email"></td>`;
    data.innerHTML = data.innerHTML + `<td id="skill"></td>`;
    data.innerHTML = data.innerHTML + `<td id="exp"></td>`;
    data.innerHTML = data.innerHTML + `<td id="desc"></td>`;

    document.getElementById("name").innerHTML = fname + " " + lname;
    document.getElementById("user").innerHTML = uname;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
    document.getElementById("skill").innerHTML = skill;
    document.getElementById("exp").innerHTML = exp + " Month";
    document.getElementById("desc").innerHTML = desc;
  };

  return (
    <div className="main">
      <section>
        <label for="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter First Name"
          onChange={subfname}
          required
        />
        <br></br>
        <label for="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter Last Name"
          onChange={sublname}
          required
        />
        <br></br>
        <label for="userName">User Name: </label>
        <input
          type="text"
          id="userName"
          placeholder="Enter User Name"
          maxlength="10"
          onChange={subuname}
          required
        />
        <br></br>
        <label for="phoneNo">Phone No. </label>
        <input
          type="text"
          id="phoneNo"
          placeholder="Enter Your Number"
          maxlength="10"
          onChange={subphone}
          required
        />
        <br></br>
        <label for="emailAddress">Email Id: </label>
        <input
          type="text"
          id="emailAddress"
          placeholder="Enter Email Id"
          onChange={subemail}
          required
        />
        <br />
        <label for="emailAddress">SKILLS: </label><br/>
        <select onChange={subskill}>
          <option selected disabled hidden>Choose Here</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>REACT</option>
          <option>TYPESCRIPT</option>
          <option>CSS3</option>
          <option>JAVASCRIPT</option>
          <option>JQUERY</option>
        </select>
        <br></br>
        <label for="totalExprience">Total Experience: </label>
        <input type="date" id="fromDate" name="Joing Date" onChange={subexp1} />
        <input type="date" id="lastDate" name="Exit Date" onChange={subexp2} />
        <br></br>
        <label for="descritiOn">Description: </label>
        <input
          type="text"
          id="descritiOn"
          placeholder="Enter Description"
          maxlength="250"
          onChange={subdesc}
        />
        <br></br>

        <input type="button" id="btn1" value="Submit button" onClick={submit} />
       
      </section>
      <section>
        <div id="display">
          <table>
            <tr>
              <th>Name</th>
              <th>userName</th>
              <th>PhoneNo</th>
              <th>Email</th>
              <th>SKILLS</th>
              <th>EXP</th>
              <th>DESCR</th>
            </tr>
            <tr id="data"></tr>
          </table>
        </div>
      </section>
    </div>
  );
}
