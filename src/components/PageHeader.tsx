import NavBar from "./NavBar";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function PageHeader() {
  return (
    <>
      <div className="ml-6">
        <SingleComponentWrapper name="Nav">
          <NavBar />
        </SingleComponentWrapper>
      </div>
    </>
  );
}
