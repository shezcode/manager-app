import Greetings from "@/components/Greetings";
import GreetingSkeleton from "@/components/GreetingSkeleton";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers"
import Link from "next/link";
import { Suspense } from "react";

const Home = () => {
  return (
    <div className="h-full overflow-y-auto pr-6 w-full">
      <div className="h-full items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingSkeleton />}>
            <Greetings />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3">
          {/** projects map here*/}
          <div className="w-1/3 p-3">{/* create new project here*/}</div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">{/* tasks here */}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
