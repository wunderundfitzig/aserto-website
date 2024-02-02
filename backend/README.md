# aserto cms

This is built with [kirby]()

## Develop

to start a local development server you can run

```
cd backend
cp .env.example .env

php -S localhost:8000 kirby/router.php
```

### Update kirby

```
composer update getkirby/cms -W
```

## Deploy and sync content

Deploy happens automatically via git push and github actions.

Even though this is a file based CMS content is not stored in git.
Sometimes you want to setup some content locally and later sync to the server.
The way to do this is to just to copy the files from and to the server via `scp`.

```
cd backend
scp -r web71@s114.goserver.host:www/CmsAsertoWeb/content .
scp -r web71@s114.goserver.host:www/CmsAsertoWeb/site/accounts site
```
