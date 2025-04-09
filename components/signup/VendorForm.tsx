import React from "react";

function VendorForm() {
  return (
    <div className="">
      <h1 className="py-5 text-[24px]">Get started as a Shopper today!</h1>
      <div>
        <form action="" className="space-y-5">
          <div className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-[14px]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                className="p-[10px] placeholder:text-[12px] bg-[#FAFAFA]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm your password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
            />
          </div>

          <div>
            <button>Sign Up</button>
            <button>Sign Up with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VendorForm;
