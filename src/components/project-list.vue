<template>
    <!-- filters and sort controls -->
    <div class="container-fluid nav-bar">
        <div class="row">
            <div class="col-6">
                <h3><i>Filter by tags:</i></h3>
            </div>
            <div class="col-6">
                <h3><i>Search projects:</i></h3>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="tags" v-for="tag of tags"
                    :key="tag.name"
                    :class="{'selected-tag': tag.selected}"
                    @click="tag.selected = !tag.selected">
                    <p>{{tag.name}}</p>
                </div>
            </div>
            <div class="col-6">
            <div class="search-contain">
                <input class="search" type="text" placeholder="" v-model="search" />
            </div>
            </div>
        </div>
    </div>

    <div class="no-match" v-if="projectsList.length === 0">
        No projects matched the current search filters.
    </div>

    <div class="list" v-for="(project, id) of projectsList" :key="project.name">
        <router-link class="name" :to="'/projects/' + id"
            @mouseenter="currentProject = project"
            @mouseleave="currentProject = currentProject.name === project.name ? null : currentProject">
            <p>{{project.name}}</p>
        </router-link>
        <router-link class="title" :to="'/projects/' + id"
            @mouseenter="currentProject = project"
            @mouseleave="currentProject = currentProject.title === project.title ? null : currentProject">
            <p>{{project.title}}</p>
        </router-link>
    </div>

    <div class="pop-up" v-if="currentProject !== null" >
        <h1>{{currentProject.title}}</h1>
        <p>{{currentProject.abstract}}</p>
    </div>
    <div class="curve">
        <img src="/images/PROJECT.svg">
    </div>

<bg/>
</template>

<script>
  import projectsJson from '../projects.json';
  import bg from './bg.vue';
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'ProjectList',

    components: {
      bg
    },

    data() {
      return {
        projects: [],
        tags: [],
        search: '',
        currentProject: null
      };
    },

    created() {
      // generate list of tags from projects
      const tagNames = new Set();
      for (let project of projectsJson) {
        for (let tag of project.tags) {
          tagNames.add(tag);
        }
      }
      this.tags = [...tagNames].map(name => ({name: name, selected: false}));
    },

    computed: {

      // search feature: perform a simple OR of all search queries, which are
      // comma-separated
      searchQueries() {
        return this.search
          .toLowerCase()
          .trim()
          .split(',')
          .map(query => query.trim());
      },

      // dynamically compute projects list based on filters
      projectsList() {
        // get currently selected tags that we are filtering by
        const filterTags = this.tags
          .filter(tag => tag.selected)
          .map(tag => tag.name);

        return projectsJson.filter(project => {
          const projectTags = new Set(project.tags);

          // make sure this project contains all search tags, if any selected
          if (filterTags.length) {
            for (let tag of filterTags) {
              if (!projectTags.has(tag)) {
                return false;
              }
            }
          }

          // make sure this project has something from the search criterion
          // perform (very simple) case-insensitive search over authors and
          // description
          const searchString = (project.name + project.title + project.authors + project.desc)
              .toLowerCase();
          if (this.searchQueries.length) {
            for (let query of this.searchQueries) {
              if (searchString.indexOf(query) === -1) {
                return false;
              }
            }
          }

          return true;
        });
      }
    }
  })
</script>

<style scoped>

*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.nav-bar{
    padding: 70px 0px 30px 40px;
    color: #c14e0e;
    font-size: 20px;
}

.nav-bar h3{
    font-size: 14px;
    font-family: 'Libre Baskerville', serif;
    font-weight: normal;
    padding-bottom: 20px;
}

.tags{
    display: inline-block;
}

.tags p{
    color: #c14e0e;
    font-size: 14px;
    padding: 6px;
    margin: 0px 10px 20px 0px;
    border: 1px solid #c14e0e;
    border-radius: 5px;
    font-family: 'Libre Baskerville', serif;
    cursor: pointer;
}

.selected-tag p{
    color: #eaded6;
    background-color: #c14e0e;
}

.search{
    display: relative;
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    border: 1px solid #c14e0e;
    border-radius: 5px;
    padding: 6px;
    outline: 0px;
    background-color: #eaded6;
    color: #c14e0e;
}

.list{
    width: 50vw;
    padding: 30px 0px 0px 40px;
}

.list a{
    font-family: 'DM Serif Text', serif;
    font-weight: normal;
    text-decoration: none;
    color: #c14e0e;
    font-size: 20px;
    display: inline;
}

.name p{
    display: inline;
}

.title p{
    font-style: italic;
    display: inline;
}

.pop-up{
    bottom: 0;
    right: 0;
    position: fixed;
    width: 40vw;
    margin: 0px 40px 40px 0px;
    color: #c14e0e;
    background-color: #eaded6;
    border: 2px solid #c14e0e;
}

.pop-up h1{
    font-size: 20px;
    font-weight: normal;
    font-family: 'DM Serif Text', serif;
    padding: 20px 20px 0px 20px;
}

.pop-up p{
    padding: 20px;
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
}

.no-match{
    font-family: 'DM Serif Text', serif;
    color: #c14e0e;
    padding: 20px 0px 0px 40px;
    font-size: 32px;
}

.curve img{
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100vh;
    z-index: -1;
}

</style>
