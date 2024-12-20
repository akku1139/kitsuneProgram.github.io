import Image from "next/image"
import image from "../images/header.png"
import Link from "next/link"

import style from "../styles/header.module.css"

export default function Header() {
    return(
        <>
            <header className={style.header}>
                <Image src={image.src} width={1100} height={210} className={style.header_img} alt=""/>
                <div className={style.flexbox}>
                    <Link href="/"><div className={style.header_button}>ホーム</div></Link>
                    <Link href="/blogs"><div className={style.header_button}>記事一覧</div></Link>
                    <Link href="/welcome"><div className={style.header_button}>はじめての方へ</div></Link>
                    <Link href="/links"><div className={style.header_button}>リンク</div></Link>
                </div>
            </header>
        </>
    )
}