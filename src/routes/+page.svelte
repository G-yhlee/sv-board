<script>
	import { onNav, PageName } from "$lib/stores/store";
    import { onMount } from 'svelte';
 
    onMount(async () => {
            onNav(PageName.tictactoe.name)
    });
    

</script>


