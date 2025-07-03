import Link from "next/link";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-zinc-400 text-sm">
              Providing advanced security solutions for homes and businesses
              with 24/7 monitoring, smart integration, and professional
              installation.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-zinc-100"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-zinc-100"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-zinc-100"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-zinc-100"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-zinc-100 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-zinc-100 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/residential"
                  className="text-zinc-400 hover:text-zinc-100 text-sm"
                >
                  Residential Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial"
                  className="text-zinc-400 hover:text-zinc-100 text-sm"
                >
                  Commercial Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-zinc-100 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-400 hover:text-zinc-100 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-zinc-400 hover:text-zinc-100 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-zinc-400 text-sm">
                  {siteConfig.contact.phone}
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-zinc-400 text-sm">
                  {siteConfig.contact.email}
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-zinc-400 text-sm">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Subscribe to our newsletter for the latest security tips and
              updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-zinc-800 border-zinc-700 text-zinc-100"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400 text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
