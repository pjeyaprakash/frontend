<script>

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

</div>


<style>
/* 
.table {
    display: grid;
    width: 100%;

    background:
        linear-gradient(
            135deg,
            rgba(175, 175, 175, 0.16),
            rgba(255, 255, 255, 0.05)
        );

    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);

    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 18px;

    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.25),
        inset 0 -1px 0 rgba(255, 255, 255, 0.05);

    overflow: hidden;
} */



.table {
    display: grid;
    width: 100%;
    position: relative;
    isolation: isolate;

    background: rgba(187, 187, 187, 0.08);

    backdrop-filter: blur(30px) saturate(180%);
    -webkit-backdrop-filter: blur(30px) saturate(180%);

    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 20px;

    box-shadow:
        0 10px 40px rgba(255, 255, 255, 0.2),
        inset 0 1px 0 rgba(83, 83, 83, 0.2);
    
    overflow: hidden;
}
/* 
.table::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: -1;

    background:
        radial-gradient(
            500px circle at 0% 0%,
            rgba(255, 255, 255, 0.274),
            transparent 60%
        ),
        radial-gradient(
            400px circle at 100% 100%,
            rgba(83, 88, 88, 0.699),
            transparent 60%
        );
} */




.row {
    display: grid;
    /* grid-template-columns: repeat(var(--columns), 1fr); */
}

.cell {
    padding: 12px 16px;
    border-bottom: 1px solid #ddd;
}

    .header {
        font-weight: 600;
    }


</style>