import { useRouter } from "next/router";

const brandGreen = "#2AAC7A";

const HeartIcon = ({ selected = false, props }) => (
  <svg
    width={22}
    height={20}
    fill={selected ? brandGreen : "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M1.922 10.446C.849 7.096 2.104 2.931 5.62 1.8c1.85-.597 4.133-.099 5.43 1.69 1.223-1.855 3.572-2.283 5.42-1.69 3.516 1.132 4.778 5.297 3.706 8.647-1.67 5.31-7.497 8.076-9.126 8.076-1.628 0-7.403-2.704-9.13-8.076Z"
      stroke={selected ? brandGreen : "black"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
    <path
      d="M14.789 5.564c1.207.124 1.962 1.081 1.917 2.422"
      stroke="#130F26"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  </svg>
);

const HomeIcon = ({ selected = false, props }) => (
  <svg
    width={22}
    height={22}
    fill={selected ? brandGreen : "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M1.4 12.713c0-5.631.614-5.238 3.919-8.303C6.765 3.246 9.015 1 10.958 1c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C20.572 21 18.612 21 10.986 21 3.359 21 1.4 21 1.4 12.713Z"
      // stroke={selected ? brandGreen : "black"}
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.079 15.135h5.815"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProfileIcon = ({ selected = false, props }) => (
  <svg
    width={16}
    height={22}
    fill={selected ? brandGreen : "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M7.845 20.662C4.153 20.662 1 20.087 1 17.787c0-2.301 3.133-4.425 6.845-4.425 3.691 0 6.844 2.103 6.844 4.404 0 2.3-3.133 2.896-6.844 2.896ZM7.837 10.174a4.386 4.386 0 1 0 0-8.774A4.388 4.388 0 0 0 3.45 5.787a4.371 4.371 0 0 0 4.356 4.387h.031Z"
      stroke={selected ? brandGreen : "black"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatIcon = ({ selected = false, props }) => (
  <svg
    width={22}
    height={22}
    fill={selected ? brandGreen : "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M18.071 18.07c-3.055 3.056-7.581 3.717-11.285 2.004-.546-.22-4.085.76-4.853-.007-.767-.768.213-4.307-.007-4.854C.213 11.511.874 6.983 3.93 3.927c3.901-3.903 10.24-3.903 14.141 0 3.91 3.909 3.901 10.241 0 14.143Z"
      stroke={selected ? brandGreen : "black"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  const router = useRouter();
  const path = router.asPath; 
  return (
    <div className="flex mx-auto flex-col mt-2 p-0 w-[375px] h-[82px] ">
      <div className="space-x-16 flex flex-row items-center justify-center rounded-lg shadow-2xl w-full h-full bg-white">
        <div>
          <HomeIcon selected={path === "/"} />
        </div>
        <div>
          <HeartIcon />
        </div>
        <div>
          <ChatIcon />
        </div>
        <div>
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}
