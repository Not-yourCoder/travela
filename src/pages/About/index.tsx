import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

const AboutPage = (props: Props) => {
    const heroRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const teamRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Hero fade-in on mount
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: 'power3.out',
        })

        // Content section slide-up on scroll
        gsap.from(contentRef.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 80%',
            },
        })

        // Team cards animation on scroll
        // gsap.from(teamRef.current?.children, {
        //     opacity: 0,
        //     y: 50,
        //     duration: 0.8,
        //     stagger: 0.2,
        //     ease: 'power3.out',
        //     scrollTrigger: {
        //         trigger: teamRef.current,
        //         start: 'top 80%',
        //     },
        // })
    }, [])

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-24 px-6 rounded-lg shadow-lg"
            >
                <h1 className="text-5xl font-bold mb-4">About Us</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    We’re a passionate team of designers, developers, and creators — building beautiful,
                    performant, and accessible web experiences.
                </p>
            </section>

            {/* Content Section */}
            <section
                ref={contentRef}
                className="container mx-auto max-w-3xl px-6 text-gray-700 space-y-6"
            >
                <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
                <p>
                    Our mission is to deliver digital products that combine intuitive design, technical
                    excellence, and seamless performance. We believe technology should feel human and
                    delightful to use.
                </p>
                <p>
                    Through a focus on thoughtful design, reliable engineering, and meaningful
                    collaborations — we aim to craft experiences that leave a lasting impact.
                </p>
            </section>

            {/* Team Section */}
            <section
                ref={teamRef}
                className="container mx-auto px-6"
            >
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { name: 'Arya', role: 'Frontend Developer', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
                        { name: 'Sanya', role: 'UI/UX Designer', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
                        { name: 'Rohit', role: 'Backend Developer', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-indigo-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default AboutPage
