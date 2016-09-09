# Empty ember-cli/rails project

Get the code with command: 

```bash
git clone git@github.com:hiptest/empty-embercli-rails-project.git
cd empty-embercli-rails-project
```

You need to install:
- Ruby 2.3
- Rails 4.2
- NodeJS 0.12
- npm 2.15

Install ember-cli:

```bash
npm install -g ember-cli
```

Build the project:

```bash
bundle install
bin/rake ember:install
```

Run the server:

```bash
bin/rails server
```

Go to the empty page: http://localhost:3000/

