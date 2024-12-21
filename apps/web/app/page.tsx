"use client";
import React from "react";
import { Button } from "@repo/ui/components/ui/button";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      page
      <Button onClick={() => alert("button clicked")} variant="destructive">
        Button
      </Button>
    </div>
  );
}

export default page;
