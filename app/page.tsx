import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] max-w-lg px-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Andrew Fulton</h1>
          <p className="text-muted-foreground">
            👋 I&apos;m a husband, dad, & Software Engineer, passionate about
            making things easy. I work at{" "}
            <Button variant="link" className="text-base p-0 h-auto" asChild>
              <Link href="https://www.pella.com">Pella</Link>
            </Button>
            , where I lead a team of engineers building{" "}
            <Button variant="link" className="text-base p-0 h-auto" asChild>
              <Link href="https://apps.apple.com/us/app/pellapro/id1632482375">
                PellaPro
              </Link>
            </Button>{" "}
            who make Pella the easiest window & door company for businesses to
            partner with.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">Articles</h2>
          <p className="text-muted-foreground">Stay tuned 📻</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">Past Experience</h2>
          <ul className="space-y-2">
            <li>
              <p className="text-muted-foreground">
                <Button variant="link" className="text-base p-0 h-auto" asChild>
                  <Link href="https://www.pella.com">Pella</Link>
                </Button>
                , Avanti. Our team built the foundation for the mobile & web
                based Avanti Intelligence Platform, to track and optimize{" "}
                <Button variant="link" className="text-base p-0 h-auto" asChild>
                  <Link href="https://www.avantiwindow.com/">
                    Avanti&apos;s
                  </Link>
                </Button>{" "}
                window & door installation operations.{" "}
              </p>
            </li>
            <li>
              <p className="text-muted-foreground">
                <Button variant="link" className="text-base p-0 h-auto" asChild>
                  <Link href="https://www.amazon.com/">Amazon.com</Link>
                </Button>
                , Shipping Engine. I developed a strong foundation in creating
                highly scalable, resilient, and durable products. Our team
                focused on providing real-time delivery choices for customers
                across Amazon.com and its subsidiaries.
              </p>
            </li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/andrewisaacfulton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/social/LinkedIn.svg"
            alt="LinkedIn"
            width={16}
            height={16}
            className="invert-0 dark:invert"
          />
          LinkedIn/andrewisaacfulton
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/afulton11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/social/github-mark.svg"
            className="invert-0 dark:invert"
            alt="Github"
            width={16}
            height={16}
          />
          Github/Afulton11
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://carewithpasture.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="rounded-sm"
            src="/pasture/logo-sm.jpg"
            alt="Pasture"
            width={16}
            height={18}
          />
          CareWithPasture.com
        </a>
      </footer>
    </div>
  );
}
