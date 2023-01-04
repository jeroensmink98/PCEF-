<script lang="ts">
	import { TeacherStore } from '$lib/Stores';
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '$lib/Pocketbase';
	import TeacherCreate from './TeacherCreate.svelte';
	import { fetchTeachers } from '$lib/Teacher';
    
    
    export async function deleteTeacher(teacher: any){
        try{
            await pb.collection('teacher').delete(teacher.id);
            TeacherStore.update((teachers) => teachers.filter((t) => t.id !== teacher.id));
        }catch(err){
           
        }
    }
    onMount(async () => {
        const teachers: any = await fetchTeachers()
        TeacherStore.set(teachers)
    });
</script>
<TeacherCreate/>
<hr>
<div class="teachers">
    {#each $TeacherStore as teacher }
        <div class="teacher">
            <div class="teacher_name">
                <p>{teacher.teacher_name}</p>
                <button on:click={() => deleteTeacher(teacher)}>Delete</button>
            </div>
        </div>
    {/each}
</div>