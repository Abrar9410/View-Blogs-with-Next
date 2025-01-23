"use client"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const AuthButtons = () => {
    return (
        <div className="flex flex-col min-[350px]:flex-row justify-end items-center gap-1 min-[350px]:gap-2">
            <LoginLink>
                <button
                    className="w-max px-2 min-[350px]:px-3 min-[350px]:py-1 bg-green-500 text-white text-sm min-[350px]:text-base rounded-lg outline-none hover:scale-105">
                    Log In
                </button>
            </LoginLink>
            <RegisterLink>
                <button
                    className="w-max px-2 min-[350px]:px-3 min-[350px]:py-1 bg-green-500 text-white text-sm min-[350px]:text-base rounded-lg outline-none hover:scale-105">
                    Register
                </button>
            </RegisterLink>
        </div>
    );
};

export default AuthButtons;