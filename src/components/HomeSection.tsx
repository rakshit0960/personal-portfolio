import profileImage from "../../public/profile.jpg";

export default function HomeSection() {
  return (
    <div className="flex">
      <div className="">
        <div className="">
          <div className="">Hello, I am Rakshit Mehta</div>
          <div className="">
            <p>
              I'm thrilled to have you here. My name is Rakshit mehta, and I'm a
              student at Graphic Era University. This portfolio showcases my
              skills and projects in Web Development.
            </p>
            <p>
              Feel free to browse through my projects and learn more about my
              skills and expertise. If you have any questions or would like to
              discuss a potential collaboration, please don't hesitate to get in
              touch. I'm excited to connect with you and explore how we can work
              together to bring your ideas to life. Thank
            </p>
            <p>
              you for visiting, and I hope you enjoy your time exploring my
              portfolio!
            </p>
          </div>
        </div>
      </div>
      <img src={profileImage} className="rounded-full aspect-square" />
    </div>
  );
}
