import NavbarMobile from "./NavbarMobile";
const Menu = () => {
  return (
    <div className="absolute top-16 h-screen w-screen left-0 bg-slate-600/90 p-4 offCanvas">
      <NavbarMobile />
    </div>
  );
};

export default Menu;
