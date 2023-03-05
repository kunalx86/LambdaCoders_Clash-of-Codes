import { useAuth } from "@/providers/AuthProvider";
import CommonScreen from "@/components/CommonScreen";
import { useState } from "react";
import { useRouter } from "next/router";
import { Datepicker } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { URL } from "../../axios";
import axios from "axios";

export default function OtpConfirmPage() {
  const { confirmOTP } = useAuth();
  const [date, setDate] = useState()
  const router = useRouter();
  const data = useAuth()?.user;
  return (
    <CommonScreen
      percent={"58"}
      onClick={async () => {
        console.log(date)
        localStorage.setItem("dob", JSON.stringify(date));
        axios.post(URL + "/user/editProfile", { DOB: date, mobileNo: parseInt(data.phoneNumber) }).then((res) => {
          console.log(res);
          router.push("/create/gender");
        }).catch((err) => {
          console.log(err)
        })
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What is your date of birth?</h1>
        <p className="p-2 mt-4 text-md">
          This cannot be changed later please fill carefully
        </p>
        <div className="flex flex-col space-y-4 mx-auto">
          <Datepicker
            class="rounded-lg bg-white border-2 border-brand.green p-3"
            theme="web"
            onChange={e => setDate(e.value)}
            controls={[
              "date"
            ]}
            display="inline"
            touchUi
            colors
          />
        </div>
      </div>
    </CommonScreen>
  );
}
