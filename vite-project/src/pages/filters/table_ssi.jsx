import Navbar from "../../components/navbar/navbar";
// import "./filters.css";
// import "./css.css";

import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Select from 'react-select';
import kba from './KBA.json'
import { AuthContext } from "../../hooks/context/AuthContext";

const Tabble = ({ item, index1 }) => {
    const [editEnabled, setEditEnabled] = useState(true);
    const [editData, setEditData] = useState({ index:item.data.index});
    
    const {user}=useContext(AuthContext);

    const handleChange = (e) => {
        setEditData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    // useEffect(() => {
    //     handleChange();
    //   }, []);

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        console.log(editData);
        const result = await axios.put("http://localhost:3000/index/edit_ssi", {id:item._id,data:editData});
        setEditEnabled(!editEnabled);
         console.log(result);
        //  navigate.push('/user/profile');
    };
    const handleDelete = async (e)=>{
        e.preventDefault();
        const result = await axios.put("http://localhost:3000/index/delete_ssi", {id:item._id});

    }
    return (
    
   <>
    {/* Location */}
    <td className="py-2 px-4 border-black">{item.data.location}</td>

    {/* Input field for index */}
    <td className="py-2 px-4 w-2 border-black">
        <input 
            type="text" 
            placeholder={item.data.index}
            // value={editData.index} 
            disabled={editEnabled} 
            onChange={handleChange} 
            id="index" 
            className="border ipt rounded-md py-1 px-2 w-2"
        />
    </td>

    {/* Date */}
    <td className="py-2 px-4 border-black">{item.date}</td>

    {/* Conditional rendering for user */}
    {user ? 
        <td className="py-2 px-4 border-black" style={{width:"5rem"}}>
            {/* Conditional rendering for edit mode */}
            {editEnabled ?
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md mr-2"
                    onClick={() => { setEditEnabled(!editEnabled); }}
                >
                    Update
                </button>
                :
                <button 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-md mr-2"
                    onClick={handleSubmitButton}
                >
                    Submit
                </button>
            }
            <button 
                className=" babured bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md"
                onClick={handleDelete}
            >
                Delete
            </button>
        </td> 
        : 
        <></> /* Empty fragment if user is not present */
    }
</> 

    );
};

export default Tabble;