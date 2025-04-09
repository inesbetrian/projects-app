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

    <InputModal 

        :aperta="modalAperta" 
        @claudere="modalAperta=false"
        @valorem="cumNovusValorem"
        placeholder="Introduce el nombre del proyecto"
        titulus="Nuevo proyecto"
        subtitulus="Dale un nombre apropiado a tu proyecto"

    />

    <fab-button @click="modalAperta = true">
        <AddCircle />
    </fab-button> 

</template>

<script lang="ts" setup>

import FabButton from '@/modulorum/commune/components/FabButton.vue';
import InputModal from '@/modulorum/commune/components/InputModal.vue';
import AddCircle from '@/modulorum/commune/icons/AddCircle.vue';
import { ref } from 'vue';

const modalAperta = ref(false);

const cumNovusValorem = ( projectNomen: string ) => {

}

</script>