"use client";

import { useState } from "react";
import Loader from "./Loader";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { format } from "date-fns";

function Membership() {
  const { user } = useAuth();
  const [isBillingLoading, setIsBillingLoading] = useState(false);

  const currentDate = new Date();
  const dateOneMonthFromNow = new Date(currentDate);
  dateOneMonthFromNow.setMonth(dateOneMonthFromNow.getMonth() + 1);
  const formattedDate = format(dateOneMonthFromNow, "MMMM do yyyy");

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-4">
        <h4 className="text-lg px-2 text-[gray]">Membership & Billing</h4>
        <Link href="/login">
          <button
            disabled={isBillingLoading}
            className="h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5"
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-[#e50914]" />
            ) : (
              "Cancel Membership"
            )}
          </button>
        </Link>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
          <div>
            <p className="font-medium">{user?.email}</p>
            <p className="text-[gray]">Password: **********</p>
          </div>
          <div className="md:text-right ">
            <p className="membershipLink">Change email</p>
            <p className="membershipLink">Change password</p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0">
          <div>
            <p>Your next billing date is {formattedDate}</p>
          </div>
          <div className="md:text-right">
            <p className="membershipLink">Manage payment info</p>
            <p className="membershipLink">Add backup payment method</p>
            <p className="membershipLink">Billing Details</p>
            <p className="membershipLink">Change billing day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
