
const app= new Vue({
    el: `#root`,
    data:{
        currentImage: 0,
        images :[
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    },

    methods:{
        // SE clicco la freccia giu'
        clickDown(){
            // se immagine corrente e' uguale all'ultima immagine dell'array
            if(this.currentImage === this.images.length - 1){
                // immagine corrente ritorna a zero 
                this.currentImage=0;
                // altrimenti incrementa di uno 
            } else{
                this.currentImage++;
            }
        },
        clickUp(){
            // se immagine corrente e' uguale alla prima immagine dell'array
            if(this.currentImage ===0){
                // immagine corrente ritorna all'ultima immagine
                this.currentImage=this.images.length -1
                // altrimenti decrementa di uno 
            } else{
                this.currentImage--;
            }

        },
    
    }
});
