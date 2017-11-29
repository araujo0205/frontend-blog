module.exports = {
    sections: {
        nav: {
            selector: 'nav',
            elements: {
                home: {
                    selector: 'li:first-child'
                },
                categorias: {
                    selector: 'li:nth-of-type(2)'
                },
                tags: {
                    selector: 'li:nth-of-type(3)'
                }
            }
        },
        aside: {
            selector: 'aside',
            elements: {
                categoriesTitle: {
                    selector: 'h3:nth-of-type(1)'
                },
                categoriesItens: {
                    selector: 'ul:nth-of-type(1)'
                },

                tagsTitle: {
                    selector: 'h3:nth-of-type(2)'
                },
                tagsItens: {
                    selector: 'ul:nth-of-type(2)'
                },

                topTitle: {
                    selector: 'h3:nth-of-type(3)'
                },
                topItens: {
                    selector: 'ul:nth-of-type(3)'
                },

                feed: {
                    selector: 'h3:nth-of-type(4)'
                },

                socialTitle: {
                    selector: 'h3:nth-of-type(5)'
                },
                socialItens: {
                    selector: 'ul:nth-of-type(4)'
                },      
            }
        }
    }
};