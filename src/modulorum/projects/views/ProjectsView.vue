<template>

    <div class="overflow-x-auto w-full">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th></th>
                    <th>Proyectos</th>
                    <th>Tareas</th>
                    <th>Avance</th>
                </tr>
            </thead>

            <tbody>
            
                <!-- row 2 -->
                <tr class="hover:bg-base-300">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
            
            </tbody>
        </table>
        
    </div>

    <FabButton  />

</template>

<script lang="ts" setup>

import FabButton from '@/modulorum/commune/components/FabButton.vue';

</script>