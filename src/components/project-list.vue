<!-- TODO: allow for search from URL params -->

<template>
    <div class="container">
        <div class="row">

            <!-- controls and filter -->
            <div class="col-12 col-md-6 col-lg-4 order-md-2">
                <div class="card">
                    <div class="card-body">
                            <!-- filters and sort controls -->
                            <div class="controls">
                                <p class="mb-0">Filter by tags</p>
                                <span class="tag badge d-inline-block me-1"
                                      v-for="tag of tags"
                                      :key="tag.name"
                                      :class="{'selected-tag': tag.selected}"
                                      @click="tag.selected = !tag.selected">
                                    {{tag.name}}
                                </span>

                                <p class="mt-3 mb-0">Search projects</p>
                                <div class="search-contain">
                                    <input class="search form-control"
                                           type="text"
                                           placeholder=""
                                           v-model="search" />
                                </div>

                                <!-- show current filters -->
                                <small v-if="currentFilters" class="form-text text-secondary">
                                    current filters: {{currentFilters}}
                                </small>
                            </div>
                    </div>
                </div>

                <!-- project abstract (only on large screens) -->
                <div class="d-none d-md-block mt-4">
                    <div v-if="currentProject === null">
                        <p>Hover over a project to preview its abstract.</p>
                    </div>

                    <div class="card" v-if="currentProject !== null">
                        <div class="card-body">
                            <h3>{{currentProject.title}}</h3>
                            <p>{{currentProject.abstract}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- project list -->
            <div class="col-12 col-md-6 col-lg-8 pt-3 pt-md-0 order-md-1">
                <ul class="list-group">
                    <ul class="list-group-item"
                        v-if="projectsList.length === 0">
                        No projects matched the current search filters.
                    </ul>

                    <router-link v-for="(project, id) of projectsList"
                                 :key="project.title"
                                 class="list-group-item"
                                 :class="{active: currentProject && currentProject.title === project.title}"
                                 @mouseenter="currentProject = project"
                                 @mouseleave="currentProject = currentProject.title === project.title ? null : currentProject"
                                 :to="'/projects/' + id">

                        {{project.authors}} &mdash; <em>{{project.title}}</em>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import projectsJson from '../projects.json';
  import {defineComponent} from 'vue';

  export default defineComponent({
    name: 'ProjectList',

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

      // current tags
      filterTags() {
        return this.tags.filter(tag => tag.selected).map(tag => tag.name);
      },

      // current filters
      currentFilters() {
        return [
          ...this.filterTags.map(tag => `tag:${tag}`),
          ...this.searchQueries.map(query => `"${query}"`)
        ].join(' and ');
      },

      // search feature: perform a simple OR of all search queries, which are
      // comma-separated
      searchQueries() {
        return this.search
          .toLowerCase()
          .trim()
          .split(',')
          .map(query => query.trim())
          .filter(query => query.length);
      },

      // dynamically compute projects list based on filters
      projectsList() {
        return projectsJson.filter(project => {
          const projectTags = new Set(project.tags);

          // make sure this project contains all search tags, if any selected
          if (this.filterTags.length) {
            for (let tag of this.filterTags) {
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
    .tag {
        color: inherit;
        border: 1px solid #c14e0e;
        background-color: transparent;
        cursor: pointer;
    }

    .tag.selected-tag {
        color: white !important;
        background-color: #c14e0e;
    }

    /* override white background in bootstrap UI items */
    .card * {
        color: inherit !important;
    }

    .list-group-item.active {
        background-color: #c14e0e;
        border-color: #c14e0e;
        color: white !important;
    }
</style>
