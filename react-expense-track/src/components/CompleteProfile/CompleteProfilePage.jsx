import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toast";

const CompleteProfilePage = () => {
  const [defaultData, setDefaultData] = useState({ fullName: "", url: "" });
  const [userData, setUserData] = useState({
    fullName: "",
    url: "",
  });
  useEffect(() => {
getPreviousValues();
  },[])

  async function getPreviousValues() {
    let idToken = localStorage.getItem("idToken");

    const res = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDkixPtmAYpRieik_IySWFQgHiBpWJZrt4"
      , { idToken: idToken });
    setDefaultData({
      fullName: res.data.users[0].displayName,
      url: res.data.users[0].photoUrl,
    });
  }

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setUserData({ ...userData, [placeholder]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let idToken = localStorage.getItem("idToken");
    try {
      const res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDkixPtmAYpRieik_IySWFQgHiBpWJZrt4",
        {
          idToken: idToken,
          displayName: userData.fullName,
          photoUrl: userData.url,
        }
      );

      toast("Profile Updated");
      document.querySelector("form").reset();
    } catch (e) {
      toast(e.response.data.error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form m-auto my-5 w-25 p-3 shadow-lg rounded-3"
      >
        <div className=" form-floating mb-3">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            placeholder="fullName"
            defaultValue={defaultData.fullName}
            required
          />
          <label>Full Name</label>
        </div>

        <div className=" form-floating mb-3">
          <input
            type="url"
            className="form-control"
            onChange={handleChange}
            placeholder="url"
            defaultValue={defaultData.url}
            required
          />
          <label>Profile Photo URL</label>
        </div>

        <input type="submit" className=" btn btn-secondary" value="UPDATE" />
      </form>
    </div>
  );
};

export default CompleteProfilePage;
