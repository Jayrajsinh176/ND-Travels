import { useEffect, useRef, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

// Styled dropdown used in the contact form.
// options: [{ value, label, description, icon }]
function CustomSelect({
  name,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  placeholderIcon: PlaceholderIcon,
  hasError = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const wrapperRef = useRef(null);

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : null;
  const SelectedIcon = selected ? selected.icon : PlaceholderIcon;

  // Close when clicking outside the dropdown
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const open = () => {
    setHighlightIndex(Math.max(selectedIndex, 0));
    setIsOpen(true);
  };

  const choose = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();

      if (!isOpen) {
        open();
        return;
      }

      const step = e.key === "ArrowDown" ? 1 : -1;
      setHighlightIndex(
        (index) => (index + step + options.length) % options.length
      );
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      if (isOpen) {
        choose(options[highlightIndex]);
      } else {
        open();
      }
    }
  };

  const borderClass = hasError
    ? "border-red-400"
    : isOpen
      ? "border-[#0d2d55] shadow-[0_0_0_3px_rgba(13,45,85,0.08)]"
      : "border-slate-200 hover:border-slate-300 focus:border-[#0d2d55]";

  return (
    <div ref={wrapperRef} className="relative">
      {/* Keeps the value in the form data */}
      <input type="hidden" name={name} value={selected ? selected.value : ""} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={handleKeyDown}
        className={`flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-3 text-left text-sm outline-none transition ${borderClass}`}
      >
        {SelectedIcon && (
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
              selected
                ? "bg-orange-50 text-orange-500"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            <SelectedIcon className="h-4 w-4" />
          </span>
        )}

        <span
          className={`flex-1 truncate ${
            selected ? "font-medium text-[#0d2d55]" : "text-slate-400"
          }`}
        >
          {selected ? selected.label : placeholder}
        </span>

        <FiChevronDown
          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Options */}
      <ul
        role="listbox"
        className={`absolute left-0 right-0 top-full z-20 mt-2 origin-top rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-200/60 transition duration-200 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-[0.98] opacity-0"
        }`}
      >
        {options.map((option, index) => {
          const Icon = option.icon;
          const isSelected = selected && option.value === selected.value;
          const isHighlighted = index === highlightIndex;

          return (
            <li
              key={option.value}
              role="option"
              aria-selected={isSelected}
              onMouseEnter={() => setHighlightIndex(index)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(option)}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 transition-colors ${
                isHighlighted ? "bg-slate-50" : ""
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isSelected
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50 text-orange-500"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-[#0d2d55]">
                  {option.label}
                </span>
                {option.description && (
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {option.description}
                  </span>
                )}
              </span>

              {isSelected && (
                <FiCheck className="h-4 w-4 shrink-0 text-orange-500" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomSelect;
