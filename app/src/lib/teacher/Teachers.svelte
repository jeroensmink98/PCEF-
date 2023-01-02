<script lang="ts">
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '../pocketbase';

    let teachers = [];
    let unsubscribe: () => void;

    onMount(async () => {
        // Get initial teachers
        const resultList = await pb.collection('teacher').getFullList();
        console.log(resultList);
        
        teachers = resultList;

    });

    onDestroy(() => {
        unsubscribe?.();
    });

</script>