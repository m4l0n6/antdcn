import { BaseLayout } from "@/components/base-layout";

export default function DocumentationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    return <BaseLayout>{children}</BaseLayout>;
}
