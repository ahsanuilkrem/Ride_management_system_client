import Logo from "@/assets/icons/Logo"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { role } from "@/constants/role"
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { useAppDispatch } from "@/redux/hook"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { LogOut, User } from "lucide-react"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", active: true, role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.ADMIN },
  { href: "/rederDashboard", label: "Dashboard", role: role.RIDER },
  { href: "/driverDashboard", label: "Dashboard", role: role.DRIVER },
]

export default function Navbar() {

  const { data } = useUserInfoQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const getUserInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const hasGooglePicture = data?.data?.auths?.some(
    (auth: { provider: string }) => auth.provider === "google"
  );


  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <>
                      {
                        link.role === "PUBLIC" && (<NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            asChild
                            className="py-1.5">
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>)
                      }
                      {
                        link.role === data?.data?.role && (<NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            asChild
                            className="py-1.5">
                            <Link to={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>)
                      }
                    </>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary hover:text-primary/90">
              <Logo />
            </a>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <>
                    {
                      link.role === "PUBLIC" && (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink
                            asChild
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium">
                            <Link to={link.href}>{link.label}</Link>

                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                    }
                    {
                      link.role === data?.data?.role && (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink
                            asChild
                            className="text-muted-foreground hover:text-primary py-1.5 font-medium">
                            <Link to={link.href}>{link.label}</Link>

                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )
                    }
                  </>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="py-2">
            <div className="flex items-center gap-2">
              {/* <ModeToggle /> */}
            </div>
          </div>
          {/* User Avatar Dropdown or Login Button */}
          {data?.data?.email ? (
            <TooltipProvider>
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative h-10 w-10 rounded-full p-0 hover:bg-accent transition-colors">
                        <Avatar className="h-10 w-10">
                          {data?.data?.picture ? (
                            <AvatarImage
                              src={data.data.picture}
                              alt={data.data.name}
                              className="object-cover"
                            />
                          ) : null}
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                            {getUserInitial(data?.data?.name || "U")}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{data.data.name}</p>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent
                  className="w-80 p-4"
                  align="end"
                  sideOffset={8}
                >
                  {/* User Info Section */}
                  <div className="flex items-center gap-3 pb-3">
                    <Avatar className="h-12 w-12">
                      {data?.data?.picture ? (
                        <AvatarImage
                          src={data.data.picture}
                          alt={data.data.name}
                          className="object-cover"
                        />
                      ) : null}
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                        {getUserInitial(data?.data?.name || "U")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {data.data.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {data.data.email}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                          {data.data.role}
                        </span>
                        {hasGooglePicture && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/20 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                            Google
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <DropdownMenuSeparator />


                  {/* Actions */}
                  <div className="space-y-1">
                    <DropdownMenuItem asChild>
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400 cursor-pointer"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </TooltipProvider>
          ) : (
            <Button asChild className="text-sm font-medium">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
