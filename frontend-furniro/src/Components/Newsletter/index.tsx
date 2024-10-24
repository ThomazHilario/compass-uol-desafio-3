// React hook form
import { useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Toast
import { toast } from 'sonner'

// Interface
interface SchemaNewsletterProps{
    email:string
}

// Schema Newsletter
const schema = z.object({
    email:z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid Email')
})

// css import
import './newsletter.css'

export const Newsletter = () => {

    // Desetructure useForm
    const { register, handleSubmit, formState:{errors}, reset } = useForm<SchemaNewsletterProps>({resolver:zodResolver(schema)})

    // Subscribe user in newsletter
    function subscribeUserInNewsletter({email}:SchemaNewsletterProps){
        // Case have email
        if(email){
            toast.success('subscription Confirmed – Welcome to Our Newsletter!', {
                unstyled:true,
                style:{
                    display:'flex',
                    alignItems:'center',
                    gap:'2rem',
                    padding:'1rem 1rem',
                    backgroundColor:'#423f3f',
                    color:'white',
                    borderRadius:'5px'
                }
            })
        }
        
        // Reset field email
        reset({email:''})
    }

    // Logic from field
    const placeHolderContentLogic = errors.email ? errors.email.message : 'Enter Your Email Address'

    // Style input error
    const styleErrorInput= {
        borderColor:errors.email && '#f57575'
    }

    return(
        <li id='newsletter'>
            <h3>Newsletter</h3>

            <form onSubmit={handleSubmit(subscribeUserInNewsletter)}>
                <input 
                    style={styleErrorInput}
                    type="text" 
                    placeholder={placeHolderContentLogic}
                    {...register('email')}
                />

                
                <button type='submit'>SUBSCRIBE</button>
            </form>
        </li>
    )
}