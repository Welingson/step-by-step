import { Circle, CircleCheck, CircleDot } from "lucide-react";
import { CustomerAddress } from "./customer-address";

export function App() {
  return (
    <>
      <section className="flex items-center justify-center h-screen p-4">
        <div className="w-full sm:w-4/12 space-y-4">
          <div className="flex justify-center relative">
            <ul className="inline-flex gap-6 w-auto ">
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <CircleCheck color="white" />
              </li>
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <CircleDot color="white" />
              </li>
              <li className="size-8 flex items-center justify-center rounded-full bg-cyan-700">
                <Circle color="white" />
              </li>
            </ul>
            <div className="border-2 border-cyan-700 w-24 absolute top-[14px] -z-10"></div>
          </div>
          <div className="rounded-lg h-auto border border-slate-400 p-3">
            <CustomerAddress />
          </div>
        </div>
      </section>
    </>
  );
}
