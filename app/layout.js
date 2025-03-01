import "./globals.css";
import Body from "./Body";

export const metadata = {
  title:{
    default: 'GMC Service Limited'},
    metadataBase: new URL('https://new-gmc.vercel.app/'),
    openGraph: {
      title: 'GMC Service Limited',
      description: 'We are security consultants, we make sure you get the best officers to manage your security challenges.',
      images:[{url:'https://new-gmc.vercel.app/opengraph-image.png', width:1200, height:630}]
      ,
      url:"https://new-gmc.vercel.app/",
      type:"website"
      ,
    twitter:{
      card:"summary_large_image"
    }
     
    }
,
  description: 'We are security consultants, we make sure you get the best officers to manage your security challenges.',
  creator: 'Mid9it',
  alternates:{
    canonical:"https://new-gmc.vercel.app/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-white scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-900" suppressHydrationWarning>
      <Body>{children}</Body>
    </html>
  );
}
