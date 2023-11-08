import React from 'react';

const Footer = () => {
    const handleSubscribe = e => {
        e.preventDefault();
    }
    return (
        <footer class="bg-gray-900 ">
            <div class="container py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
           
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
                    <div class="col-span-full lg:col-span-1 flex gap-4 md:block">
                        <img src="/fav.png" className='w-8 md:w-10 mb-2' />
                        <a class="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">MealConnect</a>
                        <p className='hidden lg:block text-slate-400 text-xs mt-4'>We are a dedicated community fostering food sharing and surplus reduction for a more sustainable and caring world.</p>
                    </div>

                    <div class="col-span-1">
                        <h4 class="font-semibold text-gray-100">About Us</h4>

                        <div class="mt-3 grid space-y-3">
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">How It Works</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Donor Guidelines</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">FAQ</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Recipient Guidelines</a></p>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <h4 class="font-semibold text-gray-100">Community</h4>

                        <div class="mt-3 grid space-y-3">
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Mission & Values</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Our Partners</a></p>
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Support</a> <span class="inline ml-1 text-xs bg-[#FF6C22] text-white py-1 px-2 rounded-md">We're hiring</span></p>
                            <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Testimonials</a></p>
                        </div>
                    </div>

                    <div class="col-span-2">
                        <h4 class="font-semibold text-gray-100 mb-4">Stay up to date</h4>
                        <form>
                            <div className="form-control">
                                <div className="relative">
                                    <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                    <button onClick={handleSubscribe} className="btn absolute top-0 right-0 rounded-l-none">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="mt-5 lg:mt-12 flex justify-between">
                    <div class="flex justify-between items-center">
                        <p class="text-sm text-gray-400">© 2023 MealConnect. All rights reserved.</p>
                    </div>

                    <div>
                        <a class="inline-flex justify-center items-center gap-x-3.5 w-8 h-8 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6C22] focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="https://github.com/developedbyrayhan" rel="noreferrer" target="_blank">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                        <a class="inline-flex justify-center items-center gap-x-3.5 w-8 h-8 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6C22] focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="https://github.com/developedbyrayhan" rel="noreferrer" target="_blank">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                        </a>
                        <a class="inline-flex justify-center items-center gap-x-3.5 w-8 h-8 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6C22] focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="https://github.com/developedbyrayhan" rel="noreferrer" target="_blank">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </a>
                        <a class="inline-flex justify-center items-center gap-x-3.5 w-8 h-8 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6C22] focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="https://github.com/developedbyrayhan" rel="noreferrer" target="_blank">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;