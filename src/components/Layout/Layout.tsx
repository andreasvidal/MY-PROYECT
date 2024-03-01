import React from "react";

interface LayoutProps {
  children: any;
}

export default function Layout(props: LayoutProps) {
  return <div className="containerLayout">{props.children}</div>;
}
