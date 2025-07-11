import Link from "next/link"
import { Button } from "./ui/button"

import Nav from "./Nav"
import MobileNav from "./MobileNav"
const Header = () => {
    return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Shirish<span className="text-cyan-400">.</span>
                </h1>
            </Link>
            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="mailto:itsseeres@gmail.com">
            <Button>Hire me</Button>
            </Link>
            </div>
            {/*  mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
            </div>
    </header>
    )
}

export default Header