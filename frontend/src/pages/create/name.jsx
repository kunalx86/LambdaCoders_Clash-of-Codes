import { useAuth } from "@/providers/AuthProvider";
import CommonScreen from "@/components/CommonScreen";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { URL } from "../../../axios";

export default function OtpConfirmPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const router = useRouter();
  const data = useAuth()?.user;



  return (
    <CommonScreen
      percent={"30"}
      onClick={async () => {
        localStorage.setItem("firstname", firstname)
        localStorage.setItem("lastname", lastname)
        axios.post(URL + "/editProfile", { firstName: firstname, lastName: lastname, mobileNo: parseInt(data.phoneNumber) }).then((res) => {
          console.log(res);
          router.push("/create/dob");
        }).catch((err) => {
          console.log(err)
        })


      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What is your name?</h1>
        <p className="p-2 mt-4 text-md">
          Last name is optional and is only shared with matches
        </p>
        <div className="flex flex-col space-y-4 mx-auto">
          <input
            type="text"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            placeholder="First Name"
            className="border-solid bg-slate-100 border-b-4 border-brand.green hover:border-brand.green.dark h-[52px] w-[250px] text-2xl"
            required
          />
          <input
            type="text"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            placeholder="Last Name"
            className="border-solid bg-slate-100 border-b-4 border-brand.green hover:border-brand.green.dark h-[52px] w-[250px] text-2xl"
          />
        </div>
      </div>
    </CommonScreen>
  );
}
