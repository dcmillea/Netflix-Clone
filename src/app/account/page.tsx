import Head from "next/head";
import Link from "next/link";
import React from "react";
import AccountHeader from "../components/AccountInfo";
import AccountSignOut from "../components/AccountSignOut";
import Membership from "../components/Membership";

function AccountPage() {
  return (
    <div>
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.io" />
      </Head>

      <header className="bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
            alt="iconN"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="icon"
            className="cursor-pointer rounded"
          />
        </Link>
      </header>

      <main className="pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10">
        <div className="flex flex-col md:flex-row md:items-center gap-x-4">
          <h1 className="text-3xl md:4xl">Account</h1>
          <AccountHeader />
        </div>

        <Membership />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4>Plan Details</h4>
          <div className="col-span-2 font-medium">Premium</div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
            Change Plan
          </p>
        </div>

        <AccountSignOut />
      </main>
    </div>
  );
}

export default AccountPage;
