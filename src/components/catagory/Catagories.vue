<template>
    <div class="col-md-12">
        <div class="catagories">
            <h6>Top categories</h6>
            <div class="catagories-gallery">
                <carousel 
                    :perPageCustom="[[480, 2], [768, 5]]" 
                    :navigationEnabled="true" 
                    :navigationPrevLabel="prev"
                    :navigationNextLabel="next"
                    :paginationEnabled="false">
                    <slide v-for="catagory in catagories" :key="catagory.index">
                        <img :src="require( `../../assets/images/catagories/${catagory.imgPath}`)" :alt="catagory.name" />
                        <div class="div-slider-text">
                            <h6> {{catagory.name}} </h6>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            prev: `<i class="fa fa-long-arrow-left" aria-hidden="true"></i>`,
            next: `<i class="fa fa-long-arrow-right" aria-hidden="true"></i>`,
            catagories: [
                {
                    name:'Workspace',
                    imgPath: '1.png'
                },
                {
                    name:'Summer',
                     imgPath: '2.png'
                },
                {
                    name:'City',
                   imgPath: '3.png'
                },
                {
                    name:'Food',
                    imgPath: '4.png'
                },
                {
                    name:'Gravity',
                   imgPath: '5.png'
                },
                {
                    name:'Workspace',
                   imgPath: '1.png'
                }
            ]
        }
    }
}
</script>