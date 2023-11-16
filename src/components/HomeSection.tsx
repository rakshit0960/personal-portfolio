export default function HomeSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-36 lg:pb-20 px-4 pb-6">
      <div className="order-last lg:order-first">
        <div className="text-3xl lg:text-5xl">Full Stack Developer</div>
        <div className="text-base lg:text-xl pt-2 pl-10">
          Hi, i am Rakshit Mehta, A Computer science student, and <br />  developer based in India
        </div>
      </div>
      <div className="aspect-square w-72 rounded-full border-2 border-gray-600 dark:border-white">
        <img src="" alt="" />
      </div>
    </div>
  );
}
