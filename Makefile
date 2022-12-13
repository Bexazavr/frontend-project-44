# Makefile
install: # установить зависимости
	npm ci

brain-games: # запуск проекта
	node bin/brain-games.js

publish: # публикация
	npm publish --dry-run