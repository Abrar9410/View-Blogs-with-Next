import logo from "../assets/logo.png"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "./AuthButtons";


const Navbar = async () => {

    const {getUser} = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className="bg-yellow-100 py-4">
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <div>
                    <Image src={logo} alt="logo" width={40} height={40} />
                </div>
                <div className="flex justify-center items-center gap-2 sm:gap-4 text-black sm:text-lg">
                    <Link href="/" className="hover:scale-105">Home</Link>
                    <Link href="/profile" className="hover:scale-105">Profile</Link>
                </div>
                {
                    user ?
                        <LogoutLink>
                            <button
                                className="w-max px-2 min-[350px]:px-3 min-[350px]:py-1 bg-red-500 text-white text-sm min-[350px]:text-base rounded-lg outline-none hover:scale-105">
                                Log Out
                            </button>
                        </LogoutLink> :
                        <AuthButtons></AuthButtons>
                }
            </div>
        </nav>
    );
};

export default Navbar;