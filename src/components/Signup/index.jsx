import { useFormik } from 'formik';
import validationSchema from "./validationSchema";

function App() {
    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            gender: 'male',
            adStatus: true,
            password:'',
            rePassword:''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: validationSchema
    });
    return (
        <div className={'bg-white p-5 rounded-xl w-[600px] shadow'}>
            <h1 className={'text-center mb-2 text-2xl'}>Sign Up</h1>
            <form onSubmit={handleSubmit} className={'flex flex-col gap-2'}>
                <div className={'flex gap-4'}>
                    <div className={'w-full flex flex-col gap-2 [&>small]:text-red-500 [&>input]:border [&>input]:p-2 [&>input]:indext-4 [&>input]:bg-slate-100 [&>input]:outline-0 [&>input]:rounded-lg'}>

                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            placeholder="Jane"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={errors.firstName && touched.firstName ? 'border-red-500' : undefined}
                        />
                        {errors.firstName && touched.firstName && <small>{errors.firstName}</small>}

                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={errors.lastName && touched.lastName ? 'border-red-500' : undefined}/>
                        {errors.lastName && touched.lastName && <small>{errors.lastName}</small>}

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? 'border-red-500' : undefined}
                        />
                        {errors.email && touched.email && <small>{errors.email}</small>}

                    </div>

                    <div className={'w-full flex flex-col gap-2 [&>small]:text-red-500 [&>input]:border [&>input]:p-2 [&>input]:indext-4 [&>input]:bg-slate-100 [&>input]:outline-0 [&>input]:rounded-lg'}>

                        <label htmlFor="password">Parola</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={errors.password && touched.password ? 'border-red-500' : undefined}/>
                        {errors.password && touched.password && <small>{errors.password}</small>}

                        <label htmlFor="rePassword">Parola Tekrar</label>
                        <input
                            type="password"
                            id="rePassword"
                            name="rePassword"
                            placeholder="Re-Password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={errors.rePassword && touched.rePassword ? 'border-red-500' : undefined}/>
                        {errors.rePassword && touched.rePassword && <small>{errors.rePassword}</small>}

                        <div className={'flex flex-col'}>

                            <div className={'flex gap-2'}>
                                <label htmlFor="male">
                                    <input id="male" type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === 'male'}/>
                                    <span className={'ml-2'}>Male</span>
                                </label>

                                <label htmlFor="female">
                                    <input id="female" type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === 'female'}/>
                                    <span className={'ml-2'}>Female</span>
                                </label>
                            </div>

                            <div>
                                <label htmlFor="adStatus">
                                    <input id="adStatus" type="checkbox" name="adStatus" value={true} onChange={handleChange} checked={values.adStatus}/>
                                    <span className={'ml-2'}>Ads From Us</span>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'flex justify-end'}>
                    <button disabled={Object.values(errors).length > 0} type="submit" className={'px-4 py-2 bg-green-300 text-green-700 transition-all hover:bg-green-500 hover:text-white rounded-lg'}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default App;
