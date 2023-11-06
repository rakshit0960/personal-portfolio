import NavBar from "./NavBar";
import SingleComponentWrapper from "./SingleComponentWrapper";

export default function PageHeader() {
  return (
    <>
      <SingleComponentWrapper name="Nav">
        <NavBar />
      </SingleComponentWrapper>
    </>
  )
}
