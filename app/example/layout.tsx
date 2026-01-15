import { BaseLayout } from "@/components/base-layout";

export default function ExampleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
    <BaseLayout>{children}</BaseLayout>
   );
}
