import { useAuth } from "@/providers/AuthProvider";
import CommonScreen from "@/components/CommonScreen";
import { useState } from "react";
import { useRouter } from "next/router";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Datepicker } from "@mobiscroll/react";
import Modal from "react-modal"
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Slider, Box } from "@mui/material";


const sexualities = [
    "Prefer Not to Say",
    "Straight",
    "Gay",
    "Lesbian",
    "Bisexual",
    "Allosexual",
    "Androsexual"
]
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // border: '1px'

    },
};
export default function OtpConfirmPage() {
    const [formData, setFormData] = useState({
        firstName: "oooppp",
        lastName: "sanghvi",
        gender: "male",
        DOB: new Date(),
        bio: "Clash of hearts",
        ageRange: [18, 30],
        radius: 5,
        photos: ["https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80", "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80", "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"]

    })
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("fn")
    const router = useRouter();
    return (
        <>
            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-xl font-bold">{selected === "fn" ? "First Name" : selected === "ln" ? "Last Name" : "Upload Image"}</h2>

                <form>
                    {selected === "fn" ? (
                        <input
                            type="text"
                            value={formData.firstName}
                            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="First Name"
                            className="mt-2 border-solid bg-slate-100 border-b-4 border-brand.green hover:border-brand.green.dark h-[52px] w-[250px] text-2xl"
                            required
                        />

                    ) : selected === "ln" ? (
                        <input
                            type="text"
                            value={formData.lastName}
                            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Last Name"
                            className="mt-2 border-solid bg-slate-100 border-b-4 border-brand.green hover:border-brand.green.dark h-[52px] w-[250px] text-2xl"
                            required
                        />
                    ) : (
                        <div className="mt-2">
                            <input type="file" onChange={() => { }} />
                            <button onClick={() => { }}>
                                Upload!
                            </button>
                        </div>

                    )}
                </form>
                <button className="bg-white text-brand.green border mt-3 text-lg rounded-lg p-2" onClick={() => setOpen(false)}>close</button>
            </Modal>
            <div className="flex p-4 ">
                <h1 className="text-4xl font-bold text-left">Profile strength</h1>
            </div>
            <h1 className="text-md">35%</h1>
            <CommonScreen
                percent={"25"}
                onClick={async () => {
                    // await confirmOTP({
                    //   otp: otp.join(""),
                    // });
                    router.push("/create/dob");

                }}
            >
                <div className="flex flex-col p-4">
                    <h1 className="text-4xl font-bold text-left">Bio</h1>

                    <div className="flex flex-col">
                        <textarea
                            style={{ resize: "none" }}
                            name="textValue"
                            size={24}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            className="flex rounded-lg border-2 border-black m-7 text-xl p-2"
                            rows={4}
                            value={formData.bio}

                        />
                    </div>
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-bold text-left">Gallery</h1>
                        <button className="font-semibold text-brand.green mt-4"
                            onClick={() => {
                                setOpen(true)
                                setSelected("image")
                            }}>add</button>
                    </div>

                    <div className="columns-3 mt-5">
                        {
                            formData.photos.map((_img, i) => (
                                <>
                                    <img className="rounded-md border border-black" src={_img} />
                                    <XMarkIcon className="absolute right-0 top-21 h-5" />
                                </>
                            ))
                        }
                    </div>
                    <div className="flex mt-7">
                        <h1 className="text-4xl font-bold text-left">My Basics</h1>
                    </div>
                    <div className="bg-slate-50 mt-7 mb-3 border rounded-md drop-shadow-lg shadow-black">
                        <div className="flex items-center p-4">
                            <p className="flex-1 font-bold">{formData.firstName}</p>
                            <PencilIcon className="h-5 cursor-pointer" name="fn" onClick={() => {
                                setOpen(true)
                                setSelected("fn");
                            }} />
                        </div>
                    </div>
                    <div className="bg-slate-50 mt-7 border rounded-md drop-shadow-lg shadow-black">
                        <div className="flex items-center p-4">
                            <p className="flex-1 font-bold">{formData.lastName}</p>
                            <PencilIcon className="h-5 cursor-pointer" name="ln" onClick={() => {
                                setOpen(true)
                                setSelected("ln");
                            }} />
                        </div>
                    </div>
                    {/* gender */}
                    <div className="bg-slate-50 mt-7 border rounded-md drop-shadow-lg shadow-black">
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
                    </div>

                    {/* DOB */}
                    <div className="bg-slate-50 mt-7 border rounded-md drop-shadow-lg shadow-black">
                        <p className="flex-1 font-bold text-xl m-5 ml-3">Date of Birth</p>
                        <div className="flex flex-col space-y-4 mx-auto">
                            <Datepicker
                                class="rounded-lg bg-white border-2 border-brand.green p-3"
                                theme="web"
                                onChange={e => setFormData({ ...formData, DOB: e.value })}
                                controls={[
                                    "date"
                                ]}
                                value={formData.DOB}
                                display="inline"
                                touchUi
                                colors
                            />
                        </div>
                    </div>

                    {/* interests */}

                    {/* sexualOrientation */}


                    {/* slider for age and distance */}

                    <div className="bg-slate-50 mt-7 border rounded-md drop-shadow-lg shadow-black">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl m-5 ml-3">Distance</p>
                            <p className="font-bold text-xl m-5 ml-3">{formData.radius} KM</p>

                        </div>
                        <Box width={300} className="m-10">
                            <Slider
                                aria-label="Always visible"
                                defaultValue={formData.radius}
                                valueLabelDisplay="on"
                                onChange={(e) => {
                                    setFormData({ ...formData, radius: e.target.value })
                                }}
                            />
                        </Box>

                    </div>
                    <div className="bg-slate-50 mt-7 border rounded-md drop-shadow-lg shadow-black">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl m-5 ml-3">Age Range</p>
                            <p className="font-bold text-xl m-5 ml-3">{formData.ageRange[0]} - {formData.ageRange[1]}</p>

                        </div>
                        <Box width={300} className="m-10">
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                valueLabelDisplay="auto"
                                onChange={(e) => {
                                    setFormData({ ...formData, ageRange: e.target.value })
                                }}
                                value={formData.ageRange}
                                min={18}
                                max={100}


                            />
                        </Box>
                    </div>

                    <button className="bg-brand.green text-white mt-10 text-xl rounded-lg p-2">Update Profile</button>
                </div>
            </CommonScreen>
        </>
    );
}
