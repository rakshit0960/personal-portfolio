import NavBar from "./NavBar";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function PageHeader() {
  return (
    <>
      <div className="ml-4 lg:ml-6">
        <SingleComponentWrapper name="Nav" className="text-2xl">
          <NavBar />
        </SingleComponentWrapper>
      </div>
    </>
  );
}
