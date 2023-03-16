<script>
	import Game from "$lib/games/cytosketch/App.svelte";
	import { width , height} from "$lib/games/cytosketch/game";
</script>

<svelte:window 
bind:innerWidth={$width} 
bind:innerHeight={$height} 

/>



<Game></Game>
