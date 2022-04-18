import { useEffect } from "react";
import { Outlet } from "@remix-run/react";

export default function Blog() {
  useEffect(() => {
    console.log("hello from blog");
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix Blog</h1>

      <Outlet />
    </div>
  );
}
