<template>
    <div>
        
        <div class="isotop-grid">
            <div class="col-md-12"> 
                <div class="gallery-filter">
                <ul class="button-group filters">
                    <button 
                        v-for="(val, key) in option.getFilterData" 
                        :key="key" class="button"
                        :class="[key===filterOption? 'is-checked' : '']" 
                        @click="filter(key)"> 
                        <span v-if="key== 'three-sixty'">360 </span>
                        <span v-else>{{key}} </span>
                    </button>
                </ul>
                <div class="pull-right">
                    <div class="dropdown show">
                        <button class="btn dropdown-toggle" href="#" @click="showDropdown = !showDropdown" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Recommended
                        </button>

                        <div class="dropdown-menu" :class= "{show: showDropdown}" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Most Recent</a>
                            <a class="dropdown-item" href="#">Most Viewed</a>
                            <a class="dropdown-item" href="#">Most Downloaded</a>
                            <a class="dropdown-item" href="#">Most Appreciated</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <isotope ref="cpt" id="root_isotope1" :item-selector="'element-item'" :list="list" v-images-loaded:on.progress="layout" :options='option' @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]" @layout="currentLayout=arguments[0]">
                    <div v-for="(element,index) in list" class="col-md-4" :class='[element.category]' :key="index">
                        <div class="main-contents">
                            <img :src="require( `../../assets/images/gallery/${element.imgPath}`)" />
                            <div v-if="element.category=='Videos'" class="video-overlay"> 
                                <ul>
                                    <li v-for="artist in artists" :key="artist.index">
                                        <div class="item-left">
                                            <img :src="require( `../../assets/images/artist/${artist.imgPath}`)" />
                                        </div>
                                        <div class="item-right">
                                            <h6>{{artist.name}}</h6>
                                            <p>{{artist.view}} Views </p>
                                        </div>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </isotope>
            </div>
        </div>
    </div>
</template>

<script>
import isotope from 'vueisotope'
import imagesLoaded from 'vue-images-loaded'
export default {
    components: {
        isotope,
    },
    directives: {
        imagesLoaded
    },
    data() {
        return{
            showDropdown: false,
            artists: [
                {
                    name: 'Alex',
                    imgPath:"1.png",
                    view: '5.03M'
                },
                {
                    name: 'Jack',
                    imgPath:"2.png",
                    view: '4.85M'
                },
                {
                    name: 'Roku Lava',
                    imgPath:"3.png",
                    view: '4.81M'
                },
                {
                    name: 'Gringo Lee',
                    imgPath:"4.png",
                    view: '4.143M'
                },
                {
                    name: 'John Doe',
                    imgPath:"4.png",
                    view: '3.83M'
                },
            ],
            layouts: [
                "masonry",
                "fitRows",
                ],
            list: [
                {
                    imgPath: '1.jpg',
                    category: "Photos",
                },
                {
                    imgPath: '2.jpg',
                    category: "Photos",
                },
                {
                    imgPath: '3.jpg',
                    category: "Video",
                },
                {
                    imgPath: '4.jpg',
                    category: "Freebies",
                },
                {
                    imgPath: '5.jpg',
                    category: "360",
                },
                {
                    imgPath: '6.jpg',
                    category: "Freebies",
                },
                {
                    imgPath: '7.jpg',
                    category: "360",
                },
                {
                    imgPath: '8.jpg',
                    category: "Photos",
                },
                {
                    imgPath: '9.jpg',
                    category: "Photos",
                },
                {
                    imgPath: '10.jpg',
                    category: "Videos",
                },
                {
                    imgPath: '11.jpg',
                    category: "Photos",
                },
                {
                    imgPath: '13.jpg',
                    category: "Videos",
                },
                {
                    imgPath: '14.jpg',
                    category: "Photos",
                },
                {
                    imgPath: '15.jpg',
                    category: "Photos",
                },
                
            ],
            currentLayout: 'masonry',
            selected: null,
            sortOption: "original-order",
            filterOption: "show all",
            option: {
                itemSelector: ".element-item",
                getFilterData: {
                    "show all": function() {
                    return true;
                    },
                    Photos: function(el) {
                    //return !!el.photos;
                        return el.category === "Photos";
                    },
                    Videos: function(el) {
                    return el.category === "Videos";
                    },
                    "Freebies": function(el) {
                        return el.category === "Freebies" || el.category === "transition";
                    },
                    "three-sixty": function(el) {
                    return el.category === "360"
                    },
                },
                getSortData: {
                    name: "name",
                    symbol: "symbol",
                    number: "number",
                    weight: "weight",
                    category: "category"
                }
            }
        }
    },
    methods: {
        sort: function(key) {
            this.$refs.cpt.sort(key);
        },
        filter: function(key) {
            this.$refs.cpt.filter(key);
        },
        changeLayout: function(key) {
            this.$refs.cpt.layout(key);
        },
        layout () {
            this.$refs.cpt.layout('masonry');
        } ,
        imageProgress(instance, image ) {
            setTimeout(function(){
                const result = image.isLoaded ? 'loaded' : 'broken';
                console.log( 'image is ' + result + ' for ' + image.img.src );

             }, 5000);
        },

    }
}
</script>