# 🚀 Resume Rewriter (Enhanced Version)

AI-powered resume builder that helps you **create, optimize, and tailor resumes** for every job application.

---

## ✨ Features

### 🧠 AI Resume Optimization

* Improve resume using LLM (DeepSeek, OpenAI, Ollama, etc.)
* Keyword matching with job descriptions
* Smart suggestions for better hiring chances

---

### 📄 Master Resume System

* Upload your **main resume**
* Use it as a base for all job applications
* Edit and improve dynamically

---

### 🛠 Resume Editor

* Clean 2-panel layout:

  * **Left:** Master Resume
  * **Right:** Resume Editor
* Real-time editing experience

---

### 📊 Resume Matching

* Compare resume with job description
* Get:

  * Match score
  * Keyword highlights
  * Suggestions

---

### 📑 Cover Letter Generator

* Generate tailored cover letters instantly

---

### 📤 Export

* Export resume as **PDF**
* Multiple templates supported

---

## 🧱 Tech Stack

| Layer    | Technology                   |
| -------- | ---------------------------- |
| Frontend | Next.js, React, Tailwind CSS |
| Backend  | FastAPI (Python)             |
| AI       | DeepSeek / OpenAI / Ollama   |
| Storage  | JSON / TinyDB                |

---

## ⚙️ Setup Instructions

### 1. Clone Repo

```bash
git clone https://github.com/Gopi088/rewrite-resume.git
cd rewrite-resume
```

---

### 2. Backend Setup

```bash
cd apps/backend

python -m venv venv
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload --port 8001
```

---

### 3. Frontend Setup

```bash
cd apps/frontend

npm install
npm run dev
```

---

### 4. Open App

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create `.env` in backend:

```env
LLM_PROVIDER=deepseek
LLM_MODEL=deepseek-chat
LLM_API_KEY=your-real-api-key
```

---

## ⚠️ Common Issues

### ❌ LLM Offline

* Add valid API key
* Restart backend

---

### ❌ PDF Upload Fails

```bash
pip install markitdown[pdf]
```

---

### ❌ Port Already in Use

```bash
pkill -f uvicorn
```

---

## 📌 Roadmap

* [ ] Live resume preview
* [ ] Drag & drop sections
* [ ] Multi-template support
* [ ] Better UI/UX
* [ ] AI auto-fill resume

---

## 🤝 Contributing

Pull requests are welcome!
Feel free to fork and improve 🚀

---

## ⭐ Support

If you like this project:

👉 Star the repo
👉 Share with others

---

## 👨‍💻 Author

**Gopal**
GitHub: https://github.com/Gopi088

---
