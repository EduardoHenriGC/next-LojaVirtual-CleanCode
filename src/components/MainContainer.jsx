import Navbar from "./Navbar/Navbar";

export default function Contact({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>

      <h3>footer</h3>
    </>
  );
}
