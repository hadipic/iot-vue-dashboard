<template>
    <div class="wrapper">
            <div class="zone-title">
                <p>کنترل مصرف کننده ها</p>
            </div>
            <div class="relays-container">
                <div class="relays" v-for="relay in relays">
                    <p>{{ relay.name }}
                    </p>
                    <label class="switch">
                        <input :checked="relay.state === 'On'" type="checkbox" @click="toggleRelay(relay.id)">
                        <span class="slider round"></span>
                        <span class="switch-title" :class="relay.state">{{ relay.state }}</span>
                    </label>
                    <!-- <button :class="relay.state" type="button" @click="toggleRelay(relay.id)">{{
                    relay.state
                }}</button> -->
                </div>
            </div>
            <div class="return-btn">
                <button type="button" onclick="parent.location='/'">بازگشت</button>
            </div>
    </div>
</template> 
<script>
import axios from 'axios';
export default {

    data() {
        return {
            relays: [{ id: 'relay1', state: '', name: '' }, { id: 'relay2', state: '', name: '' }],
            interval: null
        }
    },
    methods: {
        toggleRelay: function (relayId) {
            for (let relay in this.relays) {
                if (this.relays[relay].id === relayId)
                    if (this.relays[relay].state === 'On') {
                        this.relays[relay].state = 'Off';
                        axios.get(`http://0.0.0.0:5731/api/relay?${relayId}=0`)
                            .then(function (response) {
                                // handle success
                                console.log(response);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                    }
                    else {
                        this.relays[relay].state = 'On'
                        axios.get(`http://0.0.0.0:5731/api/relay?${relayId}=1`)
                            .then(function (response) {
                                // handle success
                                console.log(response);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                    }
            }
            this.$forceUpdate()
        },
        getRelay: function () {
            let self = this;
            axios.get('http://0.0.0.0:5731/api/relay')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    let relays = response.data;
                    self.relays[0].name = relays.relay1name;
                    if (relays.relay1 == 1)
                        self.relays[0].state = 'On';
                    else if (relays.relay1 == 0)
                        self.relays[0].state = 'Off';

                    self.relays[1].name = relays.relay2name;
                    if (relays.relay2 == 1)
                        self.relays[1].state = 'On';
                    else if (relays.relay2 == 0)
                        self.relays[1].state = 'Off';

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    beforeMount: function () {
        this.getRelay()
    },
    beforeUpdate: function () {
        this.getRelay()
    },
    created() {
        this.interval = setInterval(() => {
            this.getRelay()
        }, 3000)
    },
    destroyed() {
        clearInterval(this.interval)
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




.wrapper {
    align-items: center;
    margin-right: auto;
    /* 1 */
    margin-left: auto;
    /* 1 */
    margin-top: 100px;
    max-width: 70%;
    /* 2 */
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 0 10px #00539C;
    height: max-content;
}

button {
    border-radius: 10px !important
}

.zone-title {
    border-bottom: 2px solid #00539C;
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
    justify-content: center;
    align-items: center;
}

.relays p {
    font-size: 18px;
    flex: 1;
}

.relays button {
    flex: 0.25;
    background-color: rgb(172, 172, 172);
}

.return-btn {
    display: flex;
    justify-content: flex-end;
    align-content: center;
}

.return-btn button {
    outline: none;
    border: none;
    padding: 15px;
    margin-left: 0;
    transition: all 320ms;
    font-size: 16px;
    background-color: #ABD2FA;
}

.return-btn button:hover {
    background-color: #ABD2FAAA;
}

.switch {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 34px;
    z-index: 2;
    cursor: pointer;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(171, 210, 250, 0.7);
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #F57F17;
}

input:focus+.slider {
    box-shadow: 0 0 1px #ffffff;
}

input:checked+.slider:before {
    -webkit-transform: translateX(44px);
    -ms-transform: translateX(44px);
    transform: translateX(44px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.switch-title {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 15px;
    z-index: 1;
}

.switch-title.On {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    z-index: 1;
}

.relays-container {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    overflow-y: auto;
}
</style>