
export const testimonials = [{
    id:"review01",
    name:'Sarah Lee',
    userImage:"https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100",
    review:"Essential for my work! This tool exceeds expectations with its ease of use and accuracy. A must-have in any marketer's toolkit. Kudos to the developers!",
    designation:"Digital Marketing at Wipro",
},{
    id:"review02",
    name:'James Jacob',
    userImage:"https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80",
    review:"Fantastic tool! Easy to use with great image quality. Highly recommend for Data Analysis!",
    designation:"Data Analyst at Samsung",
},{
    id:"review03",
    name:'Alex Martinez',
    userImage:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80",
    review:"Unmatched speed and quality! Provides all details needed, with direct download for convenience. My new favorite tool",
    designation:"Student at Yale University"
}]


export const faqData = [{
    question:"How do I use the Snap API to capture a screenshot of a website?",
    answer:"To capture a screenshot of a website, simply make a POST request to our API endpoint with the URL of the website you want to capture. You'll receive a response containing the image URL, download option, image size, and date.",
}, {
    question:"What format are the screenshots returned in?",
    answer:"The screenshots are returned in PNG format, ensuring high quality and compatibility across different platforms and devices."
},{
    question:"Is there a limit to the size of the screenshots I can capture?",
    answer:"Currently, our API supports capturing screenshots of websites with a maximum resolution of 1920x1080 pixels. If the website exceeds this size, the screenshot will be automatically scaled down while preserving the aspect ratio."
},{
    question:"How long does it take to receive the screenshot after making a request?",
    answer:"Typically, you'll receive the screenshot URL and other details within a few seconds after making the request. However, this may vary depending on the server load and network conditions."
},{
    question:"Is there any authentication required to use the Snap API?",
    answer:"Currently, our API does not require authentication for making requests. However, we may introduce authentication mechanisms in the future to ensure the security and integrity of the service."
},{
    question:"Is the Snap API secure for capturing screenshots of websites?",
    answer:"Yes, we take security seriously. Our API employs industry-standard encryption protocols to ensure the confidentiality and integrity of the data exchanged between your application and our servers."
},{
    question:"Can users be sure their screenshots won't be accessed by unauthorized parties?",
    answer:"Absolutely. We prioritize user privacy and data security. Once a screenshot is captured, it is stored securely on our servers and accessible only via the unique URL provided in the API response. We do not share or distribute captured screenshots to any third parties without user consent."
}]