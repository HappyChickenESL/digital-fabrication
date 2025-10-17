import { Link } from "@tanstack/react-router";
import { Drill } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border-r-2 text-center h-full sticky p-4">
      <div className="flex flex-row justify-center space-x-3 mb-4">
        <Link to="/" className="text-2xl">
          Digitale Fertigung
        </Link>{" "}
        <Drill size={34}></Drill>{" "}
      </div>
      <div>
        <Link to="/about">About me</Link>
      </div>
      <div>
        <Link to="/final">Final Project Idea</Link>
      </div>
    </div>
  );
}
