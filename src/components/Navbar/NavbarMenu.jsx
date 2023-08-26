import Link from "next/link";
import styles from "../../styles/Navbar/NavbarMenu.module.css";

export default function NavbarMenu({ toggleList, isOpen }) {
  return (
    <ul className={isOpen ? styles.menuListOpen : styles.menuListClosed}>
      <li>
        <Link onClick={toggleList} href="/produtos">
          Produtos
        </Link>
      </li>
      <li>
        <Link onClick={toggleList} href="/about">
          Sobre
        </Link>
      </li>
      <li>
        <Link onClick={toggleList} href="/pedidos">
          Pedidos
        </Link>
        
      </li>
      <li><Link onClick={toggleList} href="/favorites">Favoritos</Link></li>
      <li><Link onClick={toggleList} href="/cart">Carrinho</Link></li>
    </ul>
  );
}
