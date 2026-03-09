import sys

with open('assets/index-Bw_pKeLw.js', 'r') as f:
    content = f.read()

old_text = '{ icon: GC, title: "Text Summarization System", link: "https://github.com/ahmedabdelgwad1/final_plant.git", badge: "Deep Learning", description: "Developed an automated summarization pipeline utilizing BART/T5 Transformer models, fine-tuned on large datasets and evaluated using ROUGE metrics.", tags: ["Python", "PyTorch", "Hugging Face"] }'

new_text = '{ icon: GC, title: "AI-Powered Plant Disease Diagnostic System", link: "https://github.com/ahmedabdelgwad1/final_plant.git", badge: "Backend & AI Engineer", description: "Architected a robust FastAPI RESTful API to diagnose agricultural diseases in real-time via multimodal LLMs (Groq API) and crop images. Engineered a RAG pipeline with ChromaDB for highly accurate treatment plans, and designed a complete CI/CD pipeline automating Docker deployments to Hugging Face Spaces.", tags: ["FastAPI", "RAG", "ChromaDB", "Computer Vision", "Docker", "CI/CD"] }'

if old_text in content:
    content = content.replace(old_text, new_text)
    print("Successfully replaced project!")
    with open('assets/index-Bw_pKeLw.js', 'w') as f:
        f.write(content)
else:
    print("Old text not found.")
