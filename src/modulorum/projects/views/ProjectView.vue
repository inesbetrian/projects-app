<template>
    <BreadCrumbs :nomen="project?.nomen ?? 'No name'" />

</template>

<script setup lang="ts">

import BreadCrumbs from '@/modulorum/commune/components/BreadCrumbs.vue';
import { useProjectsStore } from '../stores/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/projects.interface';




    interface Props {
        id: string;
    }

    const props = defineProps<Props>();

    const projectStore = useProjectsStore();

    const project = ref<Project | null>()

    watch(() => props.id, () => {

        project.value = projectStore.projectList.find( project => project.id === props.id );
    },

    {
        immediate: true
    }
);

</script>
