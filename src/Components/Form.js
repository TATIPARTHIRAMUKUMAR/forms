import React, { useEffect, useState } from "react";
import "./Form.css";
import Labeltext from "../Widgets/Labeltext";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form({ setshowthankyou }) {
  const [diablebutton, setdiablebutton] = useState(true);
  const [mainData, setmainData] = useState({});

 

  let state = [
    "select State",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  var formlabels = [
    {
      labelname: "First Name",
      placeholder: "First Name",
      name: "First_Name",
      type: "textfield",
      required: true,
    },
    {
      labelname: "Last Name",
      placeholder: "Last Name",
      name: "Last_Name",
      type: "textfield",
      required: true,
    },
    {
      labelname: "Email",
      placeholder: "Email",
      name: "Email",
      type: "textfield",
      required: true,
    },
    {
      labelname: "Confirm your Email",
      placeholder: "Confirm Email",
      name: "Confirm_Email",
      type: "textfield",
      required: true,
    },
    {
      labelname: "Address 1",
      placeholder: "Address 1",
      name: "Address_1",
      type: "textfield",
      required: true,
    },
    {
      labelname: "Address 2",
      placeholder: "Address 2",
      name: "Address_2",
      type: "textfield",
      required: false,
    },
    {
      labelname: "City",
      placeholder: "City",
      name: "City",
      type: "textfield",
      required: true,
    },
    {
      labelname: "State / Province",
      placeholder: "Select State",
      name: "state",
      type: "select",
      options: state,
      required: true,
    },
    {
      labelname: "Zip / Postal Address",
      placeholder: "Zip",
      name: "Zip",
      type: "textfield",
      required: true,
    },
    {
      labelname: "Phone Number",
      placeholder: "Phone Number",
      name: "Phone_Number",
      type: "textfield",
      required: true,
    },
    {
      labelname: "I have read the official rules and Privacy Policy",
      // placeholder:"First Name",
      type: "checkbox",
      name: "privacy",
      required: true,
    },
  ];
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleInputChange = (e, key) => {
    setmainData((prevData) => ({
      ...prevData,
      [key]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(mainData,"maindta1")
    if (
      mainData?.First_Name &&
      mainData?.Last_Name &&
      mainData?.Email &&
      mainData.Confirm_Email &&
      mainData.Address_1 &&
      mainData.City &&
      mainData.state &&
      mainData.Zip &&
      mainData.Phone_Number &&
      mainData.privacy
    )
    setdiablebutton(false);
  }, [mainData]);

  const handlesubmit = () => {
    let s = Object.entries(mainData).map(([key, value]) => {
      return key + " is " + value;
    });
    let str = "";
    for (let i of s) {
      str = str + i + "\n";
    }
    // alert(str);
    if (!diablebutton) {
      setshowthankyou(false);
      console.log("bye")
    } 
    if (diablebutton) {
        console.log("elo")
        alert("Please enter all the required fields to submit");

    }
  };

  return (
    <div>
      <div className="FormHeaderText">Enter for your chance to win!</div>
      <div className="FormContent">
        {formlabels.map((inputdata) => {
          return (
            <Labeltext
              inputdata={inputdata}
              handleInputChange={handleInputChange}
            />
          );
        })}
        <div className="FormCaptcha">
          <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
        </div>
      </div>
      <div className="FormSubmit">
        <button
          style={{
            backgroundColor: "orangered",
            height: "35px",
            width: "7%",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        //   disabled={diablebutton}
          onClick={handlesubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
