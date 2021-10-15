# aserto cms

This is built with [kirby]()

## Develop

to start a local development server you can run

```
php -S localhost:8000 kirby/router.php
```

## Deploy and sync content

Deploy happens automatically via git push and github actions.

Even though this is a file based CMS content is not stored in git.
Sometimes you want to setup some content locally and later sync to the server.
The way to do this is to just to copy the files from and to the server via `scp`.