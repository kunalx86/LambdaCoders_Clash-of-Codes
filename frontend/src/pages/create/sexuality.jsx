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
        console.log(date)
        // router.push("/otp-confirm");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What's your sexuality?</h1>
        <div className="flex flex-col space-y-4 mx-auto">
          {
            sexualities.map(sexuality => (
              <div key={sexuality} className="border-b-gray-400">
              </div>
            ))
          }
        </div>
      </div>
    </CommonScreen>
  );
}

