"use client";

import useAuth from "../hooks/useAuth";

function AccountSignOut() {
  const { logout } = useAuth();

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <h4 className="text-lg text-[gray]">Settings</h4>
      <p
        className="col-span-3 cursor-pointer text-blue-500 hover:underline"
        onClick={logout}
      >
        Sign out of all devices
      </p>
    </div>
  );
}

export default AccountSignOut;
