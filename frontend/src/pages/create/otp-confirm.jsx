import { useAuth } from "@/providers/AuthProvider";

export default function OtpConfirmPage() {
  const { confirmOTP } = useAuth();
  return (
    <CommonScreen
      percent={"20"}
      onClick={async () => {
        await confirmOTP({
          otp
        });
        // router.push("/otp-confirm");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What's your Phone Number?</h1>
        <p className="p-2 mt-4 text-md">
          An OTP has been sent to your number.{' '}
          Please confirm it
        </p>
        <div className="flex flex-row space-x-4 mx-auto">
          <input
            placeholder="+91"
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[60px] text-2xl"
          />
          <input
            value={phoneNo}
            placeholder="91823 67123"
            onChange={(e) => setPhoneNo(e.target.value)}
            className="border-solid bg-slate-100 border-b-4 border-gray-600 hover:border-black h-[38px] w-[150px] text-2xl"
          />
        </div>
      </div>
    </CommonScreen>
  );
}
