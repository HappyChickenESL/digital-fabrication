import { Link } from "@tanstack/react-router";
import { Drill } from "lucide-react";
import { useState } from "react";
import { router } from "../../main";

const routes: {
  url: string;
  name: string;
}[] = [
  {
    name: "About Me",
    url: "/about",
  },
  {
    name: "Final Project Idea",
    url: "/final",
  },
  {
    name: "Assignment Two",
    url: "/assignments/two",
  },
];

export default function Navbar() {
  const [url, setUrl] = useState<string | null>(null);

  router.subscribe("onResolved", () => {
    setUrl(router.latestLocation.href);
  });

  return (
    <div className="border-r-2 border-white text-center h-screen sticky top-0 p-4">
      <div className="flex flex-row justify-center mb-12">
        <Link to="/" className="flex flex-col space-x-3 justify-center">
          <div className="mx-auto mb-2">
            <Drill className="text-primary" size={34}></Drill>
          </div>
          <div className="text-primary text-2xl font-extrabold">
            Digital Fabrication
          </div>
        </Link>
      </div>
      <div className="[&>*>a]:text-lg [&>*>a]:hover:underline">
        {routes.map((item) => (
          <div>
            <Link
              className={url === item.url ? "text-primary" : ""}
              to={item.url}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
