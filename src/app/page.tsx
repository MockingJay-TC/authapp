"use client";

import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Form.module.css";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session }) : Guest()}
    </div>
  );
}

// Guest User
const Guest = () => {
  return (
    <main className="container mx-autp text-center py-20">
      <h3 className="text-4xl font-bold"> Guest HomePage</h3>

      <div className="flex justify-center">
        <Link
          href={"/login"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
};

// Authorize User
const User = ({ session }: any) => {
  return (
    <main className="container mx-autp text-center py-20">
      <h3 className="text-4xl font-bold"> Authorize User HomePage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500">
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
};

export async function gerServerSideProps({ req }: any) {
  const session = await getSession({
    req,
  });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
