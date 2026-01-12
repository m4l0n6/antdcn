import { BaseLayout } from "@/components/base-layout";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
    <BaseLayout>{children}</BaseLayout>
   );
}
