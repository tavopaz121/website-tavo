import { BitbucketIcon } from "~/components/icons/Bitbucket";
import { JsIcon } from "~/components/icons/Js";
import { HtmlIcon } from "~/components/icons/Html";
import { CssIcon } from "~/components/icons/Css";
import { NodeIcon } from "~/components/icons/Node";
import { NextIcon } from "~/components/icons/Next";
import { KotlinIcon } from "~/components/icons/Kotlin";
import { FirebaseIcon } from "~/components/icons/Firebase";
import { JavaIcon } from "~/components/icons/Java";
import { ReactIcon } from "~/components/icons/React";
import { ScrumIcon } from "~/components/icons/Scrum";
import { RemixIcon } from "~/components/icons/Remix";
import { AgileIcon } from "~/components/icons/Agile";
import { LitIcon } from "~/components/icons/Lit";
import { JiraIcon } from "~/components/icons/Jira";
import { AngularIcon } from "~/components/icons/Angular";
import PlayWrightIcon from "~/assets/imgs/proyectos/playwright.webp";
import { GitIcon } from "~/components/icons/Git";
import { CypressIcon } from "~/components/icons/Cypress";
import { FlutterIcon } from "~/components/icons/Flutter";
import { GithubIcon } from "~/components/icons/Github";

export default function Lenguajes() {
  return (
    <section id="lenguaje" className="bg-gray-900 2xl:py-24 2xl:bg-white">
      <div className="px-4 mx-auto overflow-hidden bg-gray-900 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-20 2xl:pl-24">
          <div
            className="grid auto-rows-max gap-8 [&_svg]:w-20  [&_img]:block [&_img]:mx-auto justify-items-center items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            }}
            data-aos="fade-up"
          >
            <KotlinIcon />
            <NextIcon />

            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              role="img"
            >
              <title>MongoDB</title>
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle cx="512" cy="512" r="512" fill="#13aa52"></circle>{" "}
                <path
                  d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
                  fill="#fff"
                ></path>{" "}
              </g>
            </svg>
            <CssIcon />
            <AngularIcon />
            <JsIcon />
            <HtmlIcon />
            <FirebaseIcon />
            <NodeIcon />
            <ReactIcon />
            <JavaIcon />
            <JiraIcon />
            <BitbucketIcon />

            <CypressIcon />
            <GithubIcon />
            <GitIcon />
            <ScrumIcon />
            <AgileIcon />
            <img
              src={PlayWrightIcon}
              alt="playwright"
              width="102"
              height="102"
            />
            <FlutterIcon />
            <LitIcon />
            <RemixIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
