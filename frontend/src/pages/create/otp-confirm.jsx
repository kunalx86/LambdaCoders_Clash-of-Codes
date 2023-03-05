import { useAuth } from "@/providers/AuthProvider";
import CommonScreen from "@/components/CommonScreen";
import { useState } from "react";
import { useRouter } from "next/router";

export default function OtpConfirmPage() {
  const { confirmOTP } = useAuth();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const router = useRouter();
  return (
    <CommonScreen
      percent={"29"}
      onClick={async () => {
        await confirmOTP({
          otp: otp.join(""),
        });
        router.push("/create/name");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">Please confirm the OTP</h1>
        <p className="p-2 mt-4 text-md">
          An OTP has been sent to your number. Please confirm it
        </p>
        <div className="flex flex-row space-x-4 mx-auto">
          <input
            value={otp[0]}
            maxLength={1}
            onChange={(e) =>
              setOtp((s) => {
                const s_ = [...s];
                s_[0] = e.target.value;
                return s_;
              })
            }
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[30px] text-2xl"
          />
          <input
            placeholder=""
            maxLength={1}
            value={otp[1]}
            onChange={(e) =>
              setOtp((s) => {
                const s_ = [...s];
                s_[1] = e.target.value;
                return s_;
              })
            }
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[30px] text-2xl"
          />
          <input
            placeholder=""
            maxLength={1}
            value={otp[2]}
            onChange={(e) =>
              setOtp((s) => {
                const s_ = [...s];
                s_[2] = e.target.value;
                return s_;
              })
            }
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[30px] text-2xl"
          />
          <input
            placeholder=""
            maxLength={1}
            value={otp[3]}
            onChange={(e) =>
              setOtp((s) => {
                const s_ = [...s];
                s_[3] = e.target.value;
                return s_;
              })
            }
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[30px] text-2xl"
          />
          <input
            placeholder=""
            maxLength={1}
            value={otp[4]}
            onChange={(e) =>
              setOtp((s) => {
                const s_ = [...s];
                s_[4] = e.target.value;
                return s_;
              })
            }
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[30px] text-2xl"
          />
          <input
            placeholder=""
            maxLength={1}
            value={otp[5]}
            onChange={(e) =>
              setOtp((s) => {
                const s_ = [...s];
                s_[5] = e.target.value;
                return s_;
              })
            }
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[30px] text-2xl"
          />
        </div>
      </div>
    </CommonScreen>
  );
}
