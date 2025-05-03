"use client";

import React from "react";
import Input from "../ui/Input";
import { Button } from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation Schema
const shopperSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ShopperFormData = z.infer<typeof shopperSchema>;

function ShopperForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShopperFormData>({
    resolver: zodResolver(shopperSchema),
  });

  const onSubmit = (data: ShopperFormData) => {
    console.log("Shopper signup:", data);
  };

  return (
    <div className="w-full">
      <h1 className="py-5 text-[20px] md:text-[24px] font-semibold">
        Get started as a Shopper today!
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <Input {...register("firstName")} placeholder="Enter your first name" />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <Input {...register("lastName")} placeholder="Enter your last name" />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input {...register("email")} placeholder="Enter your email address" />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Password Field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input type="password" {...register("password")} placeholder="Enter your password" />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm your password
          </label>
          <Input type="password" {...register("confirmPassword")} placeholder="Confirm your password" />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <Button className="w-full bg-white border border-black text-black flex items-center gap-x-2 justify-center">
            <FcGoogle size={20} />
            Sign Up with Google
          </Button>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-sm text-muted-foreground pt-4">
          By creating an account, you agree to our{" "}
          <Link href="#" className="font-bold underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="font-bold underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default ShopperForm;
