# Blog - Vitor Britto

My personal blog built with [Jekyll](http://jekyllrb.com/).

## Usage

Run this blog in your local host with the following steps:

```
1. [Git](http://git-scm.com/downloads) and [Ruby](http://www.ruby-lang.org/pt/downloads/) are required.
2. Install [Jekyll](http://jekyllrb.com/): `gem install jekyll`
3. Clone this repository and access the generated folder: `git clone git@github.com:vitorbritto/vitorbritto.github.io.git && cd $_`

4. Comment the bellow lines in `_config.yml` file:

url:         http://www.vitorbritto.com.br/blog
baseurl:     http://www.vitorbritto.com.br/blog/

5. Install dependencies: `npm install`
6. Start the static web server: `rake`
7. Open your favorited browser at `http://localhost:4000`.

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

#### [_includes](https://github.com/vitorbritto/vitorbritto.github.io/tree/master/_includes)

Code blocks to generate the main content ([index.html](https://github.com/vitorbritto/vitorbritto.github.io/blob/master/index.html)).

#### [_plugins](https://github.com/vitorbritto/vitorbritto.github.io/tree/master/_plugins)

Plugins used on this projects.

#### [_posts](https://github.com/vitorbritto/vitorbritto.github.io/tree/master/_posts)

Published posts.

#### [_layouts](https://github.com/vitorbritto/vitorbritto.github.io/tree/master/_layouts)

Default templates.

#### _build

Output folder for compiled files.

#### [assets](https://github.com/vitorbritto/vitorbritto.github.io/tree/master/assets)

All assets available on this blog.

#### [_config.yml](https://github.com/vitorbritto/vitorbritto.github.io/blob/master/_config.yml)

The main configuration file for Jekyll.

#### [index.html](https://github.com/vitorbritto/vitorbritto.github.io/blob/master/index.html)

The main file.


## Contribute
Feel free to [contribute](https://github.com/vitorbritto/vitorbritto.github.io/pulls) with this project or leave a [suggestion](https://github.com/vitorbritto/vitorbritto.github.io/issues).


## License

[MIT License](http://vitorbritto.mit-license.org/) © Vitor Britto

