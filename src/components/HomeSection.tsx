import { useTheme } from "./contexts/theme-provider";

export default function HomeSection() {
  const { theme } = useTheme();
  return (
    <div className="flex gap-8 center">
      <div className="border-2 flex flex-col justify-around">
        <div className="">Hello, I am Rakshit Mehta</div>
        <div className="flex flex-col gap-4">
          <p>
            I'm thrilled to have you here. My name is Rakshit mehta, and I'm a
            student at Graphic Era University. This portfolio showcases my
            skills and projects in Web Development.
          </p>
          <p>
            If you have any questions or would like to discuss a potential
            collaboration, please don't hesitate to get in touch. I'm excited to
            connect with you and explore how we can work together to bring your
            ideas to life. Thank
          </p>
          <p>
            you for visiting, and I hope you enjoy your time exploring my
            portfolio!
          </p>
        </div>
      </div>
      <div className="w-[30%] border-2">
        
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M13.3252 3.05011L8.66765 20.4323L10.5995 20.9499L15.257 3.56775L13.3252 3.05011Z"
              fill={theme == 'dark' ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M7.61222 18.3608L8.97161 16.9124L8.9711 16.8933L3.87681 12.1121L8.66724 7.00798L7.20892 5.63928L1.0498 12.2017L7.61222 18.3608Z"
              fill={theme == 'dark' ? "#ffffff" : "#000000"}
            ></path>{" "}
            <path
              d="M16.3883 18.3608L15.0289 16.9124L15.0294 16.8933L20.1237 12.1121L15.3333 7.00798L16.7916 5.63928L22.9507 12.2017L16.3883 18.3608Z"
              fill={theme == 'dark' ? "#ffffff" : "#000000"}
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
