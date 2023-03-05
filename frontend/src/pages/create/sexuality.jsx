import { useAuth } from "@/providers/AuthProvider";
import CommonScreen from "@/components/CommonScreen";
import { useState } from "react";
import { useRouter } from "next/router";

const sexualities = [
  "Prefer Not to Say",
  "Straight",
  "Gay",
  "Lesbian",
  "Bisexual",
  "Allosexual",
  "Androsexual"
]

export default function OtpConfirmPage() {
  const router = useRouter();
  return (
    <CommonScreen
      percent={"40"}
      onClick={async () => {
        // await confirmOTP({
        //   otp: otp.join(""),
        // });
        router.push("/create/interests");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What's your sexuality?</h1>
        <div className="flex flex-col space-y-4 mx-[10%] mt-4">
          {
            sexualities.map(sexuality => (
              <div key={sexuality} className="border-2 border-l-white border-r-white border-t-white border-b-gray-400 p-2 hover:border-2 hover:border-gray-400 hover:rounded-lg">
                <h3 className="text-lg">{sexuality}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </CommonScreen>
  );
}

