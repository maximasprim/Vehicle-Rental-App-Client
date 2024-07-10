// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import loginPic from '../assets/login.png';
// import { NavLink } from 'react-router-dom';
// import { useRegisterUserMutation } from '../features/Register/registerApi';

// export default function Register() {
//     const [fullName, setFullName] = useState('');
//     const [phone, setPhone] = useState('');
//     // const [address, setAddress] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [registerUser] = useRegisterUserMutation();
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await registerUser({ full_name: full_name, phone, address, email, password }).unwrap();
//             setMessage('Registration successful!');
//             // Optionally, you can clear the form fields after successful registration
//             setFullName('');
//             setPhone('');
//             setAddress('');
//             setEmail('');
//             setPassword('');
//         } catch (error) {
//             setMessage('Failed to register user.');
//             console.error('Failed to register user:', error);
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="grid sm:grid-cols-2 gap-1 h-screen bg-base-200">
//                 <div className="flex items-center justify-center sm:order-first m-5 p-6">
//                     <form onSubmit={handleSubmit} className="card gap-3 place-items-center p-6 rounded-box">
//                         <div className="chat chat-end p-3">
//                             <div className="chat-bubble text-4xl m-3">Register</div>
//                         </div>
//                         <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
//                             <input
//                                 type="text"
//                                 className="grow"
//                                 placeholder="Full Name"
//                                 value={fullName}
//                                 onChange={(e) => setFullName(e.target.value)}
//                             />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
//                             <input
//                                 type="text"
//                                 className="grow"
//                                 placeholder="Phone"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                             />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
//                             <input
//                                 type="text"
//                                 className="grow"
//                                 placeholder="Address"
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                             />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
//                             <input
//                                 type="email"
//                                 className="grow"
//                                 placeholder="Email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
//                             <input
//                                 type="password"
//                                 className="grow"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </label>
//                         <button type="submit" className="btn btn-outline btn-info w-11/12">Register</button>
//                         {message && <div className="text-center mt-4">{message}</div>}
//                         <NavLink to="/" className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "active" : ""}>
//                             🏡Go to HomePage
//                         </NavLink>
//                     </form>
//                 </div>
//                 <div className="flex items-center justify-center sm:h-full md:h-screen bg-base-300 p-6">
//                     <img src={loginPic} alt="nopic" />
//                 </div>
//             </div>
//         </>
//     );
// }
