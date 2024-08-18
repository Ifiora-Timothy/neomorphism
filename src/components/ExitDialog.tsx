"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export function DialogDemo({ className }: { className?: string }) {
  const [href, setHref] = useState("");

  const setref = (href: string) => {
    setHref(href);
  };

  return (
    <Dialog>
      <DialogTrigger className={cn("", className)} asChild>
        <div className="flex gap-2 h-full sm:pr-7 justify-center  items-center   ">
          <Socials
            onclick={setref}
            href="https://x.com/Ifiora_Timothy?t=ucysPhzxIIvZ9Q2yVo0y3w&s=08"
          >
            <SiX title="Twitter" size={24} />
          </Socials>
          <Socials
            onclick={setref}
            href="https://www.instagram.com/timoethy_?igsh=MTNxeWIxcmh5NHdjdw=="
          >
            <SiInstagram title="Instagram" size={24} />
          </Socials>
          <Socials
            onclick={setref}
            href="https://www.linkedin.com/in/timothy-ifiora-20b088322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <SiLinkedin title="LinkedIn" size={24} />
          </Socials>
          <Socials onclick={setref} href="https://github.com/Ifiora-Timothy">
            <SiGithub title="Github" size={24} />
          </Socials>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white toast  neomorphic-dark-dialog">
        <DialogHeader>
          <DialogTitle className="toast-header text-white font-medium">
            Leave Site?
          </DialogTitle>
          <DialogDescription className="toast-body text-center">
            You are about to leave the website.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <DialogClose className="" asChild>
            <Link target="_blank" className="" href={href}>
              <Button className="neomorphic-dark-button w-full">
                Continue
              </Button>
            </Link>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant="outline"
              className="neomorphic-dark-button text-slate-800"
            >
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const Socials = ({
  children,
  onclick,
  href,
}: {
  children: ReactNode;
  href: string;
  onclick: (href: string) => void;
}) => {
  return (
    <div
      onClick={() => {
        onclick(href);
      }}
      className="button  flex items-center justify-center size-[37px]  sm:size-[32px]"
    >
      {children}
    </div>
  );
};
