---
title: Mastering Markdown
emoji: 🐳
tags:
  - markdown
link: https://www.youtube.com/playlist?list=PLu8EoSxDXHP7v7K5nZSMo9XWidbJ_Bns3
---

## Paragraphs and Text Decoration

```markdown
**Wes is cool**
_Wes is cool_
Wes is ~~really cool~~
```

One set of underscores/asterisk will make something italic, two sets bold

**Wes is cool**

_Wes is cool_

Wes is ~~really cool~~

## Creating and Linking Headings

```markdown
# h1

## h2

...
```

## Four ways to make links

```markdown
[Google Page](https://www.google.com)

[Google Page](https://www.google.com "This is the title that appears on hover")

Make sure you visit the [Google Page][1]

Also strings can be used for [Google Page][google]

[1]: https://www.google.com
[google]: https://www.google.com
```

[Google Page](https://www.google.com)

[Google Page](https://www.google.com "This is the title that appears on hover")

Make sure you visit the [Google Page][1]

Also strings can be used for [Google Page][google]

[1]: https://www.google.com
[google]: https://www.google.com

## Markdown Images

```markdown
syntax is ![alternate tag](/code-notes/logo.png "This is the tooltip")

![This is the logo][logo]

[here is the link to the logo](/code-notes/logo.png)

[logo]: /logo.png
```

The logo is located in the static folder

![alternate tag](/code-notes/logo.png "This is the tooltip")

![This is the logo][logo]

[here is the link to the logo](/logo.png)

[logo]: /code-notes/logo.png

## Lists - Ordered, Unordered, Bullets and Nesting

Unordered lists

```markdown
- a
- b
- c

or \* or +

- a

* b
```

- a
- b
- c

or '\*' or '+'

- a

* b

Ordered lists

```markdown
1. first
   - nested
     - nested
1. second
1. third
```

1. first
   - nested
     - nested
1. second
1. third

## Line Breaks, Horizontal Rules and Blockquotes

```markdown
Wes<br/>
is cool

Horizontal rules

---

Blockquotes

> Here is a blockquote
```

Wes<br/>
is cool

Horizontal rules

---

> Here is a blockquote

## Code Blocks + Syntax Highlighting

Here is my code

```markdown
Hey. Did you try `var x = 100` ?
```

Hey. Did you try `var x = 100` ?

```diff
var x = 100
- var y = 200
+ var y = 300
```

## Tables

```markdown
| Name | Age |
| :--- | :-- | //or only dashes without colon
| John | 35 |
| Jane | 25 |
```

| Name | Age |
| ---- | --- |
| John | 35  |
| Jane | 25  |

## Checkboxes

```markdown
- [x] Todo 1
- [ ] Todo 2
```

- [x] Todo 1
- [ ] Todo 2
