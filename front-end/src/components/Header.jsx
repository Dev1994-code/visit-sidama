import { useState } from "react";
import { Anchor, Drawer, Button } from "antd";
import Btn from "./Btn";

const { Link } = Anchor;

const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="http://google.com">TRVL</a>
        </div>
        <div className="mobileHidden">
          <Anchor>
            <Link href="#hero" title="Home" className="text-lg" />
            <Link href="#about" title="About" className="text-lg" />
            <Link href="#feature" title="Features" className="text-lg" />
            <Link href="#works" title="How it works" className="text-lg" />
            <Link href="#faq" title="FAQ" className="text-lg" />
            <Link href="#pricing" title="Pricing" className="text-lg" />
            <Link href="#contact" title="Contact" className="text-lg" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer} className=" bg-lime-400">
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer title="TRVL" onClose={onClose} open={open}>
            <Anchor>
              <Link href="#hero" title="Home" className="text-lg" />
              <Link href="#about" title="About" className="text-lg" />
              <Link href="#feature" title="Features" className="text-lg" />
              <Link href="#works" title="How it works" className="text-lg" />
              <Link href="#faq" title="FAQ" className="text-lg" />
              <Link href="#pricing" title="Pricing" className="text-lg" />
              <Link href="#contact" title="Contact" className="text-lg" />
            </Anchor>
            <div className="flex flex-col my-7 gap-6">
              <Button
                type="primary"
                className=" bg-lime-400 ml-4 hover:bg-white"
              >
                Login
              </Button>
              <Button
                type="primary"
                className="ml-4 bg-lime-400 hover:bg-white"
              >
                Sign up
              </Button>
            </div>
          </Drawer>
        </div>
        <div className="-mr-3.5 mobileHidden">
          <Anchor>
            <Btn />
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
