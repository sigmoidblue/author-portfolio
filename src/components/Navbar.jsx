import { NavLink } from "react-router-dom";

//bg-[#005B41]

export function Navbar() {
  return (
    <div className=" bg-[#005B41] p-5 flex flex-col justify-between items-center">
      <div className="font-spectral text-white text-4xl ">Abc 🌱</div>
      <div className="flex space-x-8 mt-6">
        <NavLink
          to="/"
          className="text-white text-lg hover:text-gray-300 hover:underline"
          activeClassName="font-semibold"
          exact
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className="text-white text-lg hover:text-gray-300"
          activeClassName="font-semibold"
        >
          Books
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white text-lg hover:text-gray-300"
          activeClassName="font-semibold"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}


{/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
  {/* Person's Name */}
{/* <h1 className="text-6xl font-bold mb-6">Krishna Balsara</h1> */ } 