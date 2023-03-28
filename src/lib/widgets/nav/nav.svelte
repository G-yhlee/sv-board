<script src="">
	import { onNav, PageName, S_onNav } from "$lib/stores/store";

</script>

<nav class="w-[100px] h-screen bg-gray-900">
    <div class="">
        <ul class="flex flex-col items-center justify-between">
            <button class="flex flex-col items-center justify-center w-[100px] h-[100px] hover:bg-gray-500 hover:cursor-pointer"
            data-isClick={PageName.tictactoe.name == $S_onNav}
            on:click={()=>onNav(PageName.tictactoe.name)}
            >
                <span class="text-gray-200">{PageName.tictactoe.name}</span>
            </button>

            <button class="flex flex-col items-center justify-center w-[100px] h-[100px] hover:bg-gray-500 hover:cursor-pointer"
            data-isClick={PageName.baduk.name == $S_onNav}
            on:click={()=>onNav(PageName.baduk.name)}
            >
                <span class="text-gray-200   ">{PageName.baduk.name}</span>
            </button>

            <button class="flex flex-col items-center justify-center w-[100px] h-[100px] hover:bg-gray-500 hover:cursor-pointer"
            data-isClick={PageName.tetris.name == $S_onNav}
            on:click={()=>onNav(PageName.tetris.name)}
            >
                <span class="text-gray-200   ">{PageName.tetris.name}</span>
            </button>
            <button class="flex flex-col items-center justify-center w-[100px] h-[100px] hover:bg-gray-500 hover:cursor-pointer"
            data-isClick={PageName.cytosketch.name == $S_onNav}
            on:click={()=>onNav(PageName.cytosketch.name)}
            >
                <span class="text-gray-200   ">{PageName.cytosketch.name}</span>
            </button>
            <button class="flex flex-col items-center justify-center w-[100px] h-[100px] hover:bg-gray-500 hover:cursor-pointer"
            data-isClick={PageName.canvas.name == $S_onNav}
            on:click={()=>onNav(PageName.canvas.name)}
            >
                <span class="text-gray-200   ">{PageName.canvas.name}</span>
            </button>
            <button class="flex flex-col items-center justify-center w-[100px] h-[100px] hover:bg-gray-500 hover:cursor-pointer"
            data-isClick={PageName.test.name == $S_onNav}
            on:click={()=>onNav(PageName.test.name)}
            >
                <span class="text-gray-200   ">{PageName.test.name}</span>
            </button>
        </ul>
    </div>
</nav>



<style>
[data-isClick="true"] {
    background-color: rgb(104, 127, 127);
}
</style>
