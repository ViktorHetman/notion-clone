import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div
        className="md:ml-auto w-full flex justify-between md:justify-end gap-x-2 
      text-muted-foreground"
      >
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
