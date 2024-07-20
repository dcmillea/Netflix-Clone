import { format } from "date-fns";

function AccountHeader() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM do yyyy");

  return (
    <div className="-ml-0.5 flex items-center gap-x-1.5">
      <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
      <p className="text-xs font-semibold text-[#555]">
        Member since {formattedDate}
      </p>
    </div>
  );
}

export default AccountHeader;
