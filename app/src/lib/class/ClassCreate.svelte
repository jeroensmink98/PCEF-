<script lang="ts">
    import {pb} from '$lib/Pocketbase';
	import { ClassStore } from '$lib/Stores';
	import {onMount} from 'svelte';

    let classSubject ='';
    let classStartTime ='';
    let classEndTime = '';
    let levels: any = [];
    let teachers: any =[];
    let books: any = [];

    export async function fetchLevels(){
        try{
            const resultList = await pb.collection('level').getFullList();
            levels = resultList;
        }catch(err){
            
        }
     
    }

    export async function fetchTeachers(){
        try{
            const resultList = await pb.collection('teacher').getFullList();
            teachers = resultList;
        }catch(err){

        }
    }

    export async function fetchBooks(){
        try{
            const resultList = await pb.collection('book').getFullList();
            books = resultList;
        }catch(err){

        }

    }

    onMount(async () => {
        await fetchBooks()
        await fetchLevels()
        await fetchTeachers()    
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

{#each books as book }
    <p>{book.book_name}</p>
    <p>Nicee</p>
{/each}




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



