import styles from "@/app/styles/home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.body}>
      <div className={styles.background}>
        <div className={styles.presentacion}>
          <h1>Cristian antony</h1>
          <p>design - photography - web development</p>
          <Link href="/public/perfil">ENTER</Link>
        </div>
        <div className={styles.social}>
          <Link
            href="https://www.linkedin.com/in/cristian-antony-crespin-diaz-9b75a2143/"
            target="_blank"
          >
            <Image
              src="/linkedin-in-brands-solid.svg"
              width={20}
              height={100}
              alt="Logo linkedin"
            />
          </Link>
          <Image
            src="/behance-brands-solid.svg"
            width={25}
            height={100}
            alt="Logo behance"
          />
          <Image
            src="/github-brands-solid.svg"
            width={20}
            height={100}
            alt="Logo github"
          />
          <Image
            src="/instagram-brands-solid.svg"
            width={20}
            height={100}
            alt="Logo instagram"
          />
          <Image
            src="/youtube-brands-solid.svg"
            width={20}
            height={100}
            alt="Logo youtube"
          />
          <Image
            src="/facebook-f-brands-solid.svg"
            width={11}
            height={100}
            alt="Logo facebook"
          />
        </div>
      </div>
    </div>
  );
}
