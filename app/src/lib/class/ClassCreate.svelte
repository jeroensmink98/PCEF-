<script lang="ts">
	import { fetchBooks } from '$lib/Book';
	import { fetchLevels } from '$lib/Level';
    import {pb} from '$lib/Pocketbase';
	import { ClassStore } from '$lib/Stores';
	import { fetchTeachers } from '$lib/Teacher';
	import {onMount} from 'svelte';

    let classSubject ='';
    let classStartTime ='';
    let classEndTime = '';
    let levels: any = [];
    let teachers: any =[];
    let books: any = [];

   
    onMount(async () => {
        books = await fetchBooks()
        levels = await fetchLevels()
        teachers = await fetchTeachers()    
    })

    export async function addClass(){
        try{
            let data = {
                subject: classSubject
            }

            const newClass: any = await pb.collection('class').create(data);
            ClassStore.update((classes) => [...classes, newClass])
            
        }catch(err){
            console.log('error creating class');
        }
    }
</script>

<form on:submit={addClass}>
    <label for="subject">Subject:</label>
    <input type="text" id="subject" bind:value={classSubject} />
    <br />
    <label for="startTime">Start time:</label>
    <input type="text" id="startTime" bind:value={classStartTime}/>
    <label for="startTime">End time:</label>
    <input type="text" id="startTime" bind:value={classEndTime}/>

    <br />
    <button type="submit">Create Class</button>
</form>



