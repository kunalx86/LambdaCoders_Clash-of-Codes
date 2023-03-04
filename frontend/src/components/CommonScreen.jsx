import Head from "next/head";
import { BiChevronRight } from "react-icons/bi";

export default function CommonScreen({
  percent,
  nextRoute,
  skip = false,
  onClick = () => {},
  children,
}) {
  return (
    <>
    <Head>
      <title>Profile Creation</title>
    </Head>
    <div className="p-8 mt-4">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-brand.green h-2.5 rounded-full"
          style={{
            width: `${percent}%`,
          }}
        ></div>
      </div>
      <div className="min-h-[85vh]">{children}</div>
      <div className="flex flex-row-reverse">
        <button onClick={onClick} className="rounded-full p-4 bg-brand.green">
          <BiChevronRight className="text-white" />
        </button>
      </div>
    </div>
    </>
  );
}
