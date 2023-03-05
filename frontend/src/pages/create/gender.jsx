import { useAuth } from "@/providers/AuthProvider";
import CommonScreen from "@/components/CommonScreen";
import { useState } from "react";
import { useRouter } from "next/router";
import { BiChevronRight } from "react-icons/bi";
import axios from "axios";
import { URL } from "../../../axios";

const genders = ["Male", "Female", "Prefer Not to Say"];

export default function OtpConfirmPage() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("");
  const data = useAuth()?.user;


  return (
    <CommonScreen
      percent={"40"}
      onClick={async () => {
        localStorage.setItem("gender", selectedGender)
        axios.post(URL + "/editProfile", { gender: selectedGender.toLowerCase(), mobileNo: parseInt(data.phoneNumber) }).then((res) => {
          console.log(res);
          router.push("/create/sexuality");
        }).catch((err) => {
          console.log(err)
        })
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What's your gender?</h1>
        <div className="flex flex-col space-y-4 mx-[10%] mt-4">
          {genders.map((gender) => (
            <div
              key={gender}
              className={`flex flex-row border-2 border-slate-200 p-4 hover:bg-brand.green.dark hover:text-white hover:rounded-xl rounded-2xl justify-between items-center
              ${selectedGender === gender ? "bg-brand.green.dark text-white hover:bg-white hover:text-black" : ""}`}
              onClick={e => setSelectedGender(gender)}
            >
              <h3 className="text-lg">{gender}</h3>
              <span><BiChevronRight /></span>
            </div>
          ))}
        </div>
      </div>
    </CommonScreen>
  );
}