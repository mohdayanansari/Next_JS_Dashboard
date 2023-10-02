import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <header className="text-center h-[60px] flex items-center justify-center">
        Home Page/Landing Page
      </header>
      <div className="h-[calc(100vh-60px)] flex items-center justify-center">
        <Link
          href={"/dashboard"}
          className="bg-app-accent-2 text-white/90 font-black  text-2xl lg:text-6xl animate-bounce underline underline-offset-8 p-10 rounded-3xl hover:bg-app-tertiary animationEaseInOut"
        >
          Checkout the User Dashboard
        </Link>
        <footer className="fixed bottom-0 h-[60px]">
          <Link href={"https://github.com/mohdayanansari"}>
            Created by Mohd Ayan Ansari
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default page;
