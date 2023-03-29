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
        }
    }
}
</script>

<template>
    <div class="header">
        <button id="expand-btn" @click="toggleSideBar()"><img class="extend-icon" src="../assets/extend.svg"
                alt="extend SVG" /></button>
        <a href="#default" class="logo">تست</a>
        <div class="header-right">

            <a class="active" href="#home">خانه</a>
            <a href="#about">درباره ما</a>
        </div>
    </div>
    <div :class="['sidenav', isSideNavActive ? '' : 'sidenav-hidden']">
        <router-link to="/relay"><img class="icon" src="../assets/light.svg" alt="light SVG" />روشنایی</router-link>
        <a href="#"><img class="icon" src="../assets/thermometer.svg" alt="thermometer SVG" />دما</a>
        <a href="#"><img class="icon" src="../assets/profile.svg" alt="profile SVG" />پروفایل</a>
        <a href="#"><img class="icon-settings" src="../assets/cog.svg" alt="settings SVG" />تنظیمات</a>
    </div>
    <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
</template>
  

  
<style>
/* Style the header with a grey background and some padding */
.header {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
    height: 100px;
    display: flex;
    top: fixed;
}

/* Style the header links */
.header a {
    float: right;
    color: black;
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
    font-size: 25px;
    font-weight: bold;
}

/* Change the background color on mouse-over */
.header a:hover {
    background-color: #ddd;
    color: black;
}

/* Style the active/current link*/
.header a.active {
    background-color: hsla(160, 100%, 37%, 1);
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
    background-color: black(190, 189, 189);
}

.sidenav {
    border-radius: 5px;
    height: 100%;
    /* 100% Full-height */
    width: 200px;
    /* 0 width - change this with JavaScript */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Stay on top */
    right: 0;
    background-color: rgb(192, 240, 210);
    /* Black*/
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 60px;
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

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: #f1f1f1;
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