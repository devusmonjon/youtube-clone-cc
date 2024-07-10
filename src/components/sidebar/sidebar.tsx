"use client";
import { ICONS } from "@/constants";
import { useState } from "react";

const Sidebar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const handleModalToggle = () => {
        setIsMenuOpened(!isMenuOpened);
    };
    return (
        <aside className="w-[200px] h-screen fixed left-0 top-0">
            <div className="h-[56px] flex items-center pl-4">
                <button
                    onClick={handleModalToggle}
                    title="menu"
                    className="w-[40px] h-[40px] rounded-full focus:bg-[#404040] active:bg-[#505050] hover:bg-[#303030] flex items-center justify-center"
                >
                    <div className="w-[24px] h-[24px]">{ICONS.menu.icon}</div>
                </button>
            </div>
            <ul
                className={`${
                    isMenuOpened ? "w-[240px]" : "w-[72px]"
                } h-[calc(100vh-56px)] px-2`}
            >
                <li className="px-4 flex items-center gap-4 bg-[#202020] py-[14px] rounded-[12px] hover:bg-[#303030] active:bg-[#505050] cursor-pointer">
                    <div className="w-[24px] h-[24px]">{ICONS.home.icon}</div>
                    <span
                        className={`${
                            isMenuOpened ? "block" : "hidden"
                        } text-[15px]`}
                    >
                        Asosiy
                    </span>
                </li>
                <li className="px-4 flex items-center gap-4 py-[14px] rounded-[12px] hover:bg-[#202020] active:bg-[#505050] cursor-pointer">
                    <div className="w-[24px] h-[24px]">{ICONS.shorts.icon}</div>
                    <span
                        className={`${
                            isMenuOpened ? "block" : "hidden"
                        } text-[15px]`}
                    >
                        Shorts
                    </span>
                </li>
                <li className="px-4 flex items-center gap-4 py-[14px] rounded-[12px] hover:bg-[#202020] active:bg-[#505050] cursor-pointer">
                    <div className="w-[24px] h-[24px]">
                        {ICONS.subscriptions.icon}
                    </div>
                    <span
                        className={`${
                            isMenuOpened ? "block" : "hidden"
                        } text-[15px]`}
                    >
                        Obunalar
                    </span>
                </li>
                <li className="px-4 flex items-center gap-4 py-[14px] rounded-[12px] hover:bg-[#202020] active:bg-[#505050] cursor-pointer">
                    <div className="w-[24px] h-[24px]">{ICONS.you.icon}</div>
                    <span
                        className={`${
                            isMenuOpened ? "block" : "hidden"
                        } text-[15px]`}
                    >
                        Siz
                    </span>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
