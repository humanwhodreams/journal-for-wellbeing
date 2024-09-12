import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>Design Layout Header</header>
      <main className="mt-24">{children}</main>
    </>
  );
}
