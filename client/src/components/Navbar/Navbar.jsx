import { Navbar } from "flowbite-react";
import "./Navbar.css";
import NavItem from "../NavItem/NavItem";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function _Navbar() {


  return (
    <nav className="shadow-md sticky top-0 z-50 w-full">
      <Navbar fluid className="bg-gray-950 text-zinc-50 w-full">
        <Navbar.Brand href="/" className="py-3">
          <img
            src="/ecommerce.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white-50">
            متجر للأجهزة التعليمية
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <ul className="flex flex-col gap-3 md:flex-row md:items-center max-sm:divide-y divide-zinc-100 py-3">
            <NavItem to="/" label="الصفحة الرئيسية" icon={HiArrowSmRight} />
            <NavItem to="/services" label="خدماتنا" />
            <NavItem to="/about" label="ماذا عنا" />
            <NavItem to="/pricing" label="اسعارنا" />
            <NavItem to="/contact" label="تواصل معنا" />
            <NavItem to="/sections" label="فلتر الاقسام" />
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
