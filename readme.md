# scroll-cascade-navbar

A cascade navbar which has collapse effects when scrolling. [example](https://scroll-cascade-navbar.vercel.app/)

## Install

```shell
npm install scroll-cascade-navbar
```

## Using

In Vue3

```
import CascadeNavbar from 'scroll-cascade-navbar';

const app = createApp(App);
app.use(CascadeNavbar)
app.mount("#app");
```

In browser

```
<script src="cascade-navbar.min.js"></script>
<script>
  const app = Vue.createApp({});
  app.use(CascadeNavbar.default);
  app.mount("#app");
</script>
```
