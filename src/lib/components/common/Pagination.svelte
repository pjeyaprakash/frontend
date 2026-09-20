


<script>
	import {ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-svelte';




    const total = 200
    const rowsPerPage = 10
    let currentPage = $state(3)
    const totalPages = total/rowsPerPage



    const handleLeftClick = () => {
        currentPage = currentPage == 1 ? currentPage : currentPage - 1
    }
    const handleRightClick = () => {
        currentPage = currentPage == totalPages ? currentPage : currentPage + 1
    }

</script>


<div class="container">

    <div class="box">
        <button type="button" class="arrow" onclick={handleLeftClick}><ArrowLeftFromLine /></button>
        {#if totalPages < 5}
            {#each Array(totalPages) as _, index}
                <div class="page-number">{index+1}</div>
            {/each}

        {:else}
            <div class={`page-number ${currentPage == 1 ? 'current-page' : ''}`}>1</div>

            {#if currentPage != 1 && currentPage != totalPages}
                {#if currentPage > 2 }
                    <div class="dots">..</div>
                {/if}
                <div class="page-number current-page">{currentPage}</div>
                {#if currentPage != totalPages-1}
                    <div class="dots">..</div>
                {/if}
            {:else}
                <div class="dots">...</div>
            {/if}
            
            <div class={`page-number ${currentPage == totalPages ? 'current-page' : ''}`}>{totalPages}</div>
        {/if}
        <button onclick={handleRightClick} class="arrow"><ArrowRightFromLine /></button>
    </div>

</div>


<style>

.container {
    background: linear-gradient(#1d3261, #06142e6e);
    border-top: 1px solid #8a7641ef;
    height: min(8vh, 70px);
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 20px;
}

.box {
    display: flex;
    gap: 10px;
}
.page-number {
    background-color: #004d80;
    color: white;
    padding: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    font-weight: 900;
    border: 1px solid #ffffff8f;
}
.dots {
    text-align: center;
    padding: 10px 0;
    letter-spacing: 3px;
}
.arrow {
    height: 40px;
    width: 50px;
    /* background-color: #00395f; */
    background-color: #001f68;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffffff8f;
}
.current-page {
    background-color: #d48b03;
}



</style>