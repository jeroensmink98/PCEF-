<script lang="ts">
	import { ClassStore } from '$lib/Stores';
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '$lib/Pocketbase';
	import ClassCreate from './ClassCreate.svelte';


    export async function getClasses(){
        try{
            const resultList: any = await pb.collection('class').getList(1, 50, {
                expand: 'book, level, teacher',

            });
            ClassStore.set(resultList.items)
        }catch(err){
            
        }
        
    }

    export async function deleteClass(classObject: any){
        try{
            await pb.collection('class').delete(classObject.id);
            ClassStore.update((classes) => classes.filter((c) => c.id !== classObject.id));
        }catch(err){
           
        }
    }

    onMount(getClasses)
</script>

<ClassCreate/>
<hr>
<div class="classes">
    {#each $ClassStore as classObject (classObject.id) }
        <div class="class">
            <div class="class_name">
                <p>name: <b>{classObject.subject}</b> </p>
                <p>book: <b>{classObject.expand?.book?.book_name}</b></p>
                <p>level: <b>{classObject.expand?.level?.level_name}</b></p>
                <p>teacher: <b>{classObject.expand?.teacher?.teacher_name}</b></p>
                <p>start_time: <b>{classObject.start_time}</b></p>
                <p>end_time: <b>{classObject.end_time}</b></p>
                <button on:click={() => deleteClass(classObject)}>Delete</button>
            </div>
        </div>
    {/each}
</div>