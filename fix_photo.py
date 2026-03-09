import sys

with open('assets/index-Bw_pKeLw.js', 'r') as f:
    content = f.read()

# The old About section (without photo)
old = '''oD = () => E.jsx("section", { id: "about", className: "section-padding max-w-4xl mx-auto", children: E.jsxs($e.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: !0, margin: "-100px" }, transition: { duration: .6 }, children: [E.jsx("h2", { className: "font-mono text-primary text-sm tracking-widest uppercase mb-2", children: "About Me" }), E.jsxs("h3", { className: "text-3xl md:text-4xl font-bold mb-6", children: ["Building ", E.jsx("span", { className: "text-gradient", children: "Intelligent" }), " Solutions"] }), E.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Highly motivated Artificial Intelligence student specializing in Natural Language Processing (NLP) and Deep Learning. I am dedicated to developing innovative AI solutions by leveraging technical expertise in Python, Transformers, and RAG systems. With a strong commitment to continuous learning and a proven track record of contributing to impactful projects, I am seeking an entry-level position where I can apply my skills in a dynamic, forward-thinking environment." })] }) })'''

# New About section (with photo alongside text)
new = '''oD = () => E.jsx("section", { id: "about", className: "section-padding max-w-5xl mx-auto", children: E.jsxs($e.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: !0, margin: "-100px" }, transition: { duration: .6 }, className: "flex flex-col md:flex-row items-center md:items-start gap-8", children: [E.jsx("div", { className: "shrink-0 flex justify-center mb-6", children: E.jsx("img", { src: "/ahmedabdelgwad1/assets/profile-photo.jpeg", alt: "Ahmed Abdelgwad", className: "rounded-full border-2 border-primary object-cover", style: { width: "220px", height: "220px", objectPosition: "center top", boxShadow: "0 0 30px hsl(175 80% 50% / 0.25)" } }) }), E.jsxs("div", { className: "flex-1", children: [E.jsx("h2", { className: "font-mono text-primary text-sm tracking-widest uppercase mb-2", children: "About Me" }), E.jsxs("h3", { className: "text-3xl md:text-4xl font-bold mb-6", children: ["Building ", E.jsx("span", { className: "text-gradient", children: "Intelligent" }), " Solutions"] }), E.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Highly motivated Artificial Intelligence student specializing in Natural Language Processing (NLP) and Deep Learning. I am dedicated to developing innovative AI solutions by leveraging technical expertise in Python, Transformers, and RAG systems. With a strong commitment to continuous learning and a proven track record of contributing to impactful projects, I am seeking an entry-level position where I can apply my skills in a dynamic, forward-thinking environment." })] })] }) })'''

if old in content:
    content = content.replace(old, new)
    with open('assets/index-Bw_pKeLw.js', 'w') as f:
        f.write(content)
    print("SUCCESS! Profile photo added to About section.")
else:
    print("ERROR: Could not find the exact old string.")
    # Try to find a smaller unique substring
    test = 'oD = () => E.jsx("section", { id: "about"'
    if test in content:
        print("Found the About section start, but full string doesn't match.")
        idx = content.find(test)
        print("Content at that location:")
        print(repr(content[idx:idx+200]))
    else:
        print("Cannot even find 'oD = () => E.jsx(\"section\", { id: \"about\"'")
