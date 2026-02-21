# Question Intelligence Platform

A university exam prep platform organizing **Previous Year Questions (PYQ)** for 8 subjects across 3rd and 4th semester. Interactive question banks + a modern React/Vite dashboard.

---

## Project Structure

```
question-bank/
 index.html               Landing page (entry point)
 vercel.json              Vercel deployment config
 convert-questions.js     Data pipeline: data/*.js  ui/src/app/data/questions.ts

 subjects/                Interactive HTML question banks
    ppl.html             Principles of Programming Languages
    deld.html            Digital Electronics & Logic Design
    os.html              Operating System

 data/                    Question database files
    ppl.js
    deld.js
    os.js
    oop.js
    daa.js
    csa.js
    dbms.js
    dm.js

 ui/                      React + Vite modern dashboard
    src/
       app/
          components/
          data/
       styles/
    package.json
    vite.config.ts
    vercel.json

 scripts/                 Dev utilities
     extract_pdf.py
     notes.txt
```

---

## Subjects

### 3rd Semester

| Subject | Code | Questions | Coverage |
|---------|------|-----------|----------|
| Digital Electronics & Logic Design | DELD | 193 | 2020–24 |
| Operating System | OS | 182 | 2021–23 |
| Principles of Programming Languages | PPL | 162 | 2020–24 |

### 4th Semester

| Subject | Code | Questions | Coverage |
|---------|------|-----------|----------|
| Object Oriented Programming (Java) | OOP | 119 | 2021–25 |
| Design & Analysis of Algorithms | DAA | 152 | 2021–25 |
| Computer System Architecture | CSA | 118 | 2021–25 |
| Database Management System | DBMS | ~120 | 2021–25 |
| Discrete Mathematics | DM | ~110 | 2021–25 |

---

## Deployment

### Main Static Site
Deployed from the **repo root** on Vercel (no build step needed).
- Landing page: `index.html`
- Subject pages: `subjects/ppl.html`, `subjects/deld.html`, `subjects/os.html`
- Short URLs via `vercel.json`: `/ppl` `/deld` `/os`

### React UI (`ui/`)
Deployed as a **separate Vercel project** rooted at the `ui/` folder.
- Build: `npm run build`
- Output: `ui/dist/`
- Config: `ui/vercel.json`

---

## Local Development

### Open question banks
No setup required — open directly in browser:
```
index.html            (landing page)
subjects/ppl.html
subjects/deld.html
subjects/os.html
```

### React UI
```bash
cd ui
npm install
npm run dev       # http://localhost:5173
npm run build     # production build  ui/dist/
```

### Regenerate question data
After editing any `data/*.js` file, regenerate TypeScript source:
```bash
node convert-questions.js
```

---

## Features

- Interactive question evaluation (Known / Review / Unknown)
- Smart filters: unit, marks, year, priority, frequency
- Progress tracking via LocalStorage (1-year expiry)
- Exam probability prediction per topic
- Priority badges based on historical frequency
- Mobile responsive

---

## License

MIT — free for educational use.
