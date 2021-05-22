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
                                <span class="tag badge d-inline-block mr-1"
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


        <div class="d-none d-md-block">
            <!-- abstract preview -->
<!--            <div class="pop-up" v-if="currentProject !== null" >-->
<!--                <h1>{{currentProject.title}}</h1>-->
<!--                <p>{{currentProject.abstract}}</p>-->
<!--            </div>-->

            <div class="curve">
                <img src="/images/PROJECT.svg">
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

/**{*/
/*    padding: 0px;*/
/*    margin: 0px;*/
/*    box-sizing: border-box;*/
/*}*/

/*.nav-bar{*/
/*    padding: 70px 0px 30px 40px;*/
/*    color: #c14e0e;*/
/*    font-size: 20px;*/
/*}*/

/*.nav-bar h3{*/
/*    font-size: 14px;*/
/*    font-family: 'Libre Baskerville', serif;*/
/*    font-weight: normal;*/
/*    padding-bottom: 20px;*/
/*}*/

/*.tags{*/
/*    display: inline-block;*/
/*}*/

/*.tags p{*/
/*    color: #c14e0e;*/
/*    font-size: 14px;*/
/*    padding: 6px;*/
/*    margin: 0px 10px 20px 0px;*/
/*    border: 1px solid #c14e0e;*/
/*    border-radius: 5px;*/
/*    font-family: 'Libre Baskerville', serif;*/
/*    cursor: pointer;*/
/*}*/

/*.selected-tag p{*/
/*    color: #eaded6;*/
/*    background-color: #c14e0e;*/
/*}*/

/*.search{*/
/*    display: relative;*/
/*    font-family: 'Libre Baskerville', serif;*/
/*    font-size: 14px;*/
/*    border: 1px solid #c14e0e;*/
/*    border-radius: 5px;*/
/*    padding: 6px;*/
/*    outline: 0px;*/
/*    background-color: #eaded6;*/
/*    color: #c14e0e;*/
/*}*/

/*.list{*/
/*    width: 50vw;*/
/*    padding: 30px 0px 0px 40px;*/
/*}*/

/*.list a{*/
/*    font-family: 'DM Serif Text', serif;*/
/*    font-weight: normal;*/
/*    text-decoration: none;*/
/*    color: #c14e0e;*/
/*    font-size: 20px;*/
/*    display: inline;*/
/*}*/

/*.pop-up{*/
/*    bottom: 0;*/
/*    right: 0;*/
/*    position: fixed;*/
/*    width: 40vw;*/
/*    margin: 0px 40px 40px 0px;*/
/*    color: #c14e0e;*/
/*    background-color: #eaded6;*/
/*    border: 2px solid #c14e0e;*/
/*}*/

/*.pop-up h1{*/
/*    font-size: 20px;*/
/*    font-weight: normal;*/
/*    font-family: 'DM Serif Text', serif;*/
/*    padding: 20px 20px 0px 20px;*/
/*}*/

/*.pop-up p{*/
/*    padding: 20px;*/
/*    font-family: 'Libre Baskerville', serif;*/
/*    font-size: 14px;*/
/*}*/

/*.no-match{*/
/*    font-family: 'DM Serif Text', serif;*/
/*    color: #c14e0e;*/
/*    padding: 20px 0px 0px 40px;*/
/*    font-size: 32px;*/
/*}*/

.curve img{
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100vh;
    z-index: -1;
}

</style>
