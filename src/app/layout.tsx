import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aparna Public School | Rugri | Chowka",
  description: "APARNA PUBLIC SCHOOL Established in the year 2023, with a mission to provide the best education to the pupils of colliery belt.The School provides education from UKG to Class VI and is affiliated to the Central Board of Secondary Education (CBSE).Set in an exuberant and lush green environment.At Aparna Public School, we offer students contemporary and progressive schooling with utmost priority to high quality education. The school is equipped with state –of- the- art facilities and aims to develop students as ambassadors of positive change who will help to build a better tomorrow. With a balanced blend of curricular, co- curricular activities and community service the teaching learning process is enriched.We want every child to be proficient in academics, technology which is developing rapidly,sociocultural aspects, physically fit and be a class apart. In APARNA PUBLIC SCHOOL we provide an atmosphere which inculcates all sorts of facilities for children to achieve overall  development and doesn&apos;t curb to be better than yesterday.All this is made possible under the guidance of effective leadership, efficient & experienced teachers, unparalleled & unbiased counselling and courteous support staff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
