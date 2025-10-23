import React from 'react'
import { Tooth } from 'lucide-react'
import { motion } from 'framer-motion'


export default function ServiceCard({title, desc}){
return (
<motion.article whileHover={{ y: -6 }} className="card bg-white shadow-md p-5 rounded-lg">
<div className="flex items-center gap-3">
<div className="bg-sky-100 p-3 rounded">
<Tooth />
</div>
<div>
<h4 className="font-semibold">{title}</h4>
<p className="text-sm text-gray-600">{desc}</p>
</div>
</div>
</motion.article>
)
}