
const app= new Vue({
    el: `#slider`,
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
                this.resetPlay();
                // altrimenti incrementa di uno 
            } else{
                this.currentImage++;
            }
        },
        clickUp(){
            // se immagine corrente e' uguale alla prima immagine dell'array
            if(this.currentImage ===0){
                // immagine corrente ritorna all'ultima immagine
                this.currentImage=this.images.length -1;
                this.resetPlay();
                // altrimenti decrementa di uno 
            } else{
                this.currentImage--;
            }

        },
        selectImage(index){
                this.currentImage=index;
                this.resetPlay();
        },
        resetPlay: function() {
                clearInterval(this.timer);
                this.play();
        },
        play: function() {
            let app = this;
            this.timer = setInterval(function() {
            app.clickDown();
            }, 3000);
        },
        created: function() {
            this.play();
        }, 
        goToSlider (sliderIndex) {
            var self = this;
            this.activeslider = sliderIndex;
            clearInterval(this.sliderTimer);
            this.sliderTimer = setInterval(() => {
            self.nextSlider() }, self.sliderinterval);
            
        },
    }
    
});

