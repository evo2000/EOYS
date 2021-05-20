<template>
    <link href="../bootstrap-grid.css" rel="stylesheet">
    <website-header/>

    <!-- filters and sort controls -->
    <div>
        <div>
            Filter by tags:
            <div v-for="tag of tags"
                 :key="tag.name"
                 :class="{'selected-tag': tag.selected}"
                 @click="tag.selected = !tag.selected">
                {{tag.name}}
            </div>
        </div>
        <div>
            Search projects:
            <input type="text" placeholder="" v-model="search" />
        </div>
    </div>

    <div v-if="projectsList.length === 0">
        No projects matched the current search filters.
    </div>

    <div v-for="(project, id) of projectsList" :key="project.name">
        <router-link :to="'/projects/' + id"
            @mouseenter="currentProject = project"
            @mouseleave="currentProject = currentProject.name === project.name ? null : currentProject">
            {{project.name}}
        </router-link>
    </div>

    <div v-if="currentProject !== null" style="border:1px solid black;">
        <h1>{{currentProject.name}}</h1>
        <p>{{currentProject.desc}}</p>
    </div>
</template>

<script>
  import projectsJson from '../projects.json';
  import WebsiteHeader from './website-header.vue';
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'ProjectList',

    components: {
      WebsiteHeader
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
          const searchString = (project.name + project.authors + project.desc)
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
    .selected-tag {
        background-color: lightslategray;
    }
</style>
