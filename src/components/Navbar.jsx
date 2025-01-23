
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {

    return (
        <nav className="bg-yellow-100 py-4">
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <div>
                    <Image src="/logo.png" alt="logo" width={40} height={40}/>
                </div>
                <div className="flex justify-center items-center gap-2 sm:gap-4 text-black sm:text-lg">
                    <Link href="/" className="hover:scale-105">Home</Link>
                    <Link href="/profile" className="hover:scale-105">Profile</Link>
                </div>
                <div className="flex flex-col min-[350px]:flex-row justify-end items-center gap-1 min-[350px]:gap-2">
                    <button
                        className="w-max px-2 min-[350px]:px-3 min-[350px]:py-1 bg-green-500 text-white text-sm min-[350px]:text-base rounded-lg outline-none hover:scale-105">Login</button>
                    <button
                        className="w-max px-2 min-[350px]:px-3 min-[350px]:py-1 bg-green-500 text-white text-sm min-[350px]:text-base rounded-lg outline-none hover:scale-105">Register</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;