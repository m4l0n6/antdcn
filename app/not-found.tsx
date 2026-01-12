"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, Home01Icon } from "@hugeicons/core-free-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex justify-center items-center bg-background p-4 min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Image
            key={resolvedTheme}
            src={
              resolvedTheme === "dark"
                ? "/not-found-dark.png"
                : "/not-found-light.png"
            }
            width={500}
            height={500}
            alt="not found"
          />
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
          <CardDescription>
            The page you are looking for does not exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex sm:flex-row flex-col gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => router.back()}
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                strokeWidth={2}
                className="mr-2 w-4 h-4"
              />
              Go Back
            </Button>
            <Button asChild className="flex-1">
              <Link href="/dashboard">
                <HugeiconsIcon
                  icon={Home01Icon}
                  strokeWidth={2}
                  className="mr-2 w-4 h-4"
                />
                Go to Dashboard
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
