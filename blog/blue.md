---
path: New Blog
date: 2019-06-02T04:46:49.932Z
title: blue
author: Adam Funk
image: /assets/5star.png
---
dsafdsgvbfdeagb

`collections:`

`  - name: blog`

`    label: Blog`

`    folder: blog`

`    create: true`

`    fields:`

`      - { name: path, label: Path }`

`      - { name: date, label: Date, widget: date }`

`      - { name: title, label: Title }`

`      - { name: author, label: Author }`

`      - { name: body, label: Body, widget: markdown }`

`      - {`

`          label: Image,`

`          name: image,`

`          required: false,`

`          hint: "If an image isn't specified, a default headshot placeholder image will be used",`

`          widget: image,`

`        }`
