import profileImage from "../utils/profile.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

type Prop = {
  contactSectionRef: React.MutableRefObject<HTMLDivElement | null>;
};
export default function IntroductionSection({ contactSectionRef }: Prop) {
  // const { theme } = useTheme();
  return (
    <div>
      <div className="flex flex-col-reverse 2xl:flex-row gap-8 center dark:text-white">
        <div className=" flex flex-col justify-around">
          <div className="text-3xl sm:text-5xl font-extrabold">
            Hello, I am Rakshit Mehta
          </div>
          <div className="flex flex-col gap-10 sm:text-lg my-12">
            <p>
              I'm thrilled to have you here. My name is Rakshit mehta, and I'm a
              student at Graphic Era University. This portfolio showcases my
              skills and projects in Web Development.
            </p>
            <p>
              If you have any questions or would like to discuss a potential
              collaboration, please don't hesitate to get in touch. I'm excited
              to connect with you and explore how we can work together to bring
              your ideas to life.
            </p>
            <p>
              Thank you for visiting, and I hope you enjoy your time exploring
              my portfolio!
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src={profileImage}
            className="rounded-md border-black shadow-big-shadow dark:shadow-none"
          ></img>
        </div>
      </div>
      <button
        className="flex justify-center items-center gap-4 font-bold text-2xl sm:text-3xl font-mono border-b-2 my-10 hover:gap-10 border-transparent hover:border-black hover:dark:border-white transition-all"
        onClick={() => contactSectionRef.current?.scrollIntoView()}
      >
        <p className="h-full">contact me</p>
        <IoArrowForwardCircleOutline className="" size="1.6em" />
      </button>
    </div>
  );
}
