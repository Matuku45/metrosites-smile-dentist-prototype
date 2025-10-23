import React from 'react'
import { motion } from 'framer-motion'


export default function TestimonialCard({name, text}){
return (
<motion.div whileHover={{ scale: 1.02 }} className="card p-4 bg-white shadow rounded">
<p className="text-gray-700">"{text}"</p>
<div className="mt-3 text-sm font-semibold">— {name}</div>
</motion.div>
)
}