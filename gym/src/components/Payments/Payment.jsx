import React, { useState } from "react";
import PaymentBreadcrum from "./PaymentBreadcrum";
import { useSelector } from 'react-redux'

const Payment = () => {

    const [paymentData , setPaymentdata] =useState()

    let totalamount = useSelector(state => state.cart.TotalAmount);

    let tax = totalamount *0.18 ; 



    return (
        <div>
            
            <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-6">
            <PaymentBreadcrum />
                <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div class="mx-auto max-w-5xl">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>

                        <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                            <form action="#" class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
                                <div class="mb-6 grid grid-cols-2 gap-4">
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="full_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First name </label>
                                        <input type="text" id="full_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="jon" name="firstname" required />
                                    </div>

                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Last name  </label>
                                        <input type="text" id="card-number-input"
                                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                            placeholder="snow" name="lastname" required />
                                    </div>

                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Address(House no.)  </label>
                                        <input type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required />
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Town/City*  </label>
                                        <input type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required />
                                    </div>

                                    <div>
                                        <label for="card-expiration-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Pincode* </label>
                                        <div class="relative">

                                            <input id="card-expiration-input" type="text" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="cvv-input" class="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                                            state*
                                        </label>
                                        <select type="text" id="cvv-input" aria-describedby="helper-text-explanation" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                            <option>New Delhi</option>
                                            <option>Mumbai </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-span-2 sm:col-span-1">
                                    <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email </label>
                                    <input type="email" name="emial" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="john@123gmail.com" required />
                                </div>
                                <div class="col-span-2 sm:col-span-1">
                                    <label for="card-number-input" class="mb-2 mt-4 block text-sm font-medium text-gray-900 dark:text-white"> phone number </label>
                                    <input type="text" name="phonenumber" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="91+ 88..." required />
                                </div>
                                {/* <div class="col-span-2 sm:col-span-1">
              <label for="card-number-input" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Card number* </label>
              <input type="text" id="card-number-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
            </div> */}


                                <button type="submit" class="flex w-full items-center justify-center mt-[50px] rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay now</button>
                            </form>

                            <div class="mt-6 grow sm:mt-8 lg:mt-0">
                                <div class="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                                    <div class="space-y-2">
                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                                            <dd class="text-base font-medium text-gray-900 dark:text-white">{totalamount}</dd>
                                        </dl>

                                        {/* <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                                            <dd class="text-base font-medium text-green-500">-$299.00</dd>
                                        </dl>

                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                            <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                                        </dl> */}

                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">GST (18%)</dt>
                                            <dd class="text-base font-medium text-gray-900 dark:text-white">+ {tax}</dd>
                                        </dl>
                                    </div>

                                    <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd class="text-base font-bold text-gray-900 dark:text-white">{totalamount + tax}</dd>
                                    </dl>
                                </div>

                                <div class="mt-6 flex items-center justify-center gap-8">
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
                                    <img class="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                                    <img class="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
                                </div>
                            </div>
                        </div>

                        <p class="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
                            Payment processed by
                            fitness plaza
                            -India New Delhi
                        </p>
                    </div>
                </div>
            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
        </div>
    )

}

export default Payment