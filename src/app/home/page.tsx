import { auth } from "@/auth";
import Logout from "@/components/Logout";
import Image from "next/image";
import DefaultImage from "/public/avatars/default.png";

import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  const userImage = session?.user?.image || DefaultImage;

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">Welcome, {session?.user?.name}</h1>
      <Image
        src={userImage}
        alt={session?.user?.name || "User Image"}
        width={72}
        height={72}
        className="rounded-full w-auto h-auto"
      />
      <Logout />
    </div>
  );
};

export default HomePage;
