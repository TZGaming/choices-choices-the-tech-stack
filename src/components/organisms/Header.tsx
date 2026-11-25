import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/atoms/NavLink";
import Score from "@/components/molecules/Score";

export default function Header() {
  return (
    <header className="siteHeader">
      <Logo />
      <div className="headerActions">
        <NavLink />
        <Score />
      </div>
    </header>
  );
}