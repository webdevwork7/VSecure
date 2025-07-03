"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, Shield } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-zinc-900 text-zinc-100">
        <div className="container flex h-10 items-center justify-between">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <Phone className="mr-2 h-4 w-4" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="mr-2 h-4 w-4" />
              <span>{siteConfig.contact.email}</span>
            </div>
          </div>
          <div className="md:hidden" />
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="link" size="sm" className="text-zinc-100 h-8 px-2">
              Client Portal
            </Button>
            <Button variant="link" size="sm" className="text-zinc-100 h-8 px-2">
              Support
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className={cn(
          "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          isScrolled && "shadow-md"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Shield className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="font-heading text-xl font-bold">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground" : "text-foreground/60"
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/about"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                About Us
              </Link>
              <Link
                href="/residential"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/residential"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Residential Systems
              </Link>
              <Link
                href="/commercial"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/commercial"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Commercial Systems
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/contact"
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Contact Us
              </Link>
            </nav>
            <div className="hidden md:block">
              <Button>Get a Quote</Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-foreground text-lg font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-foreground/60 text-lg font-medium"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/residential"
                    className="text-foreground/60 text-lg font-medium"
                  >
                    Residential Systems
                  </Link>
                  <Link
                    href="/commercial"
                    className="text-foreground/60 text-lg font-medium"
                  >
                    Commercial Systems
                  </Link>
                  <Link
                    href="/contact"
                    className="text-foreground/60 text-lg font-medium"
                  >
                    Contact Us
                  </Link>
                  <div className="pt-4">
                    <Button className="w-full">Get a Quote</Button>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>{siteConfig.contact.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>{siteConfig.contact.email}</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
