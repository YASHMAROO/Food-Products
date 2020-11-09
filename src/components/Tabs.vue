<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab,index) in tabs" :key="index">
          <div 
            class="nav-item" 
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabsDetails">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
      selectTab(selectedTab) {
          this.tabs.forEach(tab=> {
              tab.isActive = tab.name === selectedTab.name
          })
      } 
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  border-bottom: thick double black;
  margin: 0 10px;
}

.tab-details {
  padding: 10px;
}

ul {
  display: flex;
  padding: 0;
  list-style: none;
  text-align: center;

  li {
    margin-right: 40px;
    font-size: 25px;
    font-family: 'Syne Mono', monospace;
  }

  .nav-item {
    cursor: pointer;

    &:hover {
      color: red;
    }

    &.is-active {
      color: blue;
    }
  }
}

@media only screen and (max-width: 576px) {
    ul {
        li {
            font-size: 15px;
        }
    }
}
</style>