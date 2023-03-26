import { FFButton } from "@/components/Index";
import dynamic from "next/dynamic";

const MyAwesomeMap = dynamic(
  () => import("../components/DisplayComponents/FFMapGPX").then((mod) => mod.default), {ssr: false})

export default function Home() {
  return (
    <div className="bg-black">
      <FFButton text="Button" onClick={() => {}} />
    </div>
  );
}
