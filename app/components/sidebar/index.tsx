"use client";
import { useState } from "react";
import { navSections } from "@/lib/utils";
import { Disc3, KeyboardMusicIcon, ListMusic, Music4, Play } from "lucide-react";

const SideBar = () => {
  interface checkType {
    one: number;
    two: number;
  }
  const [check, setCheck] = useState<{ one: number; two: number }>({
    one: 0,
    two: 0,
  });
  return (
    <div className="">
      <aside className="w-64 border-r h-full overflow-y-auto p-4 space-y-8 text-sm">
        {navSections.map((section, i: number) => (
          <div key={section.title}>
            <h2 className="font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-1">
              {section.links.map((link, j: number) => (
                <li key={link}>
                  <div
                    className={`flex items-center gap-2 px-2 py-1 rounded hover:bg-black/80 hover:text-white transition ${
                      check.one == i && check.two == j && "bg-black text-white "
                    }`}
                    onClick={() => setCheck({ one: i, two: j })}
                  >
                    {i !== 0 ? (
                      <ListMusic/>
                    ) : j == 0 ? (
                      <Play />
                    ) : j == 1 ? (
                      <Music4 />
                    ) : (
                      j == 2 && <Disc3 />
                    )}
                    {link}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default SideBar;
