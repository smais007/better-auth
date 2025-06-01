import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignOutButton } from "@/components/auth-form/sign-out-button";
const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="px-8 py-16 container mx-auto max-w-screen space-y-8">
        <h1>Profile</h1>
        <p>Not logged in</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-lg space-y-8">
      <div className="space-y-4">
        <Button size="icon" asChild>
          <Link href="/"></Link>
        </Button>
        <h1 className="text-3xl font-bold">Profile</h1>

        <SignOutButton />

        <pre className="text-sm overflow-clip">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ProfilePage;
