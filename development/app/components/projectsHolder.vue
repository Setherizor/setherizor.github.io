<template>
  <v-flex md6 sm10 xs12 offset-md3 offset-sm1 offset-xs0>
        <v-card>
            <v-toolbar>
                <v-toolbar-title>Projects</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn to="/" icon>
                    <v-icon>reply</v-icon>
                </v-btn>
            </v-toolbar>
            <v-container fluid style="min-height: 0;" grid-list-lg>
                <projectList></projectList>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import projectList from "./projectList.vue";
export default {
  name: "projectsHolder",
  components: { projectList }
};
</script>
