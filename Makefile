LATEX = pdflatex
BIBTEX = bibtex
PANDOC = pandoc

TITLE = references

$(TITLE).pdf: $(TITLE).tex
	$(LATEX) $(TITLE)
	$(BIBTEX) $(TITLE)
	$(LATEX) $(TITLE)
	$(LATEX) $(TITLE)
	open $(TITLE).pdf

$(TITLE).html: $(TITLE).md 
	$(PANDOC) --filter=pandoc-citeproc --standalone $(TITLE).md -o $(TITLE).html

clean:
	rm $(TITLE).pdf *.aux *.log *.blg *.bbl
