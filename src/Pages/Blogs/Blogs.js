import React from 'react';
import './Blogs.css';
import backgroundImg from '../../images/backgroundimg.png';

const Blogs = () => {

    const imgURL =
        `${backgroundImg}`

    return (
        <div
            className="hero h-96"
            style={{
                backgroundImage: `url(${imgURL})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60" />
            <div className="text-center hero-content text-neutral-content">

                <div className="w-full">
                    <h1 className="mb-6 text-5xl font-bold">
                        1:  How will you improve the performance of a React Application?
                    </h1>
                    <p className="text-lg">
                        {/* Built with images from{" "}
                        <a
                            href="https://unsplash.com/developers"
                            className="hover underline mt-8 bg-white px-2 py-1.5 rounded-sm text-black"
                        >
                            Unsplash API
                        </a> */}

                        Answer:  Performance is much more important for any application for making the application user friendly. Performance is the key for any developers. React application as a client application its performance is very important. To improve the performance of a react application there are several ways which are discussed below:
                        a)	Keeping component state local: By keeping component state local where is needed React Application performance can be enhanced as a state update in a parent component re-renders the parent and its child components.
                        b)	Preventing component unnecessary re-rendering: Memoization is an enhancing strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.
                        c)	Splitting react code using dynamic import: Splitting react code is an another optimization strategy for react application.
                        d)	Virtualization list or windowing in react applications: Both react window and react virtualized are well known libraries by using these application performances will be improved.
                        e)	 Lazy loading: Using lazy loading in react is very important for improving performance of react application.


                    </p>
                </div>

                <div className="w-full">
                    <h1 className="mb-6 text-5xl font-bold">
                        2: What are the different ways to manage a state in a React application?
                    </h1>
                    <p className="text-lg">
                        {/* Built with images from{" "}
                        <a
                            href="https://unsplash.com/developers"
                            className="hover underline mt-8 bg-white px-2 py-1.5 rounded-sm text-black"
                        >
                            Unsplash API
                        </a> */}

                        Answer: State management is one of the most important for react application. For instance, if page load without getting data or before loading spinner then the page will generate errors. There are several ways for managing state. These are:
                        a)	Communication state: Communication plays a crucial role in storing information in different states. It stores important aspect of application loading spinners, error messages, pop-ups etc.
                        b)	Data State: will receive all the information from the outer world. Every piece of information will have an identifier that will help the Data state recognize and request for particular information that it can store.
                        c)	Control State: In react app, the control doesn’t represent the application’s environment. Instead of it, it refers to the state which the user has input into the app.
                        d)	Session State: Session state contains information about the user of the application such as user id, permissions, password etc. It may be included information on how the application should work according to a particular user’s preferences.
                        e)	Location state: One of the most interesting things about location states is that it typically stores URLs in the forms of string-like structures even when they don’t actually represent things. user can build a location tree using different URLS that represent different parts of your application.



                    </p>
                </div>

                <div className="w-full">
                    <h1 className="mb-6 text-5xl font-bold">
                        3: How does prototypical inheritance work?
                    </h1>
                    <p className="text-lg">
                        {/* Built with images from{" "}
                        <a
                            href="https://unsplash.com/developers"
                            className="hover underline mt-8 bg-white px-2 py-1.5 rounded-sm text-black"
                        >
                            Unsplash API
                        </a> */}

                        Answer:  Prototypical inheritance is the ability of getting the accessibility of object properties from another object.
                        We use a JavaScript prototype to add new properties and methods to an existing object constructor.
                        We can then essentially tell our JS code to inherit properties from a prototype.
                        Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                        All JavaScript objects inherit properties and methods from a prototype:
                        •	Date objects inherit from Date.prototype.
                        •	Array objects inherit from Array.prototype.
                        •	Player objects inherit from Player.prototype.



                    </p>
                </div>

                <div className="w-full">
                    <h1 className="mb-6 text-5xl font-bold">
                        4: Why you do not set the state directly in React. For example,
                        if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts
                    </h1>
                    <p className="text-lg">
                        {/* Built with images from{" "}
                        <a
                            href="https://unsplash.com/developers"
                            className="hover underline mt-8 bg-white px-2 py-1.5 rounded-sm text-black"
                        >
                            Unsplash API
                        </a> */}

                        Answer: There are several reasons behind for not setting state directly in react. Some reasons are discussed below:
                        a)	If we set state directly, calling the setState() afterward may just replace the update we made.
                        b)	When we directly set the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        c)	We will lose control of the state across all components.
                        Reason for not setting products=[....] instead, we use the setProducts:
                        We know that useState returns a pair of values the current state and a function which updates it. For updating purposes we use setProducts not products=[...]



                    </p>
                </div>

                <div className="w-full">
                    <h1 className="mb-6 text-5xl font-bold">
                        5: What is a unit test? Why should write unit tests?
                    </h1>
                    <p className="text-lg">
                        {/* Built with images from{" "}
                        <a
                            href="https://unsplash.com/developers"
                            className="hover underline mt-8 bg-white px-2 py-1.5 rounded-sm text-black"
                        >
                            Unsplash API
                        </a> */}

                        Answer:
                        Unit testing: Unit test is the most important part for before delivering any software. A unit testing is a process of testing the smallest piece of code that can be logically isolated in a system. The goal of unit testing is to break part of source code and check that each part works properly.
                        The reason of writing unit tests: The benefits of writing unit tests can’t be described in a word. Some benefits unit tests are discussed below:
                        a) Process becomes faster and easier: Unit testing methodology can save a lot of time and make the whole process faster and easier.
                        b) Quality of code: Unit testing methodology makes the code qualityful.
                        c) Find the software bug easily: Unit testing process helps to find out software bug easier and faster.




                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;