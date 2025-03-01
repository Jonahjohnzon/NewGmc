import "./globals.css";
import Body from "./Body";



export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-900" suppressHydrationWarning>
      <Body>{children}</Body>
    </html>
  );
}
