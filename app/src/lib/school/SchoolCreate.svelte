<script lang="ts">
    import {pb} from '$lib/Pocketbase';
	import { SchoolStore } from '$lib/Stores';

    let schoolName =''

    export async function addSchool(){
        try{
            let data = {
                school_name: schoolName
            }

            const newSchool: any = await pb.collection('school').create(data);
            SchoolStore.update((schools) => [...schools, newSchool])
            
        }catch(err){
            console.log('error creating school');
        }
    }
</script>

<form on:submit={addSchool}>
    <label for="schoolName">School Name:</label>
    <input type="text" id="schoolName" bind:value={schoolName} />
    <button type="submit">Create School</button>
</form>