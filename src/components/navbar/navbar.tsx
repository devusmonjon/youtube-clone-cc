"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { DATA, ICONS } from "@/constants";

const Navbar = () => {
    const router = useRouter();
    const input = useRef<HTMLInputElement>(null);

    const [isSearchFocus, setIsSearchFocus] = useState<boolean>(false);
    const [isNotificationsOpen, setIsNotificationsOpen] =
        useState<boolean>(false);
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
    const [inputVal, seInputVal] = useState<string>("");

    const handleFocusToggle = () => {
        setIsSearchFocus(!isSearchFocus);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        seInputVal(e.target.value);
    };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputVal.trim()) {
            input.current?.blur();
            router.push(`/search/${inputVal.trimStart().trimEnd()}`);
        }
    };

    return (
        <nav className="h-[56px] flex justify-between items-center px-[72px]">
            <Link href={"/"} className="w-[90px]">
                {ICONS.logo.icon}
            </Link>
            <div className="flex gap-4">
                <form className="flex relative" onSubmit={handleSearch}>
                    <div
                        className={`w-[36px] justify-end align-center ${
                            isSearchFocus
                                ? "border-[#194c89] flex"
                                : "hidden border-[#303030]"
                        } border-r-0 border-solid border-[1px] bg-dark rounded-[40px_0_0_40px]`}
                    >
                        <div className="w-[20px]">{ICONS.search.icon}</div>
                    </div>
                    <input
                        ref={input}
                        type="text"
                        name="search"
                        placeholder="Search"
                        onChange={handleInput}
                        className={`h-[40px] px-4 w-[515px] outline-none border-[#303030] border-solid border-[1px] focus:border-[#194c89] bg-dark ${
                            isSearchFocus
                                ? "border-l-[#0f0f0f!important]"
                                : "rounded-[40px_0_0_40px]"
                        }`}
                        onFocus={handleFocusToggle}
                        onBlur={() =>
                            setTimeout(() => {
                                handleFocusToggle();
                            }, 500)
                        }
                    />
                    <button
                        type="submit"
                        className="h-[40px] w-[64px] flex items-center justify-center bg-[#303030] rounded-[0_40px_40px_0] outline-none"
                    >
                        <div className="w-[24px]">{ICONS.search.icon}</div>
                    </button>
                    <div
                        className={`absolute w-full bg-[#212121] top-[45px] rounded-[12px] p-[16px_0_8px] overflow-y-auto list ${
                            isSearchFocus && inputVal.trim()
                                ? "block"
                                : "hidden"
                        }`}
                    >
                        <ul>
                            {[inputVal, ...DATA.searchQueryies]
                                .slice(0, 15)
                                .map((query) => {
                                    if (query === inputVal) query = "";
                                    return (
                                        <li key={query} className="w-full">
                                            <button
                                                className="w-full flex items-center gap-4 hover:bg-[#404040] py-2"
                                                onClick={() =>
                                                    router.push(
                                                        `/search/${inputVal} ${query}`,
                                                    )
                                                }
                                                title={query}
                                                type="button"
                                            >
                                                <div className="w-[20px] h-[20px] px-4 text-light">
                                                    <div className="w-[20px] h-[20px]">
                                                        {ICONS.search.icon}
                                                    </div>
                                                </div>
                                                <span className="pl-1">
                                                    {inputVal} {query}
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </form>
                <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#303030] hover:bg-[#404040] focus:bg-[#404040]">
                    <div className="w-[24px]">{ICONS.mic.icon}</div>
                </button>
            </div>
            <div className="flex items-center gap-4 relative">
                <button
                    className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-[#303030] focus:bg-[#303030]"
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                    <div className="w-[24px]">{ICONS.notification.icon}</div>
                    <div
                        className={`${
                            isNotificationsOpen ? "block" : "hidden"
                        } w-[480px] bg-[#282828] rounded-[12px] absolute top-[45px] right-0`}
                    >
                        <h1 className="p-4 border-b-[1px] border-b-[#404040] border-solid text-start text-[18px]">
                            Bildirishnomalar
                        </h1>
                        <ul>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                notification
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                notification
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                notification
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                notification
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                notification
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                notification
                            </li>
                        </ul>
                    </div>
                </button>
                <button
                    className="overflow-hidden w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#303030] relateive"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    title="Profile picture"
                >
                    <Image
                        src={"https://picsum.photos/40"}
                        alt="Profile picture"
                        width={40}
                        height={40}
                    />
                    <div
                        className={`${
                            isProfileOpen ? "block" : "hidden"
                        } w-[200px] bg-[#282828] rounded-[12px] absolute top-[45px] right-0`}
                    >
                        <h1 className="p-4 border-b-[1px] border-b-[#404040] border-solid text-start text-[16px]">
                            Profile
                        </h1>
                        <ul>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                Settings
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                Settings
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                Settings
                            </li>
                            <li className="text-start p-4 text-[16px] hover:bg-[#303030]">
                                Settings
                            </li>
                        </ul>
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
