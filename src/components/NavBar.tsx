export default function NavBar() {
  return (
    <nav>
        <div className="grid grid-cols-4 place-content-center place-items-center border-b-2 border-black h-20 text-2xl select-none">
            <div className="hover:font-semibold">Home</div>
            <div className="hover:font-semibold">About Me</div>
            <div className="hover:font-semibold">Projects</div>
            <div className="hover:font-semibold">Get In Touch</div>
        </div> 
    </nav>
  )
}
