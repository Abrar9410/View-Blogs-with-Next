import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const page = async () => {

    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/login");
    }

    return (
        <>
            <h2 className="text-center text-3xl font-semibold my-10">Welcome to Your Profile, {user.given_name}</h2>
        </>
    );
};

export default page;