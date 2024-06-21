// // (simple non-styled form)

// import React, { useState } from "react";

// const CandidateForm = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     first_name: "",
//     last_name: "",
//     time_interval: "",
//     linkedin: "",
//     github: "",
//     text: "",
//     phone_number: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/api/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error adding or updating candidate");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="first_name"
//           value={formData.first_name}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="last_name"
//           value={formData.last_name}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Time Interval:
//         <input
//           type="text"
//           name="time_interval"
//           value={formData.time_interval}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         LinkedIn:
//         <input
//           type="url"
//           name="linkedin"
//           value={formData.linkedin}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         GitHub:
//         <input
//           type="url"
//           name="github"
//           value={formData.github}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Text:
//         <textarea name="text" value={formData.text} onChange={handleChange} />
//       </label>
//       <br />
//       <label>
//         Phone Number:
//         <input
//           type="text"
//           name="phone_number"
//           value={formData.phone_number}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CandidateForm;

// // (form using formik)

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email address").required("Required"),
//   first_name: Yup.string().required("Required"),
//   last_name: Yup.string().required("Required"),
//   time_interval: Yup.string().required("Required"),
//   linkedin: Yup.string().url("Invalid URL").required("Required"),
//   github: Yup.string().url("Invalid URL").required("Required"),
//   text: Yup.string().required("Required"),
//   phone_number: Yup.string().required("Required"),
// });

// const CandidateForm = () => {
//   const initialValues = {
//     email: "",
//     first_name: "",
//     last_name: "",
//     time_interval: "",
//     linkedin: "",
//     github: "",
//     text: "",
//     phone_number: "",
//   };

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//         resetForm();
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error adding or updating candidate");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Candidate Form</h2>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <Field
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="first_name" className="form-label">
//                 First Name
//               </label>
//               <Field
//                 type="text"
//                 className="form-control"
//                 id="first_name"
//                 name="first_name"
//               />
//               <ErrorMessage
//                 name="first_name"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="last_name" className="form-label">
//                 Last Name
//               </label>
//               <Field
//                 type="text"
//                 className="form-control"
//                 id="last_name"
//                 name="last_name"
//               />
//               <ErrorMessage
//                 name="last_name"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="time_interval" className="form-label">
//                 Time Interval
//               </label>
//               <Field
//                 type="text"
//                 className="form-control"
//                 id="time_interval"
//                 name="time_interval"
//               />
//               <ErrorMessage
//                 name="time_interval"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="linkedin" className="form-label">
//                 LinkedIn
//               </label>
//               <Field
//                 type="url"
//                 className="form-control"
//                 id="linkedin"
//                 name="linkedin"
//               />
//               <ErrorMessage
//                 name="linkedin"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="github" className="form-label">
//                 GitHub
//               </label>
//               <Field
//                 type="url"
//                 className="form-control"
//                 id="github"
//                 name="github"
//               />
//               <ErrorMessage
//                 name="github"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="text" className="form-label">
//                 Text
//               </label>
//               <Field
//                 as="textarea"
//                 className="form-control"
//                 id="text"
//                 name="text"
//                 rows="3"
//               />
//               <ErrorMessage
//                 name="text"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="phone_number" className="form-label">
//                 Phone Number
//               </label>
//               <Field
//                 type="text"
//                 className="form-control"
//                 id="phone_number"
//                 name="phone_number"
//               />
//               <ErrorMessage
//                 name="phone_number"
//                 component="div"
//                 className="text-danger"
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-primary"
//               disabled={isSubmitting}
//             >
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default CandidateForm;

// (form using form data and bootstrap)

import React, { useState } from "react";

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    time_interval: "",
    linkedin: "",
    github: "",
    text: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding or updating candidate");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Candidate Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time_interval" className="form-label">
            Time Interval
          </label>
          <input
            type="text"
            className="form-control"
            id="time_interval"
            name="time_interval"
            value={formData.time_interval}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="linkedin" className="form-label">
            LinkedIn
          </label>
          <input
            type="url"
            className="form-control"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="github" className="form-label">
            GitHub
          </label>
          <input
            type="url"
            className="form-control"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Text
          </label>
          <textarea
            className="form-control"
            id="text"
            name="text"
            rows="3"
            value={formData.text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="phone_number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CandidateForm;
