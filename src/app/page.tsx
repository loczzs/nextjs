"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/lol.module.css";
import Data from "@/components/Data";
export default function Home() {
  return (
    <div>
      <ul>
        <h1 className={`${x.blue}`}>adaddo</h1>
        <li className={`${x.red} ${x.blue}`}>
          <Link href="/Facebook">
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li>
          <a href="/Youtube">Youtube</a>
        </li>
        <li>
          <a href="/tiktok">tiktok</a>
        </li>
      </ul>
      <Data />
    </div>
  );
}
