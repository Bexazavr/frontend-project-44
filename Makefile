# Makefile
install: # установить зависимости
	npm ci

brain-games: # запуск проекта
	node bin/brain-games.js

publish: # попытка публикации для проверки на ошибки
	npm publish --dry-run

lint: # запуск линтера
	npx eslint