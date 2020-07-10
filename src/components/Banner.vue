<template>
    <div id="banner-section"
        :style="{ backgroundImage: 'url(' + require('@/assets/images/banner.png') + ')' }">
        <div class="col-md-12">
            <div class="banner-text">
                <h2> {{ bannerText }} </h2>
                <form action="">
                    <div class="input-group">
                        <input type="text" :placeholder="search" class="form-control">
                        <div class="has-icon">
                            <!-- <i class="fa fa-search"></i> -->
                            <img src="../assets/images/search.svg" alt="">
                        </div>
                    </div>
                </form>
                <p><strong>Recommended:</strong> {{recom}} </p>
                <p class="photo_of_the_day">
                    Photo of the Day <span>By</span> <a href="">John Doe</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bannerText: 'Your local source of high quality images and videos directly from their creators',
            search: 'Search photos and videos',
            recom: 'summer, food, covid-19, real estate, love'
        }
    }
}
</script>