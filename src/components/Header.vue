<template>
    <div id="header">
        
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    <img src="../assets/images/logo.svg" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Example <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Discover</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">For Professionals</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" 
                                href="#" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false"
                                @click="showDropdown=!showDropdown;hideDropdown"
                                >
                                <img src="../assets/images/dropdown-logo.svg" alt="">
                            </a>
                            <div class="dropdown-menu" :class= "{show: showDropdown}" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">About Click Motto</a>
                                <a class="dropdown-item" href="#">Pricing</a>
                                <a class="dropdown-item" href="#">License</a>
                                <a class="dropdown-item" href="#">Partnerships</a>
                                <a class="dropdown-item" href="#">Blog</a>
                                <a class="dropdown-item" href="#">Help</a>
                                <a class="dropdown-item" href="#">Join The Team</a>
                                <div class="dropdown-divider"></div>
                                <div class="menu-social-media">
                                    <ul>
                                        <li>
                                            <a href=""> <img src="../assets/images/facebook.svg" alt=""> </a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="../assets/images/twitter.svg" alt=""> </a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="../assets/images/instagram.svg" alt=""> </a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="../assets/images/pin.svg" alt=""> </a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="../assets/images/vimeo.svg" alt=""> </a>
                                        </li>
                                        <li>
                                            <a href=""> <img src="../assets/images/medium.svg" alt=""> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                        <li class="">
                            <a href="#" class="btn btn-outline-secondary btn-sm btn-submit">
                                Submit Photos
                            </a>
                        </li>

                    </ul>
                    <ul class="navbar-nav login-menu">
                        <li>
                            <a href="">Login</a>
                        </li>
                        <li>
                            <a href="" class="btn btn-sm btn-register">Join Free</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showDropdown: false
        }
    },

}
</script>