<script setup lang="ts">
import { ref } from "vue";

interface Site {
  name: string;
  path: string;
}

const sites = ref<Site[]>(
  [
    { "name": "学院新闻", "path": "/news" },
    { "name": "学院通知", "path": "/news" },
    { "name": "学生组织", "path": "/news" },
    { "name": "学校通知", "path": "/news" },
    { "name": "入学指南", "path": "/news" },
    { "name": "校园生活", "path": "/news" },
    { "name": "培养方案", "path": "/news" },
  ]
)

for (let i = 0; i < 0; i++) {
  sites.value.push({ "name": `测试Tag${ i }`, "path": "/news" });
}

</script>

<template>
  <div id="home">
    <div id="home-hero">
      <div id="home-hero-left">
        <div id="home-hero-title-1">机器人学院 <span class="HYTMR">学生手册</span></div>
        <div id="home-hero-title-2">一站式的学生信息获取站点</div>
        <div id="home-hero-title-3">Powered by <a href="/about"
                                                  class="underline HYTMR">桃子湖工作站</a></div>
        <div id="home-hero-btn">
          <div id="home-hero-btn-docs" class="home-hero-btn">
            <a href="/docs">文档</a>
          </div>
          <div id="home-hero-btn-about" class="home-hero-btn">
            <a href="/about">关于</a>
          </div>
        </div>
      </div>
      <div id="home-hero-right">
        <img src="/logo.png" alt="">
      </div>
    </div>

    <div id="home-site">
      <div id="home-site-containor">
        <div class="home-site-item" v-for="site in sites">
          <a :href="site.path">{{ site.name }}</a>
        </div>
      </div>
    </div>

    <div id="home-news">

    </div>
  </div>
</template>

<style scoped>
#home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#home-hero {
  width: 100%;
  padding: 0 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
}

#home-hero-title-1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
  color: var(--primary);
}

#home-hero-title-1 span {
  font-size: 4rem;
  font-weight: 700;
  color: var(--primary-light);
}

#home-hero-title-2 {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}

#home-hero-title-3 {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem 0 0 0;
}

#home-hero-title-3 a {
  color: var(--a-color);
}

#home-hero-btn {
  height: 4rem;
  display: flex;
  justify-content: left;
  gap: 2rem;
  align-items: center;
}

.home-hero-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  font-size: 1rem;
}

#home-hero-btn-docs {
  background-color: var(--btn-bgc);
}

#home-hero-btn-docs a {
  color: #ffffff;
}

#home-hero-btn-docs:hover {
  background-color: var(--btn-hover-bgc);
}

#home-hero-btn-about {
  border: 1px solid var(--text-gray);
}

#home-hero-btn-about a {
  color: var(--text-dark);
}

#home-hero-btn-about:hover {
  background-color: var(--btn-bgc);
}

#home-hero-right {
  display: flex;
  align-items: center;
}

#home-hero-right img {
  width: 10rem;
  height: 10rem;
}

#home-site {
  width: 100%;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}

#home-site-containor {
  width: calc(100% - 2rem);
  border-radius: 1.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--text-gray);
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.5rem;
}

.home-site-item {
  height: 1.5rem;
  padding: 0 0.75rem;
  text-align: center;
  line-height: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--text-gray);
}

.home-site-item a {
  color: var(--text-dark);
}

.home-site-item:hover {
  background-color: var(--btn-hover-bgc);
}

.home-site-item:hover a {
  color: var(--text-light);
}

/* 小型设备标题适配 */
@media only screen and (max-width: 768px) {
  #home-hero {
    flex-direction: column-reverse;
    align-items: center;
  }

  #home-hero-title-1 {
    font-size: 2rem;
  }

  #home-hero-title-1 span {
    font-size: 2.5rem;
  }

  #home-hero-title-2 {
    font-size: 1.5rem;
  }

  #home-hero-title-3 {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 394px) {
  #home-hero-left {
    text-align: center;
  }

  #home-hero-title-1 {
    font-size: 1.5rem;
  }

  #home-hero-btn {
    justify-content: center;
  }
}

@media only screen and (max-width: 352px) {
  #home-hero-title-1 {
    font-size: 1rem;
  }

  #home-hero-title-2 {
    font-size: 1rem;
  }
}
</style>
