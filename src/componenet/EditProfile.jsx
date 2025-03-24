import React, { useState } from "react";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const EditProfile = ({ data, setShowEdit, setShowToast }) => {
  const dispatch = useDispatch();

  const [FormDataa, setFormData] = useState({
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    age: data.age || "",
    contact: data.contact || "",
    country: data.country || "",
    city: data.city || "",
    photoUrl: data.photoUrl || "",
    skills: data.skills || [],
    hobby: data.hobby || [],
    movies: data.movies || [],
    education: data.education || [],
    about: data.about || "",
  });

  const [skillInput, setSkillInput] = useState({
    skills: "",
    hobby: "",
    movies: "",
    education: "",
  });

  const addSkill = (fields) => {
    if (
      skillInput[fields].trim() &&
      !FormDataa[fields].includes(skillInput[fields].trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        [fields]: [...prev[fields], skillInput[fields].trim()],
      }));
      setSkillInput((prev) => ({ ...prev, [fields]: "" }));
    }
  };

  const removeSkill = (fields, index) => {
    setFormData((prev) => ({
      ...prev,
      [fields]: prev[fields].filter((_, i) => i !== index),
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    const API_KEY = "b48ca55354c6e1db7828be721db53476";
    const url = `https://api.imgbb.com/1/upload?key=${API_KEY}`;

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    
      const imageUrl = res.data.data.url;
     

      setFormData((prev) => ({
        ...prev,
        photoUrl: imageUrl,
      }));
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     

      const res = await axios.patch(BASE_URL + "/profile/edit", FormDataa, {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.data));
      setShowEdit(false);

      document.getElementById("my-drawer").checked = false;
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fieldset w-x  border border-base-300 p-4 rounded-box"
    >
      <legend className="fieldset-legend font-bold text-xl text-primary">
        Edit Profile
      </legend>

      {["firstName", "lastName", "age", "contact", "city", "country"].map(
        (field, i) => (
          <div key={i} className="py-1">
            <label className="fieldset-label py-2">{field} :</label>
            <input
              type="text"
              className="input input-info"
              placeholder={field}
              name={field}
              value={FormDataa[field]}
              onChange={handleChange}
            />
          </div>
        )
      )}
      <div className="flex justify-center">
        {/*  Show Image Preview */}
        {FormDataa.photoUrl && (
          <img
            src={FormDataa.photoUrl}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full mt-2"
          />
        )}
      </div>

      {/*  Image Upload Field */}
      <label className="fieldset-label py-2">Profile Picture</label>
      <input
        type="file"
        className="file-input file-input-info"
        name="photoUrl"
        onChange={handleImageUpload}
      />

      {["skills", "hobby", "movies", "education"].map((fields, i) => (
        <div key={i}>
          <label className="fieldset-label py-2 ">{fields} :</label>
          <div className=" flex flex-wrap gap-2 ">
            {FormDataa[fields] &&
              FormDataa[fields].map((item, index) => (
                <span key={index} className="px-2 bg-gray-300 text-black m-2">
                  {item}
                  <button onClick={() => removeSkill(fields, index)}>❌</button>
                </span>
              ))}
          </div>
          <input
            type="text"
            className="file-input file-input-info"
            name={fields}
            value={skillInput[fields] || ""}
            onChange={(e) =>
              setSkillInput((prev) => ({ ...prev, [fields]: e.target.value }))
            }
          />
          <button
            type="button"
            onClick={() => addSkill(fields)}
            className="p-2 bg-gray-500 text-black m-2"
          >
            Add {fields}
          </button>
        </div>
      ))}
      <label className="fieldset-label py-2 ">About:</label>
      <textarea
        type="text"
        name="about"
        placeholder=""
        className="textarea textarea-info"
        value={FormDataa.about}
        onChange={handleChange}
      ></textarea>

      <button className="btn btn-neutral mt-4" type="submit">
        Submit
      </button>
    </form>
  );
};

export default EditProfile;
