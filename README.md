# madarijProd

## Curriculum data

The vault reads its curriculum from [data/curriculum.json](data/curriculum.json).
The JSON file is an array of levels. Each level contains units, each unit
contains lessons, and each lesson contains materials:

```json
[
  {
    "title": "Level 0",
    "description": "A description for this level.",
    "units": [
      {
        "title": "Unit 1: Example",
        "lessons": [
          {
            "title": "Here is a lesson title.",
            "description": "Here is a lesson description.",
            "time": "20 min",
            "materials": [
              {
                "title": "Here is a material title.",
                "url": "https://drive.google.com/file/d/FILE_ID/view",
                "keywords": ["topic", "review", "practice"]
              }
            ]
          }
        ]
      }
    ]
  }
]
```

Replace each material's `url` with its Google Drive link. Add manually chosen
search terms to `keywords`; the vault searches material titles, keywords, and
their level/unit/lesson path without searching inside the linked document.

Because the page uses `fetch()` to read the JSON file, open the site through a
web server during development rather than directly from a `file://` URL.