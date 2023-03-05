import CommonScreen from "@/components/CommonScreen";
import { useState } from "react";
import { useRouter } from "next/router";

const genders = ["Man", "Woman", "Prefer Not to Say"];

const interests = [
  "Camping 🏕️",
  "Books 📕",
  "Tea ☕",
  "Coffee 🍵",
  "EDM 🎛️",
  "Pizza 🍕",
  "Romantic 💖",
  "Crime 🔪",
  "Cricket 🏏",
  "Drama 🎭",
  "Running 🏃",
  "Comedy 😹",
];

export default function OtpConfirmPage() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState([])
  return (
    <CommonScreen
      percent={"40"}
      onClick={async () => {
        router.push("/");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">Your interests</h1>
        <p className="p-2 mt-4 text-md">
          Select a few of your interests and let everyone know what you’re
          passionate about.
        </p>
        <div className="grid grid-cols-2 gap-2 mx-[10%] mt-4">
          {interests.map((interest) => (
            <div
              onClick={e => {
                selectedInterests.includes(interest) ?
                  setSelectedInterests(s => s.filter(intrst => intrst !== interest)) :
                  setSelectedInterests(s => [...s, interest])
              }}
              key={interest}
              className={`flex flex-row border-2 border-slate-200 p-4 hover:bg-brand.green.dark hover:text-white hover:rounded-xl rounded-2xl justify-between items-center
                ${selectedInterests.includes(interest) ? "bg-brand.green.dark text-white hover:bg-white hover:text-black" : ""}
              `}
            >
              <h3 className="text-lg">{interest}</h3>
            </div>
          ))}
        </div>
      </div>
    </CommonScreen>
  );
}
