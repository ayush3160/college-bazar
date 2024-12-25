import { MainNav } from "@/components/main-nav";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav />
      <main>{children}</main>
    </>
  );
}