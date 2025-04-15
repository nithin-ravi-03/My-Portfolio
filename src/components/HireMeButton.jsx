import { Link } from 'react-router-dom'

export default function HireMeButton() {
  return (
    <Link 
  to="/contact" 
  className="z-50 fixed right-6 bottom-6 w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 animate-spin-slow"
  aria-label="Hire Me"
>

      <span className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold">Hire Me</span>
      </span>
      <span className="absolute inset-0 border-2 border-dashed border-blue-300 rounded-full animate-spin-slow opacity-70"></span>
    </Link>
  )
}