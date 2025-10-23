import React from 'react'


export default function Footer(){
return (
<footer className="bg-neutral text-neutral-content mt-8">
<div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<h3 className="font-bold text-lg">Smile Dentist</h3>
<p className="text-sm">Modern dental care for the whole family. Open Mon–Fri 8:00–17:00</p>
</div>
<div>
<h4 className="font-semibold">Contact</h4>
<p className="text-sm">123 Smile Street</p>
<p className="text-sm">Cape Town, South Africa</p>
<p className="text-sm">+27 12 345 6789</p>
</div>
<div>
<h4 className="font-semibold">Follow</h4>
<div className="flex gap-2 mt-2">
<a className="btn btn-ghost btn-sm">Facebook</a>
<a className="btn btn-ghost btn-sm">Instagram</a>
</div>
</div>
</div>
<div className="bg-black/5 text-center py-3 text-sm">© {new Date().getFullYear()} Smile Dentist — Prototype</div>
</footer>
)
}