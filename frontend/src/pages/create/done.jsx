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
  "Androsexual",
];

export default function OtpConfirmPage() {
  const router = useRouter();
  return (
    <CommonScreen
      percent={"40"}
      onClick={async () => {
        localStorage.setItem("sexuality", JSON.stringify(selectedSexuality));
        router.push("/create/interests");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">Information Filled</h1>
        <div className="flex flex-col space-y-4 mx-[10%] mt-4">
          <h3 className="text-xl">
            Congratulations for filling in the details! 🥳
          </h3>
        </div>
      </div>
    </CommonScreen>
  );
}
