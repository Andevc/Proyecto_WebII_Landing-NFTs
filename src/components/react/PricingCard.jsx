import React from 'react';
import pricingCard from '@lib/pricing.json';
import '@styles/PricingCard.css'

export default function PricingCard(){

    return(
        <section className="mx-auto border w-full grid md:grid-cols-3 gap-16 max-w-screen-lg mt-28">
            {
            pricingCard.map((plan, index) =>  
            {                                           
                const x = plan.pupular ? "primary" : "secondary";
                (
                    <section key={index} className='border grid border-blue-500 w-[300px]'>
                        <section>
                            {
                                plan.price && typeof plan.price === "object" 
                                ? ( 
                                <>
                                    <span className="text-3xl font-semibold text-white">$ </span>
                                    <span className="text-5xl font-extrabold tracking-tight text-white">{plan.price.monthly}</span>
                                    <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"> /month</span>
                                </>)
                                : (
                                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                )
                            }
                            <p>{plan.info}</p>
                        </section>
                        <section>
                            <ul>
                                {
                                    plan.features.map((item, index) => (
                                        <li key={index}>
                                            <svg className="flex-shrink-0 w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                            </svg>
                                            <p>{item}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                        <section>

                        </section>

                    </section>
                )
                
            })
            }
        </section>
    );
}