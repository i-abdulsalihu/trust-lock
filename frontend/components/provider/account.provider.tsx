"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { pinataConfig } from "@/config/pinata.config";

export default function AccountProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [form, setForm] = useState({
    role: "freelancer",
    fName: "Abdullahi",
    lName: "Salihu",
    email: "abdullahisalihuinusa@gmail.com",
    occupation: "Web3 Developer",
    portfolio: "https://abdulsalihu.vercel.app",
    bio: "This is who I am bro",
    address: "0xa74944a5200e6173df5beb39b176a0da67b65635",
  });
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { role, address, fName, lName, email, occupation, portfolio, bio } =
      form;

    const data = {
      fName: fName || null,
      lName: lName || null,
      email,
      occupation: occupation || null,
      portfolio: portfolio || null,
      bio: bio || null,
    };

    setUploading(true);
    try {
      const response = await fetch("/api/credential", {
        method: "POST",
        body: JSON.stringify({ role, address, data }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Metadata URI:", result.metadataURI);
        const cred = await fetch(result.metadataURI, {
          method: "GET",
        });

        const dt = await cred.json();

        console.log(dt);
      } else {
        console.error("Upload failed:", result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Submit Your Credentials</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role"
          required
        />
        <Input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <Input
          type="text"
          name="fName"
          value={form.fName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <Input
          type="text"
          name="lName"
          value={form.lName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <Input
          type="text"
          name="occupation"
          value={form.occupation}
          onChange={handleChange}
          placeholder="Occupation"
        />
        <Input
          type="url"
          name="portfolio"
          value={form.portfolio}
          onChange={handleChange}
          placeholder="Portfolio URL"
        />
        <Input
          type="text"
          name="bio"
          value={form.bio}
          onChange={handleChange}
          placeholder="Bio"
        />
        <button type="submit">{uploading ? "Uploading..." : "Submit"}</button>
      </form>
    </div>
  );
}
