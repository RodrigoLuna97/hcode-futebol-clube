import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        championship: 'Campeonato Brasileiro',
        clubName: 'Hcode Treinamentos',
        news: [{
            id:1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quae inventore rerum nihil soluta quasi recusandae dolores a praesentium pariatur. Animi accusantium iure temporibus. Modi saepe recusandae beatae natus tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus aperiam facilis mollitia non necessitatibus, est totam hic quae similique voluptatem molestias accusamus. Distinctio iure quod inventore vitae maxime ea.',
            date: '2020-01-01',
            img: 'news1.jpg',
            imgInfo: 'Notícia 1'
        }, {
             id:2,
            title: 'Jogo de quarta-feira termina empatado',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quae inventore rerum nihil soluta quasi recusandae dolores a praesentium pariatur. Animi accusantium iure temporibus. Modi saepe recusandae beatae natus tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus aperiam facilis mollitia non necessitatibus, est totam hic quae similique voluptatem molestias accusamus. Distinctio iure quod inventore vitae maxime ea.',
            date: '2020-01-07',
            img: 'news2.jpg',
            imgInfo: 'Notícia 2'
        }, {
             id:3,
            title: 'A inauguração do novo estário será semana que vem',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quae inventore rerum nihil soluta quasi recusandae dolores a praesentium pariatur. Animi accusantium iure temporibus. Modi saepe recusandae beatae natus tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repellendus aperiam facilis mollitia non necessitatibus, est totam hic quae similique voluptatem molestias accusamus. Distinctio iure quod inventore vitae maxime ea.',
            date: '2020-01-20',
            img: 'news3.jpg',
            imgInfo: 'Notícia 3'
        }]
    },
    getters: {
        getChampionship(state){
            return state.championship
        },
        getClubName(state) {
            return state.clubName
        },
        getNews(state){
            return state.news;
        }
    },
    mutations: {
        setChampionship(state, newValue){
            state.championship = newValue;
        },
        setClubName(state, newName){
            state.clubName = newName;
        }
    },
    actions: {
        changeChampionship(context, value){
            context.commit('setChampionship', value);

        },
        updateClubName(context, value){
            context.commit('setClubName', value);
        }
    }
})