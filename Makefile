all: docs/

docs/: dist/index.html
	rm -rf docs
	mkdir docs
	cp -r ./dist/* ./docs

dist/index.html:
	npm run build