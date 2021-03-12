<template>
  <div>
    <header :class="[$stile.header]">
      <nav>
        <a :class="[$style.link]" href="./index.html">Каталог</a>
        <a :class="[$style.link]" href="./form.html">Обращение</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.header {
  min-width: 1300px;
  border-bottom: 1px solid #b5b7ba;
  background-color: #dfdfdf;
  height: 50px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.link {
  color: #4d4d4d;
  font-size: 24px;
  font-weight: 100;
  text-decoration: none;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.link:hover {
  color: #ffffff;
}
</style>
