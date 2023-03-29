<template>
    <div id="statusView" style=""></div>
    <div class="block">
        <div class="zone-title" style="text-align:right">
            <p>کنترل مصرف کننده ها</p>
        </div>
        <hr />
        <div id="divButtons"> </div>

        <button type="button" onclick="parent.location='/'">بازگشت</button>
    </div>

    <br />
    <br />
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        
    }
}
</script>
<style>
header {
    padding: .01mm 0mm 2mm 0mm;
    background-color: #F57F17;
    color: white;
    height: 13mm;
    text-align: center;
    vertical-align: middle;
    font-size: 22px;
}


button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button
}

button {
    overflow: visible;
    text-transform: none
}

button,
[type="button"],
[type="submit"],
[type="reset"],
a.button,
label.button,
.button,
a[role="button"],
label[role="button"],
[role="button"] {
    display: inline-block;
    background: rgba(220, 220, 220, 0.75);
    color: #212121;
    border: 0;
    border-radius: .125rem;
    padding: 0.5rem 0.75rem;
    margin: .5rem;
    text-decoration: none;
    transition: background 0.3s;
    cursor: pointer
}

button:hover,
button:focus,
[type="button"]:hover,
[type="button"]:focus,
[type="submit"]:hover,
[type="submit"]:focus,
[type="reset"]:hover,
[type="reset"]:focus,
a.button:hover,
a.button:focus,
label.button:hover,
label.button:focus,
.button:hover,
.button:focus,
a[role="button"]:hover,
a[role="button"]:focus,
label[role="button"]:hover,
label[role="button"]:focus,
[role="button"]:hover,
[role="button"]:focus {
    background: #dcdcdc;
    opacity: 1
}
</style>