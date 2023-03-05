import CommonScreen from "@/components/CommonScreen";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/router";
import { useState } from "react";

export default function PhonePage() {
  const [phoneNo, setPhoneNo] = useState("");
  const { loginWithPhone } = useAuth();
  const router = useRouter();
  return (
    <CommonScreen
      percent={"10"}
      onClick={async () => {
        localStorage.setItem("phone", phoneNo)
        await loginWithPhone({
          phoneNo: "+91" + phoneNo.split(" ").join(""),
        });
        router.push("/create/otp-confirm");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What's your Phone Number?</h1>
        <p className="p-2 mt-4 text-md">
          Will send you a text Message with a 4-Digit verification code. Message
          and data rates may apply
        </p>
        <div className="flex flex-row space-x-4 mx-auto">
          <input
            placeholder="+91"
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[52px] text-2xl"
          />
          <input
            type="text"
            value={phoneNo}
            placeholder="91823 67123"
            onChange={(e) => setPhoneNo(e.target.value)}
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[140px] text-2xl"
          />
        </div>
      </div>
    </CommonScreen>
  );
}
