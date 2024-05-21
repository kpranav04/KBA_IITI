// import './Login.css';
// // import logo from '../images/loglogo.png'
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import axios from "axios"
// // import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../../components/navbar/navbar';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';


// const Create = () => {


//   const [isLoading, setIsLoading] = useState(false);
//  // const [info, setInfo] = useState({});
//   const [responseValue, setResponseValue] = useState(null);

//   const navigate = useHistory();
// //  const { data, loading, error } = useFetch("http://localhost:3000/auth/register");

//   const formik = useFormik({
//     initialValues: {
//       firstname: '',
//       lastname: '',
//       username: '',
//       contactNo: '',
//       password: '',
//       age: '',
//       email: '',
//     },
//     validationSchema: Yup.object({
//       firstname: Yup.string().required('firstname is required').max(10, "firstname can be only 10 character long"),
//       lastname: Yup.string().required('lastname is required').max(10, "lastname can be only 10 character long"),
//       username:Yup.string().required("username is required"),
//       contactNo:Yup.string().required("contact is required").length(10,"contact must be 10 digits long"),
//       password:Yup.string().required("password is required").min(6, "password must contain atleast 6 character"),
//       age:Yup.string().required("age is required").min(0, "age must be positive"),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//     }),

//   /*  handleChange:(e)=>{
//       setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//     },*/

//     onSubmit:async (values) => {
      
//       try {
//       /*  toast.success('Registered Succesfully ', {
//           position: toast.POSITION.TOP_CENTER
//         });*/
//         setIsLoading(true);
         
//           const response = await axios.post("http://localhost:3000/auth/register", values);
//           setResponseValue(response.data);
//           console.log(response.data);
//          setTimeout(() => {
//           setIsLoading(false);
//             navigate.push("/login");
//           }, 2000); // Delay the navigation by 2000 milliseconds (2 seconds)
  
  
//       }
//       catch (err) {
//         toast.error('Try different Username/Password/Email', {
//           position: toast.POSITION.TOP_CENTER
//         });
//         setIsLoading(false);
//         console.log(err)
//       }
//     },
//   });


  



//   return (
//     <>
      
//       <ToastContainer />

//       {isLoading ? (
//        <div class="loader"></div>
//       ) : (
//       <>
//       <Navbar />
//       <div className="flex">
//         <div className="left"></div>
//         <div className="create">
//           <img src={logo} alt="" style={{ width: '200px' }} className="loglogo" />
//           <h2 style={{ fontSize: '48px', fontWeight: '1000' }}><b>Register</b></h2>
//           <div>
//             <input
//               className='entry'
//               type="string"
//               required
//               value={formik.values.firstname}
//               onChange={formik.handleChange} 
//               placeholder='First Name:'
//               id='firstname'
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.firstname && formik.errors.firstname ? (
//           <div style={{color:"red" , marginTop:"2px", fontSize:"15px"}}>{formik.errors.firstname}</div>
//         ) : null}

//           </div>

//           <div>
//             <input
//               className='entry'
//               type="string"
//               required
//               onChange={formik.handleChange} placeholder='Last Name:' id='lastname'
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.lastname && formik.errors.lastname ? (
//           <div style={{color:"red" , marginTop:"2px", fontSize:"15px"}}>{formik.errors.lastname}</div>
//         ) : null}

//           </div>
//           <div>
//             <input
//               className='entry'
//               type="tel"
//               required
//               onBlur={formik.handleBlur}
//               onChange={formik.handleChange} placeholder='Contact no:' id='contactNo'
//             />
//              {formik.touched.contactNo && formik.errors.contactNo ? (
//           <div style={{color:"red" , marginTop:"2px", fontSize:"15px"}}>{formik.errors.contactNo}</div>
//         ) : null}

//           </div>

//          <div> <input
//             className='entry'
//             type="email"
//             required
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange} placeholder='Email address:' id='email'
//           />
//            {formik.touched.email && formik.errors.email ? (
//           <div style={{color:"red" , marginTop:"2px", fontSize:"15px"}}>{formik.errors.email}</div>
//         ) : null}

//           </div>
          
//          <div>
//          <input
//             className='entry'
//             type="text"
//             required
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange} placeholder='Username' id='username'
//           />
//            {formik.touched.username && formik.errors.username ? (
//           <div style={{color:"red" , marginTop:"2px", fontSize:"15px"}}>{formik.errors.username}</div>
//         ) : null}

//          </div>

//          <div>

//          <input
//             className='entry'
//             type="password"
//             required
//             onBlur={formik.handleBlur}
//             onChange={formik.handleChange} placeholder='Password:' id='password'
//           />
//           {formik.touched.password && formik.errors.password ? (
//           <div style={{color:"red" , marginTop:"2px", fontSize:"15px"}}>{formik.errors.password}</div>
//         ) : null}

//          </div>
//          <div>
//          <input
//             className='entry'
//             type="number"
//             required
//             onBlur={formik.handleBlur}
//             min="0"
//             onChange={formik.handleChange} placeholder='Age' id='age'
//           />
//           {formik.touched.age && formik.errors.age ? (
//           <div style={{color:"red" , marginTop:"2px", fontSize:"15px"}}>{formik.errors.age}</div>
//         ) : null}

//          </div>

//           <br /><br />

//           <button style={{ color: 'white', fontWeight: '200', fontFamily: 'Montserrat, sans-serif', padding: '13px 38px 13px 7px', width: '250px', border: 'none', borderRadius: '4px', backgroundColor: '#d1410c', cursor: 'pointer', textDecoration: 'none' }} className="logregbtn"><a style={{ textDecoration: "none", color: 'white' }} href="/Login" ><span style={{ textDecoration: "none" }} onClick={formik.handleSubmit}>Register</span></a></button>
//           <br />
//           <hr style={{ width: '237px' }} />

//         </div>
//       </div>
      
//       </>
//       )}
//     </>
//   );
// }

// export default Create;