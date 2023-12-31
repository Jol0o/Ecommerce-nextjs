"use client";
import { auth } from "@/firebase/config";
import { useUserStore } from "@/zustand/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Profile from "./../buttons/Profile";

function Navbar() {
  const [user] = useAuthState(auth);
  const { cart } = useUserStore((state) => state);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const submit = (e) => {
    e.preventDefault();
    if (search != null) {
      router.push(`/search/${search}`);
    }
  };

  return (
    <div className="w-full my-10">
      <div className="container px-2 md:px-10 min-h-[70px] m-auto bg-[#FAFAFA] flex justify-between items-center rounded-md">
        <div>
          <Link href="/">
            <p className="text-sm font-bold">New Drops 🔥</p>
          </Link>
        </div>
        <div>
          <Image src="/logo/Group.png" alt="logo" width={100} height={100} />
        </div>
        <ul className="flex items-center justify-center gap-5">
          <li>
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className={`${
                open ? "w-38 p-2 border" : "w-0"
              } outline-none  ease-out duration-300 capitalize  rounded-md`}
            />
            <button
              onClick={submit}
              onMouseEnter={() => setOpen(true)}
              className="self-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </li>
          <li>
            {user ? (
              <Profile />
            ) : (
              <Link href="/login">
                <button className="px-3 py-1 font-bold uppercase bg-orange-400 text-[#232321] rounded-md">
                  Sign up
                </button>
              </Link>
            )}
          </li>
          {user && (
            <Link href="/cart">
              <li className="px-3 py-1 bg-orange-400 rounded-full">
                {cart.length}
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
