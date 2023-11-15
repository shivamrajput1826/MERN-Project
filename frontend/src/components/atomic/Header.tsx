import Form from "../form/Form";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Header = () => {
  const fields = [
    {
      type: "text",
      label: "Search...",
      name: "HeaderSearch",
      className:"bg-transparent focus:outline-none",
    },
  ];
  const onSubmit = () => {
    console.log("hello");
  };
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between max-w-6xl mx-auto p-3 items-center">
        <Link to="/">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Shivam</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
        <Form
          fields={fields}
          onSubmit={onSubmit}
          showSubmitButton={false}
          className="bg-slate-100 p-3 rounded-lg flex items-center w-24 sm:w-64"
        >
            <FaSearch className="text-slate-600"/>
        </Form>
        <ul className="flex gap-4">
            <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
            </Link>
            <Link to="/login">
            <li className="sm:inline text-slate-700 hover:underline">Sign in</li>
            </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
