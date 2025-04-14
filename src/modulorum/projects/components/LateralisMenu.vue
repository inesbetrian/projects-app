<template>

    <aside class="bg-base-200 w-72 min-h-screen">

        <h2 class="text-lg font-bold mx-4">Proyectos</h2>
        <p 
            v-if="projectStore.nonProject" 
            class="text-sm font-bold mx-4">No hay proyectos
        </p>

        <ul v-else class="menu">

            <li v-for="project in projectStore.projectList" :key="project.id">

                <template v-if="project.chores.length > 0">
                    <details>
                        <summary>
                            <RouterLink :to="`/projects/${ project.id }`">{{ project.nomen }}</RouterLink>
                        </summary>
                        <ul>
                            <li v-for="chore in project.chores" :key="chore.id">
                                <RouterLink :to="`/projects/${project.id }`">{{ chore.nomen }}</RouterLink>
                            </li>            
                        </ul>
                    </details>
                </template>

                <template v-else>
                    <RouterLink :to="`/projects/${ project.id }`">{{ project.nomen }}</RouterLink>
                </template>
                

            </li>
        </ul>

    </aside>   

</template>

<script lang="ts" setup>
import { useProjectsStore } from '../stores/projects.store';


    const projectStore = useProjectsStore()

</script>