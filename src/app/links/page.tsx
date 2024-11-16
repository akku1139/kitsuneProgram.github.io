import Image from "next/image";
import logo from "../images/x.png"
import Link from "next/link";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "リンク | KitsuneProgrammer"
}

export default function Links() {
    return (
      <>
        <h1>開発者の狐。のリンク</h1>

        <Link href="https://x.com/kitsune_program" className="flex">
          <Image src={logo.src} width={30} height={30} className="shortcut" alt=""/>
          <h2>KitsuneProgrammer / 開発者の狐。</h2>
        </Link>

        <hr/>

        <h1>相互リンク</h1>

        <p>相互リンクについて用がある方はXのDMで連絡してください。<br/>
        僕から相互リンクを頼むこともあります。</p>

        <Link href={"https://nakasyou.github.io"}><h2>nakasyou's website</h2></Link>
      </>
    );
  }