# Introduction
This repository is for documenting about [metatron-discovery](https://github.com/metatron-app/metatron-discovery).

# How to Build
* Requirements
  * Python 3 + [pip](https://pypi.org/project/pip/)
  
* Clone this repository
  ```sh
     git clone https://github.com/metatron-app/metatron-doc-discovery.git
  ```
* Install packages
  ```sh
    pip install -r requirements.txt
  ```
* Build documents using [Sphinx](http://sphinx-doc.org/)
  ```sh
    make html
  ```
* HTML files are located in `_build/html/`.
* Copy built files to `docs/` for publishing [GitHub Pages](https://pages.github.com/)
  ```sh
    cp -r _build/html/* docs/
  ```

# References
* [Sphinx Documents](http://www.sphinx-doc.org/en/master/contents.html)
* [reStructuredText Quick Reference](http://docutils.sourceforge.net/docs/user/rst/quickref.html)

# Noti
