import { useState } from "react";
import contactUs from "../../../../public/images/contact-us.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting with TastyTrails, We will reply ASAP.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="w-[90%] flex flex-wrap justify-evenly items-center overflow-y-hidden">
      <div className="contact-left">
        <img className="w-[90%] object-cover" src={contactUs} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[3rem] font-semibold">Contact us</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center p-[10px]"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
            placeholder="Type your Message here..."
            required
          ></textarea>
          <button
            className="text-white bg-[#d97919] text-[1.2rem] font-semibold py-2.5 px-5 border-none rounded-[5px] cursor-pointer hover:bg-[darkgreen] transition-all 0.3s ease-in-out"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
