import styles from "../../styles/Navbar/UserSection.module.css";
export default function UserSection({ session, signIn, signOut }) {
  return (
    <div className={styles.usuario}>
      <div className={styles.log}>
        {session ? (
          <button className={styles.out} onClick={signOut}>
            Sair
          </button>
        ) : (
          <button className={styles.in} onClick={signIn}>
            Entrar
          </button>
        )}
      </div>
      {session && (
        <>
          <p className={styles.name}>{session.user.name}</p>
          <img
            src={session.user.image}
            width="50px"
            height="50px"
            alt={session.user.name}
          />
        </>
      )}
    </div>
  );
}
