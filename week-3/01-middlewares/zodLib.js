const z= require("zod");

function validateInput(obj){

    const schema= z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })

    const res= schema.safeParse(obj);
    console.log(res.success);
}


validateInput({
    email:"cyb3rnaut@gmail.com",
    password: "jdscsscsvwcscscscwsc"
})
