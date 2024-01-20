import { poppins } from "./font";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="bg-green_primary">{children}</div>
      </body>
    </html>
  );
}
