import NavBar from "./NavBar";
import SingleComponentWrapper from "./SingleComponentWrapper";

type Prop = {
  aboutMeSectionRef: React.MutableRefObject<HTMLDivElement | null>
  projectsSectionRef: React.MutableRefObject<HTMLDivElement | null>
  contactSectionRef: React.MutableRefObject<HTMLDivElement | null>
}

export default function PageHeader(prop: Prop) {
  return (
    <>
      <div className="ml-4 lg:ml-6">
        <SingleComponentWrapper name="Nav" className="text-2xl hidden sm:block">
          <NavBar {...prop} />
        </SingleComponentWrapper>
      </div>
    </>
  );
}
