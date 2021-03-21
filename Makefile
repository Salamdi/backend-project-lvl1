GAME?="brain-games"
install:
	npm install

brain-games:
	node bin/brain-games.js

play:
	node bin/$(GAME).js

publish:
	npm publish --dry-run

lint:
	npx eslint .

