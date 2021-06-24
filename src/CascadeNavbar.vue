<template>
  <div class="cascade-navbar">
    <div ref="navbar" class="cascade-navbar-top" :style="style.navbar">
      <slot name="navbar"></slot>
    </div>
    <div :style="{ marginTop: style.navbar.height }"></div>
    <div class="cascade-navbar-middle" :style="{ height: middleHeight + 'px' }">
      <slot name="middle"></slot>
    </div>
    <div ref="banner" class="cascade-navbar-banner" :style="style.banner">
      <slot name="banner"></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed, reactive } from "vue";
import { useWindowScroll } from "@vueuse/core";

export default {
  name: "CascadeNavbar",
  props: {
    bannerHeight: {
      type: Number,
      default: 25,
    },
    navbarHeight: {
      type: Number,
      default: 50,
    },
    middleHeight: {
      type: Number,
      default: 250,
    },
    bannerScrollAmount: {
      type: Number,
      default: 200,
    },
  },
  setup(props, context) {
    const middleHeight = props.middleHeight;
    const banner = ref(null);
    const navbar = ref(null);
    const bannerBottom = ref(0);
    const { y: windowY } = useWindowScroll();
    // there is three state
    const state = {
      start: {
        navbar: {
          display: "block",
          position: "fixed",
          top: 0,
        },
        banner: {
          display: "block",
          position: "static",
        },
      },
      middle: {
        navbar: {
          display: "block",
          position: "fixed",
          top: 0,
        },
        banner: {
          display: "block",
          position: "fixed",
          top: `${props.navbarHeight}px`,
        },
      },
      end: {
        navbar: {
          display: "block",
          position: "fixed",
          top: `-${props.navbarHeight}px`,
        },
        banner: {
          display: "block",
          position: "fixed",
          top: 0,
        },
      },
    };
    // add base style
    Object.keys(state).forEach((key) => {
      state[key].navbar.height = props.navbarHeight + "px";
      state[key].banner.height = props.bannerHeight + "px";
    });
    let style = ref(state.start);
    watch(windowY, (newVal) => {
      if (
        windowY.value >
        props.bannerHeight + middleHeight + props.bannerScrollAmount
      ) {
        style.value = state.end;
        return;
      }
      if (windowY.value > props.bannerHeight + middleHeight) {
        style.value = state.middle;
        return;
      }
      if (windowY.value <= props.bannerHeight + middleHeight) {
        style.value = state.start;
        return;
      }
    });
    return { style, banner, middleHeight };
  },
};
</script>

<style scoped>
.cascade-navbar {
  display: block;
  box-sizing: border-box;
}
.cascade-navbar-top {
  width: 100%;
  transition: 0.3s top;
  z-index: 10;
}
.cascade-navbar-banner {
  width: 100%;
  transition: 0.2s top;
  z-index: 9;
}
.cascade-navbar-middle {
  width: 100%;
}
</style>
