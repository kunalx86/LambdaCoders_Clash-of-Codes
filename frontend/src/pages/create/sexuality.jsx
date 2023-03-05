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
  "Androsexual",
];

export default function OtpConfirmPage() {
  const router = useRouter();
  const [selectedSexuality, setSelectedSexuality] = useState([]);
  return (
    <CommonScreen
      percent={"40"}
      onClick={async () => {
        localStorage.setItem("sexuality", JSON.stringify(selectedSexuality));
        router.push("/create/interests");
      }}
    >
      <div className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">What's your sexuality?</h1>
        <div className="flex flex-col space-y-4 mx-[10%] mt-4">
          {sexualities.map((sexuality) => (
            <div
              onClick={(e) =>
                selectedSexuality.includes(sexuality)
                  ? setSelectedSexuality((s) =>
                      s.filter((sx) => sx !== sexuality)
                    )
                  : setSelectedSexuality((s) => [...s, sexuality])
              }
              key={sexuality}
              className={`flex flex-row border-2 border-slate-200 p-4 hover:bg-brand.green.dark hover:text-white hover:rounded-xl rounded-2xl justify-between items-center
                ${selectedSexuality.includes(interest) ? "bg-brand.green.dark text-white hover:bg-white hover:text-black" : ""}
              `}
            >
              <h3 className="text-lg">{sexuality}</h3>
            </div>
          ))}
        </div>
      </div>
    </CommonScreen>
  );
}
