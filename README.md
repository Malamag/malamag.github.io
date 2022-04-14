## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Malamag/malamag.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Malamag/malamag.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="Description" content="Code pour le TP2 de INF8808.">
        <title>TP2 | INF8808</title>

        <link rel="stylesheet" href="assets/style.css">
        <link rel="stylesheet" href="assets/tooltip.css">
        <link rel="stylesheet" href="assets/typography.css">

      </head>

      <body>
        <header>
          <h1>
            Who's Speaking?
          </h1>
          <h2>
            An analysis of Shakespeare's Romeo and Juliet
          </h2>
        </header>
        <main>
          <div class="viz-container">
            <div class="graph" id="bar-chart">
              <svg class="main-svg"></svg>
            </div>
          </div>
        </main>
        <footer>
          <div class='panel'>
            <div class='legend-title'>
              <p>
                Legend
              </p>
            </div>
            
            <div class='legend'></div>
            
          </div>
        </footer>
        <script src="https://d3js.org/d3.v5.js"></script>
        <script src="./index.js"></script>
      </body>
</html>
