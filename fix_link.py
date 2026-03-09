import sys

with open('assets/index-Bw_pKeLw.js', 'r') as f:
    content = f.read()

# 1. Modify the rendering loop
old_render = 'E.jsx("h4", { className: "text-lg font-bold mt-1 mb-3", children: e.title })'
new_render = 'E.jsx("h4", { className: "text-lg font-bold mt-1 mb-3", children: e.link ? E.jsx("a", { href: e.link, target: "_blank", className: "hover:text-primary transition-colors flex items-center gap-1 hover:underline", children: [e.title, E.jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [E.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), E.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })] })] }) : e.title })'

if old_render in content:
    content = content.replace(old_render, new_render)
    print("Render string replaced!")
else:
    print("Render string NOT found")
    
# 2. Add the link to the object
old_obj = 'icon: GC, title: "Text Summarization System"'
new_obj = 'icon: GC, title: "Text Summarization System", link: "https://github.com/ahmedabdelgwad1/final_plant.git"'

if old_obj in content:
    content = content.replace(old_obj, new_obj)
    print("Object string replaced!")
else:
    print("Object string NOT found")

with open('assets/index-Bw_pKeLw.js', 'w') as f:
    f.write(content)
