'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Hello = ({ width = 300, height = 300 }) => {
    const containerRef = useRef(null)

    const nodeRefs = {
        node1: useRef(null),
        node2: useRef(null),
        node3: useRef(null),
        node4: useRef(null)
    }

    const pathRefs = {
        path1to2: useRef(null),
        path1to3: useRef(null),
        path2to4: useRef(null)
    }

    const [paths, setPaths] = useState({
        path1to2: '',
        path1to3: '',
        path2to4: ''
    })

    const [activeNodes, setActiveNodes] = useState({
        node2: false,
        node3: false,
        node4: false
    })

    // Get element center relative to container
    const getMid = el => {
        const box = el.getBoundingClientRect()
        const containerBox = containerRef.current.getBoundingClientRect()
        return {
            x: box.left + box.width / 2 - containerBox.left,
            y: box.top + box.height / 2 - containerBox.top
        }
    }

    const generateCurvePath = (start, end) => {
        const midX = (start.x + end.x) / 2
        return `M ${start.x},${start.y} C ${midX},${start.y} ${midX},${end.y} ${end.x},${end.y}`
    }

    const updatePaths = () => {
        const mid1 = getMid(nodeRefs.node1.current)
        const mid2 = getMid(nodeRefs.node2.current)
        const mid3 = getMid(nodeRefs.node3.current)
        const mid4 = getMid(nodeRefs.node4.current)

        setPaths({
            path1to2: generateCurvePath(mid1, mid2),
            path1to3: generateCurvePath(mid1, mid3),
            path2to4: generateCurvePath(mid2, mid4)
        })
    }

    useEffect(() => {
        updatePaths()
        window.addEventListener('resize', updatePaths)
        return () => window.removeEventListener('resize', updatePaths)
    }, [])

    useEffect(() => {
        const animatePath = (ref, onComplete) => {
            const length = ref.current.getTotalLength()
            gsap.set(ref.current, {
                strokeDasharray: length,
                strokeDashoffset: length
            })
            return gsap.to(ref.current, {
                strokeDashoffset: 0,
                duration: 1.2,
                ease: 'power2.out',
                onComplete
            })
        }

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

        tl.add(animatePath(pathRefs.path1to2, () => setActiveNodes(n => ({ ...n, node2: true }))))
        tl.add(animatePath(pathRefs.path1to3, () => setActiveNodes(n => ({ ...n, node3: true }))))
        tl.add(animatePath(pathRefs.path2to4, () => setActiveNodes(n => ({ ...n, node4: true }))))

        tl.add(() => setActiveNodes({ node2: false, node3: false, node4: false }), '+=1')

        return () => tl.kill()
    }, [paths])

    const renderNode = (ref, isActive) => (
        <div
            ref={ref}
            className={`p-2 border bg-white border-gray-400 rounded-full overflow-hidden transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale'
                }`}
            style={{ width: 50, height: 50 }}
        >
            <img
                src="https://www.promptly.co.in/logo.png"
                alt="Node"
                className="w-full h-full object-cover"
            />
        </div>
    )


    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ width, height }}
        >
            {/* SVG Paths with Gradients */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0073E6" />
                        <stop offset="100%" stopColor="#FF6347" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="red" />
                        <stop offset="100%" stopColor="yellow" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#21CFE0" />
                    </linearGradient>
                </defs>

                {Object.entries(paths).map(([key, d]) => (
                    <path
                        key={key}
                        ref={pathRefs[key]}
                        d={d}
                        fill="none"
                        stroke={`url(#${key === 'path1to2' ? 'gradient1' : key === 'path1to3' ? 'gradient2' : 'gradient3'})`}
                        strokeWidth="3"
                    />
                ))}
            </svg>

            {/* Scaled Node Positions */}
            <div className="absolute left-1/2 top-[10%] -translate-x-1/2">
                {renderNode(nodeRefs.node1, true, '#0073E6')}
            </div>

            <div className="absolute w-full top-[40%] flex justify-between px-[10%]">
                {renderNode(nodeRefs.node2, activeNodes.node2, '#21CFE0')}
                {renderNode(nodeRefs.node3, activeNodes.node3, '#FF6347')}
            </div>

            <div className="absolute top-[75%] left-[25%]">
                {renderNode(nodeRefs.node4, activeNodes.node4, '#FFD700')}
            </div>
        </div>
    )
}

export default Hello
