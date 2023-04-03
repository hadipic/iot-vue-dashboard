<template>
    <div class="wrapper">
        <div id="statusView" style=""></div>
        <div class="block flex">
            <div class="zone-title">
                <p>کنترل مصرف کننده ها</p>
            </div>
            <hr />
            <div class="relays" v-for="relay in relays">
                <p>{{ relay.name }}
                </p>
                <button :class="relay.state" type="button" @click="toggleRelay(relay.name)">{{
                    relay.state
                }}</button>
            </div>
            <div class="return-btn">
                <button type="button" onclick="parent.location='/'">بازگشت</button>
            </div>
        </div>

        <br />
        <br />
    </div>
</template> 
<script>
import axios from 'axios';
export default {

    data() {
        return {
            relays: [{ name: 'Foo', state: 'On' }, { name: 'Bar', state: 'Off' }]
        }
    },
    methods: {
        toggleRelay: function (relayName) {
            for (let relay in this.relays) {
                if (this.relays[relay].name === relayName)
                    if (this.relays[relay].state === 'On') {
                        this.relays[relay].state = 'Off';
                    }
                    else {
                        this.relays[relay].state = 'On'
                    }
            }
        },
        getRelay: function () {

        }
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

.wrapper {
    align-items: center;
    margin-right: auto;
    /* 1 */
    margin-left: auto;
    /* 1 */

    max-width: 960px;
    /* 2 */

    padding-right: 10px;
    /* 3 */
    padding-left: 10px;
    /* 3 */
}

button {
    border-radius: 10px !important
}

.zone-title p {
    flex: 1;
    font-size: 20px;
    line-height: 75px;
    text-align: right;
}

.relays {
    line-height: 75px;
    display: flex;
}

.relays p {
    font-size: 18px;
    flex: 1;
}

.relays button.On {
    background-color: rgb(81, 221, 81);
}

.relays button {
    flex: 0.25;
    background-color: rgb(172, 172, 172);
}

.return-btn {
    display: flex;
    align-content: center;
}

.return-btn button {
    flex: 1;
    margin-left: 400px;
    margin-right: 400px;
}
</style>