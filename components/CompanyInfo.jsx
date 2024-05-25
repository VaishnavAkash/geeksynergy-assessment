import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CompanyInfo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="text-[#752fed] hover:bg-[#752fed] hover:text-white transition-all duration-300 ease-in-out border-2 border-[#752fed] h-[46.4px] px-5">
          Company Info
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-2 items-center">
              <div>Company</div>
              <div> Geeksynergy Technologies Pvt Ltd</div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div>Address</div>
              <div>Sanjayanagar, Bengaluru-56</div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div>Phone</div>
              <div>XXXXXXXXX09</div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div>Email</div>
              <div>XXXXXX@gmail.com</div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
