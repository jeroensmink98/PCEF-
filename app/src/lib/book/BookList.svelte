<script lang="ts">
	import { BookStore } from '$lib/Stores';
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '$lib/Pocketbase';
	import BookCreate from './BookCreate.svelte';
	
    
    export async function getBooks(){
        try{
            const resultList: any = await pb.collection('book').getFullList();
            BookStore.set(resultList)
        }catch(err){
            
        }
        
    }

    export async function deleteBook(book: any){
        try{
            await pb.collection('book').delete(book.id);
            BookStore.update((books) => books.filter((b) => b.id !== book.id));
        }catch(err){
           
        }
    }

    onMount(getBooks)
</script>
<BookCreate/>
<div class="books">
    {#each $BookStore as book }
        <div class="book">
            <div class="book_name">
                <p>{book.book_name}</p>
                <button on:click={() => deleteBook(book)}>Delete</button>
            </div>
        </div>
    {/each}
</div>