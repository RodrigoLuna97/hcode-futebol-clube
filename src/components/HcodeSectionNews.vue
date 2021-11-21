<template>
    <section>
        <div class="container">

            <HcodeSectionNesIndividual 
                img-name="news1.jpg"
                img-info="Notícia 1"
                news-title="Começam os treinos para a nova temporada"
                news-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quae inventore rerum nihil soluta quasi recusandae dolores a praesentium pariatur. Animi accusantium iure temporibus. Modi saepe recusandae beatae natus tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus aperiam facilis mollitia non necessitatibus, est totam hic quae similique voluptatem molestias accusamus. Distinctio iure quod inventore vitae maxime ea."
                news-date="01/01/2020"

            />

            <HcodeSectionNesIndividual 
            
            img-name="news2.jpg"
                img-info="Notícia 2"
                news-title="Jogo de quarta-feira termina empatado"
                news-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quae inventore rerum nihil soluta quasi recusandae dolores a praesentium pariatur. Animi accusantium iure temporibus. Modi saepe recusandae beatae natus tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus aperiam facilis mollitia non necessitatibus, est totam hic quae similique voluptatem molestias accusamus. Distinctio iure quod inventore vitae maxime ea."
                news-date="07/01/2020"
            />

            <HcodeSectionNesIndividual 
            
            img-name="news3.jpg"
                img-info="Notícia 3"
                news-title="A inauguração do novo estário será semana que vem"
                news-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quae inventore rerum nihil soluta quasi recusandae dolores a praesentium pariatur. Animi accusantium iure temporibus. Modi saepe recusandae beatae natus tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus aperiam facilis mollitia non necessitatibus, est totam hic quae similique voluptatem molestias accusamus. Distinctio iure quod inventore vitae maxime ea."
                news-date="20/01/2020"
                />
        </div>
    </section>
</template>

<script>
import HcodeSectionNesIndividual from './HcodeSectionNewsIndividual'

export default {
    components: {
        HcodeSectionNesIndividual
    }
}
</script>

<style scoped>
section{
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37502;
}
</style>