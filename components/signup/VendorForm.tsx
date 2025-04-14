import React from "react";
import Button from "../Button";
import Link from "next/link";

function VendorForm() {
  return (
    <div className="w-full">
      <h1 className="py-5 text-[24px]">Get started as a Shopper today!</h1>
      <div>
        <form action="" className="space-y-5">
          <div className="grid  grid-cols-2  gap-5">
            <div className="flex flex-col space-y-3">
              <label htmlFor="firstName" className="text-[14px] font-medium">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                className="p-[16px] placeholder:text-[14px] bg-[#FAFAFA] border-[2px] border-[#D3D3D3] rounded-[10px]"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="lastName" className="text-[14px] font-medium">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                className="p-[16px] placeholder:text-[14px] bg-[#FAFAFA] border-[2px] border-[#D3D3D3] rounded-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="email" className="text-[14px] font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="p-[16px] placeholder:text-[14px] bg-[#FAFAFA] border-[2px] border-[#D3D3D3] rounded-[10px]"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="password" className="text-[14px] font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="p-[16px] placeholder:text-[14px] bg-[#FAFAFA] border-[2px] border-[#D3D3D3] rounded-[10px]"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label
              htmlFor="confirmPassword"
              className="text-[14px] font-medium"
            >
              Confirm your password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              className="p-[16px] placeholder:text-[14px] bg-[#FAFAFA] border-[2px] border-[#D3D3D3] rounded-[10px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-5">
            <Button text="Sign Up" />
            <Button text="Sign Up with Google" />
          </div>

          <p className="text-center">
            By creating an account, you agree to the our{" "}
            <Link href="" className="font-black">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="" className="font-black">
              Privacy Policy
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default VendorForm;
