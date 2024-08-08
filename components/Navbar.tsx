"use client";
import React, { useState } from "react";
import {  Menu, MenuItem,HoveredLink } from "./navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10  inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-10">
            <MenuItem  setActive={setActive} active={active} item="Home">
              <HoveredLink href="/">Front Page</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Renderer">
              <HoveredLink href="/renderer">Render component</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
              <HoveredLink href="/contact-us">Send a Message</HoveredLink>
            </MenuItem>
          </div>
          <ModeToggle />
        </div>
      </Menu>
    </div>
  );
}