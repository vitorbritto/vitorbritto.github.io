# Blog - Vitor Britto

My personal blog built with [Jekyll](http://jekyllrb.com/).

## Usage

### Requirements

- [Git](http://git-scm.com/downloads)
- [Ruby](http://www.ruby-lang.org/pt/downloads/)
- [Jekyll](http://jekyllrb.com/)

### Build
Run this blog in your local host with the following steps:

```bash
1. First, you need to execute the command bellow to:
 - Clone the repository
 - Access the generated folder
 - Install npm dependencies

`git clone git@github.com:vitorbritto/vitorbritto.github.io.git && cd $_ && npm i`

3. Then, edit the `_config.yml` file for:

# Start the static web serve at your machine for edit/update some file
fullurl:        'http://0.0.0.0:4000/'

# Build the project and deploy for production
fullurl:        'http://www.vitorbritto.com.br/blog/'

4. Start the web server with `rake && open -a http://0.0.0.0:4000`
5. Start editing/updating.
6. When you finish, change the `fullurl` to **build** the project and send the _pull request_. =]

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

