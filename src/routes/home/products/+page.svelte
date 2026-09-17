<script>
	import PageTitle from "$lib/components/common/PageTitle.svelte";
	import TableList from "$lib/components/common/TableList.svelte";


    const tableHeaders = ["id", "Name", "Price", "Category"]
    const rows = [
        [1,'Prakash', 'prakash@gmail.com', 'Active'],
        [2, 'John', 'john@gmail.com', 'Inactive'],
        [3, 'David', 'david@gmail.com', 'Active']
    ]
    
</script>





<div class="page">

    <div>
        <PageTitle 
            pageTitle = {"PRODUCTS"}
        />
    </div>

    <!-- TABLE -->
    <div>
        <TableList
            tableHeaders = {tableHeaders}
            rows = {rows}
        />

    </div>
    
</div>


<style>



</style>