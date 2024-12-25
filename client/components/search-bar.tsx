"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";

const SAMPLE_SUGGESTIONS = [
  "Textbooks",
  "Calculator",
  "Laptop",
  "Sports Equipment",
  "Study Table",
];

export function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Search products..."
            className="pl-8"
            value={value}
            onValueChange={setValue}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {SAMPLE_SUGGESTIONS.map((suggestion) => (
                <CommandItem
                  key={suggestion}
                  onSelect={(value) => {
                    setValue(value);
                  }}
                >
                  {suggestion}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
}