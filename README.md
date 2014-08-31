# Blog - Vitor Britto

My personal blog built with [Jekyll](http://jekyllrb.com/).

## Run locally

Run this blog in your local host with the following steps:

- [Git](http://git-scm.com/downloads) and [Ruby](http://www.ruby-lang.org/pt/downloads/) are required.
- Install [Jekyll](http://jekyllrb.com/): `gem install jekyll`
- Clone this repository and access the generated folder: `git clone git@github.com:vitorbritto/vitorbritto.github.io.git && cd $_`

- Comment the bellow lines in `_config.yml` file:

```
url:         http://www.vitorbritto.com.br/blog
baseurl:     http://www.vitorbritto.com.br/blog/
```
- Install dependencies: `npm install`
- Start the static web server: `rake`
- Open your favorited browser at `http://localhost:4000`.

## Structure

````bash
.
├── _build/
├── _includes/
├── _layouts/
├── _plugins/
├── _posts/
├── about/
├── archive/
├── assets/
│   ├── css/
│   ├── fonts/
│   ├── images/
│   ├── js/
│   └── sass/
├── projects/
├── .editorconfig
├── .gitignore
├── .jshintrc
├── _config.yml
├── bower.json
├── CNAME
├── config.rb
├── feed.xml
├── Gemfile
├── Gruntfile.js
├── humans.txt
├── index.html
├── package.json
├── Rakefile
├── README.md
└── robots.txt
```

### [_includes](https://github.com/vitorbritto/blog/tree/master/_includes)

Coe blocks to generate the main content ([index.html](https://github.com/vitorbritto/blog/blob/master/index.html)).

### [_plugins](https://github.com/vitorbritto/blog/tree/master/_plugins)

Plugins used on this projects.

### [_posts](https://github.com/vitorbritto/blog/tree/master/_posts)

Published posts.

### [_layouts](https://github.com/vitorbritto/blog/tree/master/_layouts)

Default templates.

### _build

Output folder for compiled files.

### [assets](https://github.com/vitorbritto/blog/tree/master/assets)

All assets available on this blog.

### [_config.yml](https://github.com/vitorbritto/blog/blob/master/_config.yml)

The main configuration file for Jekyll.

### [index.html](https://github.com/vitorbritto/blog/blob/master/index.html)

The main file.

*More information about Jekyll structure, [click here](https://github.com/mojombo/jekyll/wiki/Usage).*
