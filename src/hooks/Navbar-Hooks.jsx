import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import UserSection from "../components/Navbar/UserSection";
import NavbarMenu from "@/components/Navbar/NavbarMenu";
import styles from "../styles/Navbar/NavbarHooks.module.css";

import BtnNavbar from "@/components/Navbar/btnNavbar";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function NavbarHooks() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleList = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 940) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navbar}>
      <BtnNavbar isOpen={isOpen} toggleMenu={toggleMenu} />

      <NavbarMenu toggleList={toggleList} isOpen={isOpen} />

      <SearchBar />

      <UserSection session={session} signIn={signIn} signOut={signOut} />
    </div>
  );
}
