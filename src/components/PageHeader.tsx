import NavBar from "./NavBar";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function PageHeader() {
  return (
    <>
      <div className="ml-8">
        <SingleComponentWrapper name="Nav">
          <NavBar />
        </SingleComponentWrapper>
      </div>
    </>
  );
}
