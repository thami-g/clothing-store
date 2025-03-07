import type React from "react"
import Navbar from "../navbar/Navbar";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
          <Navbar />
          <main>{children}</main>
        </>
      );
  
}

export default Layout
