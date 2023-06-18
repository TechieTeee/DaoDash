import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "react-daisyui";
import { PrimaryLayout } from "../layouts/PrimaryLayout";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="text-center max-w-[700px]">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            DaoDash
          </h1>
          <p className="my-4 text-xl">
            The Ultimate Dashboard Solution for Everything Daos
          </p>
          <p className="my-4 text-xl"></p>
        </div>
        <Link href="/dashboard">
          <Button color="primary">Launch DaoDash</Button>
        </Link>
      </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <PrimaryLayout
          title="DaoDash"
          description="The Ultimate Dashboard Solution for Everything Daos"
      >
        {page}
      </PrimaryLayout>
  );
};

export default Page;
