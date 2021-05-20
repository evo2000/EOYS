<template>
    <link href="../bootstrap-grid.css" rel="stylesheet">
    <website-header/>

    <!-- filters and sort controls -->
    <div>
        <div>
            Filter by tags:
            <div v-for="tag of tags" :key="tag.name">
                <label :for="'option-' + tag.name">{{tag.name}}</label>
                <input :id="'option-' + tag.name" type="checkbox"
                       v-model="tag.selected" />
            </div>
        </div>
        <div>
            Search projects:
            <input type="text" placeholder="" v-model="search" />
        </div>
    </div>

    <div v-for="(project, id) of projectsList" :key="project.name">
        <router-link :to="'/projects/' + id">
            {{project.name}}
        </router-link>
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
        search: ''
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
            let queryFound = false;
            for (let query of this.searchQueries) {
              if (searchString.indexOf(query) >= 0) {
                queryFound = true;
                break;
              }
            }

            if (!queryFound) {
              return false;
            }
          }

          return true;
        });
      }
    }
  })
</script>

<style scoped></style>
