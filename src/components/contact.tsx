import { Button } from "./button";

interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

export const Contact = () => {
  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="img/maddy.png"
            alt="Contact bg 1"
            clipClass="contact-clip-path-1 md:scale-125"
          />

          {/* <ImageClipBox
            src="https://cdn.discordapp.com/attachments/1387534624888066159/1451818796322127924/Gemini_Generated_Image_tcmgcjtcmgcjtcmg.png?ex=69478f1e&is=69463d9e&hm=61ab89d44fa227a30821b7241b804a6bf53c8d4c7ee7232059513624acd5423d&"
            alt="Contact bg 2"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          /> */}
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            alt="Swordman partial"
            clipClass="absolute md:scale-125"
          /> */}

          <ImageClipBox
            src="/img/stream.png"
            alt="Swordman"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">
            JOIN OUR OFFICIAL STREAMER PROGRAM
          </p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let&apos;s <b>c</b>reate the
            <br /> next era of <br /> st<b>r</b>eaming <br />t<b>o</b>gether
          </p>

          <Button
            containerClass="mt-10 cursor-pointer"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdOv4UAfBzibLKpzCFDYxbido3apHzLW0_4wayqMgA2x0186w/viewform",
                "_blank"
              )
            }
          >
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};
