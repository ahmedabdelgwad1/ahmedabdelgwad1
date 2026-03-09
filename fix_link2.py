import sys

with open('assets/index-Bw_pKeLw.js', 'r') as f:
    content = f.read()

# I will REVERT my previous change
old_wrong_render = 'E.jsx("h4", { className: "text-lg font-bold mt-1 mb-3", children: e.link ? E.jsx("a", { href: e.link, target: "_blank", className: "hover:text-primary transition-colors flex items-center gap-1 hover:underline", children: [e.title, E.jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [E.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), E.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })] })] }) : e.title })'
# Actually I need `E.jsxs` for "a" tag AND "svg" tag since both have multiple children!
new_render = 'E.jsx("h4", { className: "text-lg font-bold mt-1 mb-3", children: e.link ? E.jsxs("a", { href: e.link, target: "_blank", className: "hover:text-primary transition-colors flex items-center gap-1 hover:underline", children: [e.title, E.jsxs("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [E.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), E.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })] })] }) : e.title })'

if old_wrong_render in content:
    content = content.replace(old_wrong_render, new_render)
    print("Fixed E.jsx to E.jsxs!")
else:
    print("WARNING: Could not find the improperly injected JSX")

with open('assets/index-Bw_pKeLw.js', 'w') as f:
    f.write(content)
