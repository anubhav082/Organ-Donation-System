import Navbar1 from "../Components/Navbar1";
import Footer3 from "../Components/Footer3";
import "./PatientReg.css";
import formphoto from "../3.jpg";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Navbar3 from "../Components/Navbar3";
import { useContext } from "react";
import UserContext from "../Components/UserContext";

function PatientReg() {
  const { username1 } = useContext(UserContext);

  // const [username,setusername]=useState("");
  const [password, setpassword] = useState("");
  const [reenterPassword, setreenterPassword] = useState("");
  const [fname, setName] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [organ, setorgan] = useState("");
  const [age, setage] = useState("");
  const [datetime1, setdatetime1] = useState("");

  const { username2 } = useContext(UserContext);

  const Save1 = async (e) => {
    e.preventDefault();
    // console.log("resp de rha h")
    if (fname.length == 0) {
      alert("First Name Cannot be Empty");
      return false;
    } else if (!fname.match(/^[A-Za-z\s]+$/)) {
      setName("Enter valid name");
      return false;
    }

    if (age.length == 0) {
      alert("age cannot be empty");
      return false;
    }
    if (bloodGroup.length == 0) {
      alert("blood Group Cannot be Empty");
      return false;
    }
    if (gender.length == 0) {
      alert("Gender Cannot be Empty");
      return false;
    }
    if (address.length == 0) {
      alert("address Cannot be Empty");
      return false;
    }
    if (email.length == 0) {
      alert("email Cannot be Empty");
      return false;
    } else if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Enter valid email");
      return false;
    }
    if (contactNumber.length == 0) {
      alert("Contact Number Cannot be Empty");
      return false;
    } else if (!contactNumber.match(/^\d{10}$/)) {
      // setmobcontact("Enter valid studMobile");
      alert("Invalid Contact Number");
      return false;
    }
    if (organ.length == 0) {
      alert("Organ cannot be empty");
      return false;
    }
    if (datetime1.length == 0) {
      alert("datetime1 Cannot be Empty");
      return false;
    }
    // console.log("resp nhi de rha h ")
    let res = await axios.post("http://127.0.0.1:5000/addRecepient", {
      password: password,
      age: age,
      bloodGroup: bloodGroup,
      gender: gender,
      name: fname,
      email: email,
      address: address,
      contactNumber: contactNumber,
      neededOrgan: organ,
      timeRequired: datetime1,
    });
    // console.log("resp aa gya h")
    if (res.status === 200) {
      alert("Successfully added");
    } else {
      alert("not added successfully");
    }
    setName("");
    setcontactNumber("");
    setbloodGroup("");
    setgender(false);
    setaddress("");
    setemail("");
    setorgan("");
    setage("");
    setdatetime1("");

    // console.log("res", res)
  };
  let styleh2 = {};

  return (
    <>
      <div className="xyz">
        <Navbar3 data={username2} />
        <h2 style={{ textAlign: "center", marginTop: "5px" }}>
          Patient Registration Form
        </h2>
        <div
          className="container-fluid wholeformcomp"
          style={{ maxWidth: "100%", display: "flex" }}
        >
          <div style={{ flex: 1 }}>
            <img
              src={formphoto}
              alt="Your Image"
              style={{ maxWidth: "100%", height: "100%" }}
            />
          </div>
          <div
            className="container fadmin   p-4 rounded"
            style={{ maxWidth: "50%", flex: 1 }}
          >
            <div className="panel rounded-top">
              <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                <h5>
                  <b>Register Yourself</b>
                </h5>
              </div>
            </div>
            <form className="mx-auto actualform">
              <div className="form-group row mb-1">
                <label htmlFor="name" className="col-sm-3 col-form-label">
                  Name:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={fname}
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    name="fname"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="age" className="col-sm-3 col-form-label">
                  Age:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={age}
                    className="form-control"
                    id="age"
                    placeholder="Enter your age"
                    name="age"
                    onChange={(e) => setage(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="bloodGroup" className="col-sm-3 col-form-label">
                  Blood Group:
                </label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="bloodGroup"
                    name="bloodGroup"
                    value={bloodGroup}
                    onChange={(e) => setbloodGroup(e.target.value)}
                  >
                    <option>Choose your Blood Group</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                    <option>O+</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>AB-</option>
                    <option>O-</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="gender" className="col-sm-3 col-form-label">
                  Gender:
                </label>
                <div className="col-sm-9">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={gender == "male"}
                      onChange={(e) => setgender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={gender == "female"}
                      onChange={(e) => setgender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="address" className="col-sm-3 col-form-label">
                  Address:
                </label>
                <div className="col-sm-9">
                  <textarea
                    className="form-control"
                    id="address"
                    rows="3"
                    value={address}
                    placeholder="Enter your address"
                    name="address"
                    onChange={(e) => setaddress(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 col-form-label">
                  Email:
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  {/* You might want to add email validation here */}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="contactNumber"
                  className="col-sm-3 col-form-label"
                >
                  Contact Number:
                </label>
                <div className="col-sm-9">
                  <input
                    type="tel"
                    className="form-control"
                    value={contactNumber}
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Enter your contact number"
                    onChange={(e) => setcontactNumber(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="form-group row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="donateOrgan" />
                    <label className="form-check-label" htmlFor="donateOrgan">Donate Organ</label>
                </div>
            </div>
        </div> */}
              <div className="form-group row">
                <label htmlFor="organ" className="col-sm-3 col-form-label">
                  Needed Organ:
                </label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="organ"
                    name="organ"
                    value={organ}
                    onChange={(e) => setorgan(e.target.value)}
                  >
                    <option>Choose Organ</option>
                    <option>Heart</option>
                    <option>Liver</option>
                    <option>Kidney</option>
                    <option>Lung</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="datetime" className="col-sm-3 col-form-label">
                  Time Required:
                </label>
                <div className="col-sm-9">
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={datetime1}
                    id="datetime"
                    name="datetime1"
                    onChange={(e) => setdatetime1(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="reenterPassword" className="col-sm-3 col-form-label">Re-enter Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="reenterPassword" name="reenterPassword" placeholder="Re-enter your password" onChange={(e)=>setreenterPassword(e.target.value)} />
            </div>
        </div> */}
              <div className="form-group row">
                <div className="col-sm-12 text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={Save1}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="footer">
          {" "}
          <Footer3 />
        </div>
      </div>
    </>
  );
}
export default PatientReg;
