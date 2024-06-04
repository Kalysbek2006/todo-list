import React from 'react';
import {LiaAddressBookSolid} from "react-icons/lia";
import From from "./From.jsx";

const List = () => {
    return (
        <div className="w-[600px] min-h-[500px] border-[1px] my-[50px] px-[15px]">
            <div className="flex gap-[20px] py-[30px]">
                <input type="text" placeholder="напишите зодачу"
                className="w-full p-[10px] rounded-[20px]"
                />
                <button className="text-[30px] bg-white text-black rounded-[50%] w-[50px] h-[50px]">
                   +
                </button>
            </div>
            <From/>
        </div>
    );
};

export default List;