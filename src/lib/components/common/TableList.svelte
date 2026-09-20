<script>
	import Pagination from "./Pagination.svelte";


    const {
        tableHeaders,
        rows
    } = $props()


</script>


<div class="table">

    <!-- Header -->
    <div class="row header" style={`grid-template-columns: repeat(${tableHeaders.length}, 1fr)`}>
        {#each tableHeaders as header}
            <div class="cell">{header}</div>
        {/each}
    </div>

    {#each rows as row}
        <div
            class="row"
            style={`grid-template-columns: repeat(${tableHeaders.length}, 1fr)`}
        >
            {#each row as cell}
                <div class="cell">{cell}</div>
            {/each}
        </div>
    {/each}

    <Pagination />

</div>


<style>




.table {
    display: grid;
    width: 100%;
    /* position: relative; */
    /* isolation: isolate; */

    background: #1e222bb4;

    /* backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%); */

    border: 1px solid #bea96f;
    border-left: 5px solid #bea96f;
    border-right: 5px solid #bea96f;

    border-radius: 10px;

    box-shadow:
        0 10px 40px rgba(83, 83, 83, 0.2),
        inset 0 1px 0 rgba(46, 43, 43, 0.2);

    overflow: hidden;
}






.row {
    display: grid;
    /* border-radius: 20px; */
    /* grid-template-columns: repeat(var(--columns), 1fr); */
}

.cell {
    padding: 12px 0;
    border-bottom: 1px solid #424242;
    letter-spacing: 1.2px;
    /* background-color: antiquewhite; */
    text-align: center;
}

.header {
    /* background: linear-gradient(#0000ff50, black); */
    /* background: linear-gradient( #161616, #2254af); */
    background: linear-gradient(  #0a1a386e, #234d996e);
    
    
    
    
}
.header .cell {
    padding: 15px 0;
    color: #ffc455;
    font-weight: 600;
    font-size: 1.25rem;
    border-bottom: 1px solid #bea96f;
    
}


</style>