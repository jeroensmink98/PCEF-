<script lang="ts">
    import {pb} from '$lib/Pocketbase';
	import { BookStore } from '$lib/Stores';

    let bookName =''

    export async function addBook(){
        try{
            let data = {
                book_name: bookName
            }

            const newBook: any = await pb.collection('book').create(data);
            BookStore.update((books) => [...books, newBook])
            
        }catch(err){
            console.log('error creating book');
        }
    }
</script>

<form on:submit={addBook}>
    <label for="bookName">Book Name:</label>
    <input type="text" id="bookName" bind:value={bookName} />
    <button type="submit">Create Book</button>
</form>