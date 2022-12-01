const contentPage = [{
    title: "Título do card",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
    source: "assets/Rectangle.svg"
}, {
    title: "Título do card",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
    source: "assets/Rectangle-1.svg"
}, {
    title: "Título do card",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
    source: "assets/Rectangle-2.svg"
}, {
    title: "Título do card",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
    source: "assets/Rectangle-3.svg"
}, {
    title: "Título do card",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
    source: "assets/Rectangle-4.svg"
}, {
    title: "Título do card",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.",
    source: "assets/Rectangle-5.svg"
}]

const mainPage = document.querySelector('main div')


contentPage.forEach(contentPage => {

    mainPage.innerHTML += `
<section class="box-content">
<img src="${contentPage.source}" alt="Rectangle">
<h3>${contentPage.title}</h3>
<p>${contentPage.content}</p>
</section>
`

})



