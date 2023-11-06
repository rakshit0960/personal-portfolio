export default function NavBar() {
  return (
      <nav>
          <div className="grid grid-cols-4 place-content-center place-items-center border-2 border-black h-20 text-2xl select-none">
              <a className="hover:font-semibold" href="#">Home</a>
              <a className="hover:font-semibold" href="#aboutSection">About</a>
              <a className="hover:font-semibold" href="#ProjectsSection">Projects</a>
              <a className="hover:font-semibold" href="#ContactSection">Contact</a>
          </div> 
      </nav>
  )
}
