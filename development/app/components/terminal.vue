<template>
   <v-flex md6 sm10 xs12 offset-md3 offset-sm1 offset-xs0>
        <div class="terminal">
            <div class="bar">
                <div class="btns"></div>
            </div>
            <div class="tbody"> λ <span class="command">echo $FAVQUOTE</span>
                <div class="comment"> {{favQuote}} </div> λ <span class="command">{{ doDaily }}</span><br> λ <span class="command">{{remember}}</span><br>
                <div class="comment"> File Write Successful </div>
                <div class="prompt">λ <span class="command">What's next...</span> <span class="pulse">_</span></div>
            </div>
        </div>
    </v-flex>
</template>

<script>
export default {
  name: "terminal",
  data() {
    return {
      favQuote:
        '"I have no special talent. I am only passionately curious." - Albert Einstein',
      doDaily: "alias daily= 'sudo me -r * && echo \"You're amazing.\"",
      remember: 'echo "Never Give Up" > consciousness.js'
    };
  }
};
</script>

<style>
.terminal {
  text-align: left;
  margin: 0 auto;
  box-shadow: 0 0.25rem 0.5rem #12181e;
  border-radius: 12px;
}
.bar {
  background: #191919;
  height: 36px;
  border-radius: 12px 12px 0 0;
}
.btns,
.btns::before,
.btns::after {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  display: block;
}
.btns {
  background: #f6b73e;
  position: relative;
  margin-left: 38px;
  top: 12px;
}
.btns::before,
.btns::after {
  content: " ";
  position: absolute;
}
.btns::before {
  background: #f55551;
  margin-left: -20px;
}
.btns::after {
  background: #32c146;
  margin-left: 20px;
}
.tbody {
  width: 100%;
  height: 100% !important;
  background: #232323;
  display: inline-block;
  height: 10rem;
  padding: 18px;
  border-radius: 0 0 12px 12px;
}
.tbody .pulse {
  -webkit-animation: pulse 1s ease-in-out infinite;
  -moz-animation: pulse 1s ease-in-out infinite;
  animation: pulse 1s ease-in-out infinite;
}

@-webkit-keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.command {
  color: #32c146;
}
.comment {
  opacity: 0.7;
}
</style>
