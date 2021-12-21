class Main {
    $ = document.querySelector.bind(document)
    $$ = document.querySelectorAll.bind(document)
    btnSearch
    btnClose
    inputSearch

    constructor() {
        console.log("Hello Heroes Pluss")
    }

    buttonSearch() {
        this.btnSearch = this.$('.header-search')
        this.btnClose = this.$('.header-close')
        this.inputSearch = this.$('.header-input')

        this.btnSearch.addEventListener('click', () => {
            this.inputSearch.classList.remove('hidden')
        })

        this.btnClose.addEventListener('click', () => {
            this.inputSearch.classList.add('hidden')
        })
    }
}