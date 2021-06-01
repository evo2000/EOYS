<!-- TODO: allow for search from URL params -->

<template>
    <div class="container">
        <div class="row">

            <!-- controls and filter -->
            <div class="col-12 col-md-6 col-lg-4 order-md-2">
                <div class="card small">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item py-3">
                            <!-- filters and sort controls -->
                            <div class="controls">
                                <p class="mb-0">Filter projects by tags</p>
                                <span class="tag badge d-inline-block me-1"
                                      v-for="tag of tags"
                                      :key="tag.name"
                                      :class="{'selected-tag': tag.selected}"
                                      @click="toggleTag(tag)">
                                    {{tag.name}}
                                </span>

                                <p class="mt-4 mb-0">Search projects</p>
                                <div class="search-contain">
                                    <input class="search form-control"
                                           style="font-size:small !important;"
                                           type="text"
                                           placeholder=""
                                           @keydown.enter="setSearch()"
                                           @blur="setSearch()"
                                           v-model="search" />
                                </div>

                                <!-- show current filters -->
                                <p v-if="currentFilters"
                                   class="form-text text-secondary small mb-0">
                                    current filters: {{currentFilters}}
                                </p>
                            </div>
                        </li>

                        <!-- show abstract (only on large screens) -->
                        <li class="list-group-item pt-3 d-none d-md-block"
                            v-if="currentProject !== null">
                                <h3>{{currentProject.title}}</h3>
                                <p>{{currentProject.desc}}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- project list -->
            <div class="col-12 col-md-6 col-lg-8 pt-3 pt-md-0 order-md-1">
                <ul class="list-group">
                    <ul class="noresult list-group-item"
                        v-if="projectsList.length === 0">
                        <b>No projects match the current search filters.</b>
                    </ul>

                    <router-link v-for="(project, id) of projectsList"
                                 :key="project.title"
                                 class="list-group-item"
                                 :class="{active: currentProject && currentProject.title === project.title}"
                                 @mouseenter="currentProject = project"
                                 @mouseleave="currentProject = currentProject.title === project.title ? null : currentProject"
                                 :to="'/projects/' + id">

                        <b>{{project.title}}</b> &mdash; <em>{{project.authors}}</em>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import projectsJson from '../projects.json';
  import {defineComponent} from 'vue';

  projectsJson.sort((p1, p2) => p1.title.localeCompare(p2.title));

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

      // get query tags and search from url
      const queryTags = new Set((this.$route.query.tags || "").split(","));
      const querySearch = this.$route.query.q || "";

      this.tags = [...tagNames].map(name => ({
        name: name,
        selected: queryTags.has(name)
      }));

      this.search = querySearch;
    },

    methods: {
      // called on blur to avoid polluting the history
      setSearch() {
        this.$router.push({
          path: "/projects",
          query: this.queryParams
        });
      },

      // is called on every tag change
      toggleTag(tag) {
        tag.selected = !tag.selected;

        this.$router.push({
          path: "/projects",
          query: this.queryParams
        });
      }
    },

    computed: {

      // current query params
      queryParams() {
        const query = {};
        if (this.search) {
          query.q = this.search;
        }
        if (this.filterTags) {
          query.tags = this.filterTags;
        }
        return query;
      },

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

    .list-group{
      padding-bottom: 20px;
    }

    .list-group-item.active {
        background-color: #c14e0e;
        border-color: #c14e0e;
        color: white !important;
    }

    .noresult{
      color: inherit;
    }
</style>
