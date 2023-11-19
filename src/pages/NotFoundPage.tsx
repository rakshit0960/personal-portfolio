import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="grid place-content-center">
      <h1 className="text-9xl text-center">404</h1>
      <h3 className="text-4xl text-center">
        Page Not Found (click{" "}
        <Link to={"/"} className="text-blue-700 underline">
          Here
        </Link>{" "}
        to go to home page){" "}
      </h3>
    </div>
  );
}
