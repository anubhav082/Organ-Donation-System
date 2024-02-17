// import Navbar1 from "../Components/Navbar1";
import Footer3 from "../Components/Footer3";
import "./DonorReg.css";
import axios from "axios";
import formphoto from "../3.jpg";
import { useState } from "react";
import Navbar3 from "../Components/Navbar3";
import { useContext } from "react";
import UserContext from "../Components/UserContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function DonorReg() {
  const { username2 } = useContext(UserContext);
  //       useEffect(()=>
  // {
  // alert(username1)
  // }
  // );
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
  const [donate, setDonate] = useState(false);
  const [datetime1, setdatetime1] = useState("");
  const [alive, setalive] = useState("");
  const [file, setfile] = useState("");
  const [deathCertificateLink, setDeathCertificateLink] = useState('');
  const onFileChange = (e) => {
    let value = e.target.files[0];
    console.log("value: ", value);
    console.log(e);
    setfile(value.name);
  };

  const Save1 = async (e) => {
    e.preventDefault();
    console.log("i am entering");
    if (fname.length == 0) {
      alert("Name Cannot be Empty");
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
    if (donate.length == 0) {
      alert("Please confirm that you want to donate organ");
      return false;
    }
    if (organ.length == 0) {
      alert("Organ cannot be empty");
      return false;
    }
    if (alive.length == 0) {
      alert("Select Donor alive or dead");
      return false;
    }
    // if (alive === "dead") {
    //     if (file.length == 0) {
    //         alert("Please upload death certificate of Donor");
    //         return false;
    //     }
    // }
    // if(datetime1.length==0){
    //     alert("datetime1 Cannot be Empty");
    //     return false;
    // }
    // if (alive.length == 0) {

    //     alert("Select Donor alive or dead");
    //     return false;
    // }
    // else{
    //     alert(alive)
    // }
    // if (alive === "dead") {
    //     if (file.length == 0) {
    //         alert("Please upload death certificate of Donor");
    //         return false;
    //     }
    // }
    console.log("checks ar working");

    let res = await axios.post("http://127.0.0.1:5000/addDonor", {
      password: password,
      age: age,
      bloodGroup: bloodGroup,
      gender: gender,
      name: fname,
      email: email,
      address: address,
      contactNumber: contactNumber,
      organToDonate: organ,
      donor_alive: alive,
      death: deathCertificateLink,
    });
    console.log("i am entering into api call");

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
    setDonate(false);
    setorgan("");
    setage("");
    setalive("");
    setfile("");
    setDeathCertificateLink("");
  };

  let styleh2 = {};

  return (
    <>
      <div className="xyz">
        <Navbar3 data={username2} />
        <h2 style={{ textAlign: "center", marginTop: "5px" }}>
          Donor Registration Form
        </h2>
        <div
          className="container-fluid wholeformcomp "
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
            className="container formbdy fadmin p-3 rounded"
            style={{ maxWidth: "50%", flex: 1 }}
          >
            <div className="panel rounded-top">
              <div className="panel-heading p-1 bg-primary text-black text-center rounded-top panelheading">
                <h5>
                  <b>Register Yourself</b>
                </h5>
              </div>
            </div>
            <div className="mx-auto actualform p-2 rounded-bottom">
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
                    type="number"
                    value={age}
                    className="form-control"
                    id="age"
                    placeholder="Enter your age"
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
                    value={bloodGroup}
                    id="bloodGroup"
                    onChange={(e) => setbloodGroup(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Choose Blood Group
                    </option>
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
                      value="male"
                      id="male"
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
                    value={address}
                    id="address"
                    rows="3"
                    placeholder="Enter your address"
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
                    value={contactNumber}
                    className="form-control"
                    id="contactNumber"
                    placeholder="Enter your contact number"
                    onChange={(e) => setcontactNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="donateOrgan"
                      checked={donate}
                      onChange={(e) => setDonate(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="donateOrgan">
                      Donate Organ
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="organ" className="col-sm-3 col-form-label">
                  Organ to Donate:
                </label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="organ"
                    value={organ}
                    onChange={(e) => setorgan(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Choose Organ
                    </option>
                    <option value="Heart">Heart</option>
                    <option value="Liver">Liver</option>
                    <option value="Kidney">Kidney</option>
                    <option value="Lung">Lung</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="aliveStatus"
                  className="col-sm-3 col-form-label"
                >
                  Is Donor Alive or Dead
                </label>
                <div className="col-sm-9">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="aliveStatus"
                      id="alive"
                      value="alive"
                      checked={alive == "alive"}
                      onChange={(e) => setalive(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="alive">
                      Alive
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="aliveStatus"
                      id="dead"
                      value="dead"
                      checked={alive == "dead"}
                      onChange={(e) => setalive(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="dead">
                      Dead
                    </label>
                  </div>
                </div>
              </div>
              {alive === "dead" && (
                <div className="form-group row">
                  <label
                    htmlFor="deathCertificate"
                    className="col-sm-3 col-form-label"
                  >
                    Death Certificate Link:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="deathCertificate"
                      placeholder="Enter the link for the death certificate"
                      value={deathCertificateLink}
                      onChange={(e) => setDeathCertificateLink(e.target.value)}
                    />
                  </div>
                </div>
              )}
              {/* <div className="form-group row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="reenterPassword" className="col-sm-3 col-form-label">Re-enter Password:</label>
            <div className="col-sm-9">
                <input type="password" className="form-control" id="reenterPassword" placeholder="Re-enter your password" onChange={(e)=>setreenterPassword(e.target.value)} />
            </div>
        </div> */}
              <div className="form-group row">
                <div className="col-sm-12 text-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={Save1}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer" style={{ marginTop: "10px" }}>
          {" "}
          <Footer3 />
        </div>
        {/* <Footer3/> */}
      </div>
    </>
  );
}
export default DonorReg;
