# Madarij

Arabic curriculum site. Levels 1 to 3, then placement into a school
for the Alimiyyah track.

## Rules
- Vanilla HTML, CSS, JS only. No frameworks.
- Lessons live in data/lessons.json

## Colors
- Emerald #0F4C45 (primary)
- Gold #C9A24B (hihglight)
- Cream #F7F1E3 (background)
- Ink #1B1F1E (regular text)


# Madarij

Arabic curriculum site. Levels 1 to 3, then placement into a school
for the Alimiyyah track. Provides resources to teachers, students,
and institutions. Content is PDFs that will be designed and added
to the system over time.

## Rules
- Vanilla HTML, CSS, and JS only. No frameworks or build tools.
- Do not add dependencies without asking first.
- Lessons live in data/lessons.json and are rendered by JS.
- Keep code consistent and easy to build on later.
- Comment the "why" behind code, not just the "what". Explain JS in
  beginner-friendly terms.

## Workflow
- Work one step at a time. Only change what I ask for.
- After each change, list the files created or changed and what each
  part does.
- After every change, add an entry to the Change Log at the bottom
  of this file. Put the newest entry on top.
- Each entry needs: date, files created or changed, what changed,
  and why. Keep it short and in plain language.
- Do not edit or delete old entries.

## Folder Structure
- index.html (homepage)
- lesson.html (single lesson template, loads by ?id=)
- css/style.css
- js/main.js
- data/lessons.json
- files/ (PDFs)
- assets/logo/

## Lesson Data Fields
id, title, level (1-3), order, topic, fileUrl, description

## Arabic / RTL
- Support right-to-left layouts (dir="rtl") using logical CSS
  properties like margin-inline-start.
- Use Amiri or Reem Kufi for Arabic text.
- Arabic search must later ignore diacritics and treat letter
  variants (أ/ا/إ) as the same.

## Standards
- Mobile-first, semantic HTML, accessible (alt text, good contrast)
- Lowercase-with-hyphens file names

## Colors
- Emerald #0F4C45 (primary)
- Gold #C9A24B (highlight)
- Cream #F7F1E3 (background)
- Ink #1B1F1E (regular text)

## Change Log
(Newest on top)

- YYYY-MM-DD: Created PROJECT.md. No code yet.