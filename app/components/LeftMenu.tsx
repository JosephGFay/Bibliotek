"use client";
import { useState } from "react";
export default function leftMenu() {
    const [active, setActive] = useState(false);

    const style = {
        header: "text-2xl text-white mt-4 mb-2",
        listItem: "text-md text-zinc-200",
        unorderedList: "flex flex-col space-y-4",
    };

    return (
        <div>
            <button className={(active ? 'opacity-0' : 'opacity-100') + " hover:border-zinc-100 transition-all duration-500 ease-in-out absolute  m-4 border-gray-500 border-4 rounded-xl p-2 w-10 h-10"}
                onClick={() => setActive(true)}>

            </button>

            <div className={(active ? "" : "-translate-x-80") + " border-2 transition border-gray-500 w-5/6 h-screen relative duration-500 ease-in-out"}>

                {/* Exit Button */}
                <button
                    className="hover:border-zinc-100 absolute right-0 m-4 border-gray-500 border-4 rounded-xl p-2 w-10 h-10"
                    onClick={() => setActive(false)}>
                </button>

                <ul className="mx-8 my-8">
                    <h5 className={style.header}>Containers</h5>

                    <ul className={style.unorderedList}>
                        <li className={style.listItem}>Container_02</li>
                        <li className={style.listItem}>Container_03</li>
                        <li className={style.listItem}>Container_01</li>
                        <li className={style.listItem}>Container_04</li>
                        <li className={style.listItem}>Container_05</li>
                    </ul>

                    <h5 className={style.header}>Buttons</h5>
                    <ul className={style.unorderedList}>
                        <li className={style.listItem}>Button_01</li>
                        <li className={style.listItem}>Button_02</li>
                        <li className={style.listItem}>Button_03</li>
                        <li className={style.listItem}>Button_04</li>
                        <li className={style.listItem}>Button_05</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}
