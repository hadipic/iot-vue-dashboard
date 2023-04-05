<script>
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            isSideNavActive: true
        }
    },
    methods: {
        toggleSideBar() {
            this.isSideNavActive = !this.isSideNavActive;
        },
        getCurrentRoute(route) {
            console.log(this.$route.path)
            return ((this.$route.path === route) ? 'active' : '');
        }
    }
}
</script>

<template>
    <div class="header">
        <button id="expand-btn" @click="toggleSideBar()">
            <svg width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g id="Menu" transform="matrix(1.10061,0,0,1.16828,-25.1524,-42.0712)">
                    <path
                        d="M414,375.003C414,370.68 410.49,367.171 406.168,367.171L93.832,367.171C89.51,367.171 86,370.68 86,375.003L86,390.668C86,394.99 89.51,398.5 93.832,398.5L406.168,398.5C410.49,398.5 414,394.99 414,390.668L414,375.003ZM414,242.168C414,237.845 410.49,234.335 406.168,234.335L93.832,234.335C89.51,234.335 86,237.845 86,242.168L86,257.832C86,262.155 89.51,265.665 93.832,265.665L406.168,265.665C410.49,265.665 414,262.155 414,257.832L414,242.168ZM414,109.332C414,105.01 410.49,101.5 406.168,101.5L93.832,101.5C89.51,101.5 86,105.01 86,109.332L86,124.997C86,129.32 89.51,132.829 93.832,132.829L406.168,132.829C410.49,132.829 414,129.32 414,124.997L414,109.332Z"
                        style="fill:#F57F17" />
                </g>
            </svg>
        </button>
        <a href="#default" class="logo">تست</a>
        <div class="header-right">

            <a class="active" href="#home">خانه</a>
            <a href="#about">درباره ما</a>
        </div>
    </div>
    <div :class="['sidenav', isSideNavActive ? '' : 'sidenav-hidden']">
        <router-link to="/relay" :class="getCurrentRoute('/relay')"><img class="icon" src="../assets/light.svg"
                alt="light SVG" /> مصرف کننده
            ها</router-link>
        <a href="#"><img class="icon" src="../assets/thermometer.svg" alt="thermometer SVG" />ترموستات</a>
        <a href="#"><img class="icon" src="../assets/profile.svg" alt="profile SVG" />پروفایل</a>
        <a href="#"><img class="icon-settings" src="../assets/cog.svg" alt="settings SVG" />تنظیمات</a>
    </div>
    <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
</template>
  

  
<style>
/* Style the header with a grey background and some padding */
.header {
    overflow: hidden;
    background-color: #428bca;
    padding: 20px 10px;
    height: 100px;
    display: flex;
    align-items: center;
    top: fixed;
}

/* Style the header links */
.header a {
    float: right;
    color: white;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
    margin: 5px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header a.logo {
    font-size: 28px;
}

/* Change the background color on mouse-over */
.header a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

/* Style the active/current link*/
.header a.active {
    background-color: #A393BF;
    color: white;
}

/* Float the link section to the right */
.header-right {
    float: right;
}

/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
@media screen and (max-width: 500px) {
    .header a {
        float: none;
        display: block;
        text-align: left;
    }

    .header-right {
        float: none;
    }
}

#expand-btn {
    border: 0;
    border-radius: 15px;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 60px;
    border: 2px dotted transparent;
    transition: all 320ms;
}

#expand-btn:hover {
    border: 2px dotted #ABD2FA;
}

.sidenav {
    height: 100%;
    /* 100% Full-height */
    width: 200px;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Stay on top */
    right: 0;
    background-color: #F57F17;
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 20px;
    /* Place content 60px from the top */
    transition: 0.5s;
    /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block;
    transition: 0.3s;
    position: relative;
}

.sidenav a:hover {
    background-color: rgba(171, 210, 250, 0.4);
}

.sidenav a.active {
    background-color: #00539C;
    color: white;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.sidenav-hidden {
    transform: translateX(200px);
    opacity: 0;
    visibility: hidden;
}

.icon {
    height: 30px;
    width: 30px;
    vertical-align: middle;
    margin-left: 10px;

}

.extend-icon {
    vertical-align: middle;
    height: 25px;
    width: 25px;
}

.icon-settings {
    vertical-align: middle;
    margin-left: 10px;
    height: 25px;
    width: 25px;
}
</style>