import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header>Layout Header</header>
      <main>{children}</main>
    </>
  );
}
