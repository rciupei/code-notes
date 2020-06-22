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
syntax is ![alternate tag](/logo.png "This is the tooltip")

![This is the logo][logo]

[here is the link to the logo](/logo.png)

[logo]: /logo.png
```

The logo is located in the static folder

![alternate tag](/logo.png "This is the tooltip")

![This is the logo][logo]

[here is the link to the logo](/logo.png)

[logo]: /logo.png

## Lists - Ordered, Unordered, Bullets and Nesting
