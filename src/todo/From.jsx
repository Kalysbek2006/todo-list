import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";



const From = () => {
    return (
        <div className="">
            <div className="flex justify-between my-[20px]">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">lorem</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">lorem</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">delete</button>
            </div>
            <div className="flex w-full justify-between bg-white transition hover:bg-blue-400 h-[48px] rounded-[20px] p-[10px]">
                <div className="flex items-center gap-2">
                    <input type="checkbox"/>
                    <p className="text-black">fbdjkl</p>
                </div>
                <div className="flex items-center gap-2 text-black">
                    <button>
                        <FaPen/>
                    </button>
                    <button>
                        <MdDelete className="text-[20px]"/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default From;