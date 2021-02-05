
#!/usr/bin/env sh

set -e

rm -rf docs/.vuepress/dist

npm run build

cd docs/.vuepress/dist

git init

git remote add origin git@github.com:dc-ken-jiu/dc-doc.git

git add .

git commit -m 'deploy'

git push -f origin master:gh-page
