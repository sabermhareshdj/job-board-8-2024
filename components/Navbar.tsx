import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shell, CircleUser } from 'lucide-react';
import { ModeToggle } from "./ToggleButton";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar() {
    return (
        <div className="flex items-center justify-between py-3 px-5 bg-transparent border-b-2">
            <div className="flex items-center">
                <Link href='/' className="flex items-center gap-2">
                    <Shell className="w-8 h-8" />
                    <span className="text-lg">JobBoard</span>
                </Link>
                <Link className="mx-3 py-2" href="/jobs">Jobs</Link>
                <Link className="mx-3 py-2" href="/blog">Blog</Link>
            </div>
            <div className="flex items-center">
                <Button className="mr-2">
                    <Link href='/login'>Login</Link>
                </Button>
                <ModeToggle />
                <div className="ml-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Link href="/"> Settings </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href='/' > Logout </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
