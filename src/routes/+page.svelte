<script>
	import { goto } from '$app/navigation';
	import { api } from '$lib/api/protobuf-client';
	import '../app.css';
	import { auth } from '../proto';

    let errors = $state({
        email: "",
        password: ""
    });


    let formData = $state({
        email: "", 
        password: ""
    })

    const validateInput = () => {

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = '#Invalid email address';
        } else errors.email = ""

        if (formData.password?.length < 4) {
            errors.password = "#Password must be at least 4 characters"
        } else errors.password = ""

        return errors.email || errors.password

    }

    const onSubmit = async (event) => {
        event.preventDefault()

        const isInvalidInput = validateInput()

        if (isInvalidInput) return 

        //api call
        const res = await api.post(
            '/auth/login', 
            auth.LoginRequest, 
            auth.LoginResponse,
            formData
        )
        if (res.success) {
            console.log(res.message)
            await goto('/home');
        } else {
            console.error(res.message)
        }
    }

</script>


<div class="container">


    <div class="title">PS BILLING</div>

    <div class="box">

        <div class="welcome">welcome Back</div>

        <form onsubmit={onSubmit}>

            <label for="email"> Email <br>
                <input type="text" id="email" placeholder="xxxx@gmail.com" bind:value={formData.email}>
                {#if errors.email}
                    <p class={`error`}>{errors.email}</p>
                {/if}
            </label> 

            <br>

            <label for="password"> Password <br>
                <input type="password" id="password" placeholder="pass....." bind:value={formData.password}>
                {#if errors.password}
                    <p class={`error`}>{errors.password}</p>
                {/if}
            </label>


            <br>

            <button>
                Login
            </button>

        </form>


    </div> 
</div>




<style>

.error {
    width: 90%;
    color: rgb(255, 33, 33);
    font-size: 1.2rem;
}

.container {
	min-height: 100vh;
	display: flex;
    gap:20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    letter-spacing: 3px;
    font-size: 55px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    background: linear-gradient(to left, #a77829, #fff3c5, #dfac56);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

.box {
    background: #162238;
    border: 1px solid #ffe59e;
    height: max(65vh, 400px);
    width: min(90%, 500px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
}

form {
    display: flex;
    gap:25px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.welcome {
    font-size: 6rem;
    font-weight: 500;
    font-family: 'Tangerine', serif;
    color: #BC8B36;

}

form label {
    font-size: 1.7rem;
    width: 85%;
    color: #978d72;
}

form input {
    height: 5vh;
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    border-radius: 10px;
    color: #000000;
    padding: 0.4rem;
    background-color: #e8f5ff;
    border: 2px solid #ffc421;

}
form input:focus {
    border: 3px solid #ffa928;
    outline: none;
}

button {
    width: 200px;
    height: 45px;
    border-radius: 10px;
    border: 1px solid rgb(255, 235, 180);
    background: linear-gradient(to left, #BC8B36, #ffec9f, #BC8B36);
    color: rgb(63, 25, 0);
    box-shadow: 0 4px 10px hsl(40, 56%, 65%, .6), 
                0 4px 25px hsl(40, 56%, 65%, 1);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-style: oblique;
}






</style>
